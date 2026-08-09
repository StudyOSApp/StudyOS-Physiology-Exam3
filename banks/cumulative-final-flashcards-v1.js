(function(root) {
  "use strict";

  var sampleCards = [
    {
      id: "RENAL-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Renal",
      topic: "Nephron Transport",
      conceptId: "PCT_REABSORPTION",
      front: "Where does most filtered sodium and water reabsorption occur?",
      back: "The proximal convoluted tubule reabsorbs the largest share of filtered sodium and water."
    },
    {
      id: "RENAL-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Renal",
      topic: "Loop of Henle",
      conceptId: "DESCENDING_LIMB",
      front: "What is the key permeability of the thin descending limb?",
      back: "It is highly permeable to water, so water leaves the tubule as the filtrate descends into the increasingly concentrated medulla."
    },
    {
      id: "RENAL-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Renal",
      topic: "Loop of Henle",
      conceptId: "ASCENDING_LIMB",
      front: "Why is the thick ascending limb called a diluting segment?",
      back: "It reabsorbs solute but is essentially impermeable to water, so the tubular fluid becomes more dilute."
    },
    {
      id: "RENAL-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Renal",
      topic: "RAAS",
      conceptId: "RENIN_TRIGGER",
      front: "What conditions stimulate renin release?",
      back: "Reduced renal perfusion pressure, reduced NaCl delivery to the macula densa, and sympathetic β1 stimulation promote renin release."
    },
    {
      id: "PULM-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Pulmonary",
      topic: "Ventilation–Perfusion",
      conceptId: "LOW_VQ",
      front: "What straightforward example produces a low V/Q region?",
      back: "Airway obstruction reduces ventilation while perfusion continues, producing a low ventilation-to-perfusion ratio."
    },
    {
      id: "PULM-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Pulmonary",
      topic: "Ventilation–Perfusion",
      conceptId: "HIGH_VQ",
      front: "What straightforward example produces a high V/Q region?",
      back: "A pulmonary embolism reduces perfusion while ventilation is still present, producing a high ventilation-to-perfusion ratio."
    },
    {
      id: "PULM-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Pulmonary",
      topic: "Compliance",
      conceptId: "SURFACTANT",
      front: "How does surfactant help keep alveoli open?",
      back: "Surfactant lowers alveolar surface tension, increases compliance, and reduces the tendency of small alveoli to collapse."
    },
    {
      id: "PULM-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Pulmonary",
      topic: "Breathing Control",
      conceptId: "PERIPHERAL_CHEMORECEPTORS",
      front: "What oxygen change activates peripheral chemoreceptors?",
      back: "They respond strongly when arterial oxygen falls, helping increase ventilation during significant hypoxemia."
    },
    {
      id: "GI-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "GI",
      topic: "GI Hormones",
      conceptId: "SECRETIN",
      front: "What stimulates secretin release?",
      back: "Acidic chyme entering the duodenum stimulates S cells to release secretin."
    },
    {
      id: "GI-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "GI",
      topic: "Gastric Cells",
      conceptId: "PARIETAL_CELLS",
      front: "What do gastric parietal cells secrete?",
      back: "Parietal cells secrete hydrochloric acid and intrinsic factor."
    },
    {
      id: "GI-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "GI",
      topic: "Motility",
      conceptId: "SEGMENTATION",
      front: "What is the purpose of intestinal segmentation contractions?",
      back: "They mix and repeatedly divide chyme with little net forward movement, improving contact with digestive and absorptive surfaces."
    },
    {
      id: "GI-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "GI",
      topic: "GI Hormones",
      conceptId: "GASTRIN",
      front: "What is the instructor-emphasized gastrin sequence?",
      back: "Food entering the first part of the duodenum stimulates gastrin, and gastrin stimulates hydrochloric-acid secretion."
    },
    {
      id: "CV-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Cardiovascular",
      topic: "Cardiac Output",
      conceptId: "CARDIAC_OUTPUT",
      front: "What is the cardiac output formula?",
      back: "Cardiac output equals heart rate times stroke volume: CO = HR × SV."
    },
    {
      id: "CV-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Cardiovascular",
      topic: "Stroke Volume",
      conceptId: "STROKE_VOLUME",
      front: "What is the stroke volume formula?",
      back: "Stroke volume equals end-diastolic volume minus end-systolic volume: SV = EDV − ESV."
    },
    {
      id: "CV-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Cardiovascular",
      topic: "Heart Sounds",
      conceptId: "S1",
      front: "What produces the S1 or “lub” heart sound?",
      back: "Closure of the mitral and tricuspid AV valves at the beginning of ventricular systole produces S1."
    },
    {
      id: "CV-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Cardiovascular",
      topic: "Ventricular Action Potential",
      conceptId: "PHASE_2",
      front: "Which ion-current balance creates the ventricular Phase 2 plateau?",
      back: "Inward Ca²⁺ current through L-type channels is approximately balanced by outward K⁺ current, keeping membrane voltage relatively flat."
    },
    {
      id: "ENDO-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Endocrine",
      topic: "Pancreas",
      conceptId: "BETA_CELL",
      front: "Which pancreatic cell secretes insulin?",
      back: "Beta cells of the pancreatic islets secrete insulin."
    },
    {
      id: "ENDO-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Endocrine",
      topic: "Adrenal Cortex",
      conceptId: "ZONA_FASCICULATA",
      front: "Which adrenal-cortex zone primarily secretes cortisol?",
      back: "The zona fasciculata primarily secretes cortisol and other glucocorticoids."
    },
    {
      id: "ENDO-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Endocrine",
      topic: "Thyroid",
      conceptId: "NIS",
      front: "What does the sodium–iodide symporter do in thyroid synthesis?",
      back: "NIS uses the sodium gradient to move iodide from blood into the thyroid follicular cell across its basolateral membrane."
    },
    {
      id: "ENDO-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Endocrine",
      topic: "Calcium",
      conceptId: "PTH",
      front: "What is the overall effect of PTH on extracellular calcium?",
      back: "PTH raises extracellular calcium through actions on bone and kidney and indirectly increases intestinal absorption through calcitriol."
    },
    {
      id: "MMSR-001",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Membrane / Muscle / Reflexes",
      topic: "Spinal Reflexes",
      conceptId: "GTO",
      front: "What does the Golgi tendon organ detect?",
      back: "It detects muscle–tendon tension through Type Ib afferents and can inhibit the same muscle when tension becomes excessive."
    },
    {
      id: "MMSR-002",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Membrane / Muscle / Reflexes",
      topic: "Spinal Reflexes",
      conceptId: "MUSCLE_SPINDLE",
      front: "What does a muscle spindle detect?",
      back: "A muscle spindle detects muscle length and the rate of stretch and helps initiate the stretch reflex."
    },
    {
      id: "MMSR-003",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Membrane / Muscle / Reflexes",
      topic: "Muscle Fiber Types",
      conceptId: "TYPE_I",
      front: "Which muscle-fiber type is best suited for endurance?",
      back: "Type I slow oxidative fibers are fatigue resistant, rich in mitochondria and myoglobin, and best suited for endurance."
    },
    {
      id: "MMSR-004",
      course: "Physiology II",
      exam: "Cumulative Final",
      category: "Membrane / Muscle / Reflexes",
      topic: "Excitation–Contraction Coupling",
      conceptId: "DHP_RYR",
      front: "How do DHP and ryanodine receptors work together in skeletal muscle?",
      back: "T-tubule depolarization activates the DHP voltage sensor, which mechanically opens the ryanodine receptor so the SR releases Ca²⁺."
    }
  ];

  function categoryForQuestion(question) {
    var id = String(question && question.id || "");
    if (id.indexOf("CF-RENAL-") === 0) return "Renal";
    if (id.indexOf("CF-LUNG-") === 0) return "Pulmonary";
    if (id.indexOf("CF-GI-") === 0) return "GI";
    if (id.indexOf("CF-CV-") === 0) return "Cardiovascular";
    if (id.indexOf("CF-ENDO-") === 0) return "Endocrine";
    if (id.indexOf("CF-MMSR-") === 0) return "Membrane / Muscle / Reflexes";
    return String(question && question.unit || "Other");
  }

  function frontForQuestion(question) {
    var prompt = String(question.q || question.question || "").trim();
    var choices = question.choices && typeof question.choices === "object" ? question.choices : {};
    var choiceLines = Object.keys(choices).sort().map(function(letter) {
      return letter + ". " + choices[letter];
    });
    return choiceLines.length ? prompt + "\n\n" + choiceLines.join("\n") : prompt;
  }

  function backForQuestion(question) {
    var letter = String(question.correctAnswer || "").trim();
    var choices = question.choices && typeof question.choices === "object" ? question.choices : {};
    var answer = letter && choices[letter] ? letter + ". " + choices[letter] : letter;
    var explanation = String(question.explanation || "").trim();
    var back = answer ? "Correct answer: " + answer : "";
    if (explanation) back += (back ? "\n\n" : "") + explanation;
    return back;
  }

  var cumulativeQuestions = Array.isArray(root.CUMULATIVE_FINAL_QUESTIONS)
    ? root.CUMULATIVE_FINAL_QUESTIONS
    : [];

  root.STUDYOS_FLASHCARDS = cumulativeQuestions.length
    ? cumulativeQuestions.map(function(question) {
        var category = categoryForQuestion(question);
        return {
          id: "FC-" + question.id,
          sourceQuestionId: question.id,
          course: "Physiology II",
          exam: "Cumulative Final",
          category: category,
          topic: String(question.broadCategory || question.conceptBlock || question.subtopic || category),
          conceptId: String(question.conceptBlock || question.subtopic || question.id),
          front: frontForQuestion(question),
          back: backForQuestion(question)
        };
      }).filter(function(card) {
        return card.id && card.front && card.back;
      })
    : sampleCards;
})(typeof window !== "undefined" ? window : globalThis);
