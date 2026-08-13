#!/usr/bin/env python3
"""Convert the six-quiz Dr. M cumulative PDF into a validated StudyOS bank."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import pdfplumber


QUIZZES = {
    1: ("dr-m-membrane-neuro-muscle-reflexes", "Membrane, Neurophysiology, Muscle & Spinal Reflexes"),
    2: ("dr-m-cardiovascular", "Cardiovascular"),
    3: ("dr-m-pulmonary-acid-base", "Pulmonary & Acid-Base"),
    4: ("dr-m-renal", "Renal"),
    5: ("dr-m-gi", "GI"),
    6: ("dr-m-endocrine", "Endocrine"),
}


def clean_lines(text: str) -> list[str]:
    lines = []
    for raw in text.replace("\f", "\n").splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if not line or re.fullmatch(r"Page \d+", line):
            continue
        lines.append(line)
    return lines


def parse_question_section(section: str, quiz_number: int) -> list[dict]:
    lines = clean_lines(section)
    questions: list[dict] = []
    current: dict | None = None
    current_choice: str | None = None

    for line in lines:
        if line.startswith("50 Questions |"):
            continue
        question_match = re.match(r"^(\d+)\.\s*(.*)$", line)
        choice_match = re.match(r"^([A-D])\.\s*(.*)$", line)

        if question_match:
            if current:
                questions.append(current)
            current = {
                "number": int(question_match.group(1)),
                "question": question_match.group(2).strip(),
                "choices": {},
            }
            current_choice = None
        elif choice_match and current:
            current_choice = choice_match.group(1)
            current["choices"][current_choice] = choice_match.group(2).strip()
        elif current:
            if current_choice:
                current["choices"][current_choice] += " " + line
            else:
                current["question"] += " " + line

    if current:
        questions.append(current)

    expected_numbers = list(range(1, 51))
    numbers = [item["number"] for item in questions]
    if numbers != expected_numbers:
        raise ValueError(f"Quiz {quiz_number}: expected question numbers 1-50, found {numbers}")
    for item in questions:
        if list(item["choices"]) != ["A", "B", "C", "D"]:
            raise ValueError(
                f"Quiz {quiz_number}, question {item['number']}: "
                f"expected choices A-D, found {list(item['choices'])}"
            )
    return questions


def parse_answer_key(answer_text: str, quiz_number: int) -> dict[int, str]:
    heading = re.search(
        rf"Quiz {quiz_number} - .*?(?=Quiz {quiz_number + 1} -|\Z)",
        answer_text,
        flags=re.S,
    )
    if not heading:
        raise ValueError(f"Quiz {quiz_number}: answer-key section not found")
    pairs = re.findall(r"\b(\d+)\.([A-D])\b", heading.group(0))
    answers = {int(number): letter for number, letter in pairs}
    if sorted(answers) != list(range(1, 51)):
        raise ValueError(f"Quiz {quiz_number}: expected 50 answer keys, found {len(answers)}")
    return answers


def main(pdf_path: Path, output_path: Path) -> None:
    with pdfplumber.open(pdf_path) as pdf:
        if len(pdf.pages) != 37:
            raise ValueError(f"Expected 37 pages, found {len(pdf.pages)}")
        text = "\n".join(page.extract_text(x_tolerance=2, y_tolerance=2) or "" for page in pdf.pages)

    question_text, separator, answer_text = text.partition("Answer Key")
    if not separator:
        raise ValueError("Answer Key heading not found")

    parsed_questions: list[dict] = []
    categories: list[dict] = []

    for quiz_number, (unit_name, short_title) in QUIZZES.items():
        section_match = re.search(
            rf"Quiz {quiz_number} - .*?\n(.*?)(?=Quiz {quiz_number + 1} -|\Z)",
            question_text,
            flags=re.S,
        )
        if not section_match:
            raise ValueError(f"Quiz {quiz_number}: question section not found")
        quiz_questions = parse_question_section(section_match.group(1), quiz_number)
        answers = parse_answer_key(answer_text, quiz_number)
        ids = []

        for item in quiz_questions:
            question_id = f"DRM-Q{quiz_number}-{item['number']:03d}"
            correct_letter = answers[item["number"]]
            correct_text = item["choices"][correct_letter]
            ids.append(question_id)
            parsed_questions.append(
                {
                    "id": question_id,
                    "unit": unit_name,
                    "conceptBlock": short_title,
                    "subtopic": short_title,
                    "question": item["question"],
                    "choices": item["choices"],
                    "correctAnswer": correct_letter,
                    "explanation": f"The source answer key identifies {correct_letter}. {correct_text}",
                    "questionType": "Foundation",
                    "bankType": "sprint",
                    "bankId": "dr_m_cumulative_6_quizzes_v1",
                    "contentGroup": "dr-m",
                    "sourceLabel": "Dr. M Cumulative Physiology 6 Quizzes",
                    "sourceTag": "Cumulative_Physiology_6_Quizzes.pdf",
                    "broadCategory": short_title,
                    "learningLevel": "Remember & Understand",
                    "preferredMode": "mc",
                    "scored": True,
                }
            )

        categories.append(
            {
                "order": quiz_number,
                "name": unit_name,
                "title": short_title,
                "ids": ids,
            }
        )

    if len(parsed_questions) != 300:
        raise ValueError(f"Expected 300 questions, found {len(parsed_questions)}")
    ids = [question["id"] for question in parsed_questions]
    if len(set(ids)) != 300:
        raise ValueError("Question IDs are not unique")

    output = (
        "(function(root) {\n"
        "  \"use strict\";\n\n"
        "  root.DR_M_QUESTIONS = "
        + json.dumps(parsed_questions, ensure_ascii=False, indent=2)
        + ";\n\n  root.DR_M_CATEGORIES = "
        + json.dumps(categories, ensure_ascii=False, indent=2)
        + ";\n})(typeof window !== \"undefined\" ? window : globalThis);\n"
    )
    output_path.write_text(output, encoding="utf-8")
    print(f"Wrote {len(parsed_questions)} questions across {len(categories)} categories to {output_path}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: import_dr_m_bank.py SOURCE.pdf OUTPUT.js")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
