# Glucose, Insulin, and Diabetes Pathway ILG

## Purpose

This module is the Phase 3 guided and comparison StudyOS journey from a carbohydrate-containing meal through digestion, glucose regulation, tissue handling, fasting, kidney handling, and condition-specific diabetes physiology.

## Current status

Phase 3 keeps the Phase 2 Guided experience intact and makes Compare mode functional across all 12 checkpoints. Compare uses one shared timeline, aligned Normal/Type 1/Type 2 condition cards, a derived comparison summary, and seven side-by-side physiology indicators. Normal remains the reference condition; condition-difference badges are visually and semantically separate from arrows that describe change since the immediately preceding pathway checkpoint. Explore and Challenge remain later-phase modes.

Compare uses sparse rendering: Normal is the complete reference, while Type 1 and Type 2 show only fields and physiology values that differ from Normal. Matching disease physiology positions remain visually blank for column alignment and provide screen-reader text explaining that they match Normal.

## File responsibilities

- `index.html` — semantic page regions, selectors, pathway workspace, detail panel, controls, and sticky physiology panel.
- `glucose-pathway.css` — namespaced responsive presentation for this module.
- `glucose-pathway.js` — the `window.GlucoseILG` state object, event handlers, navigation, and rendering.
- `pathway-data.js` — step definitions, placeholder qualitative physiology states, movement labels, and future concept/question hooks.
- `../shared/ilg-shared.css` and `../shared/ilg-shared.js` — shared StudyOS guide styling and small shared helpers.

## State architecture

`GlucoseILG.state` owns condition, learning mode, complexity, active step, completed steps, and active qualitative physiology. `GlucoseILGData.conditionData` contains separate `normal`, `type1`, and `type2` step arrays consumed by the Guided and Compare renderers. Each checkpoint derives its direction from its immediate physiological predecessor, independent of navigation history. Compare locks the three condition selectors as active participants while retaining the learner's selected Guided condition for the return trip.

## Compare derivation rules

- The shared timeline is keyed to the Normal pathway's 12 canonical checkpoints.
- Condition cards read the matching checkpoint from each condition's existing data; they do not maintain a second hard-coded comparison dataset.
- Step-change arrows compare each condition with the immediately preceding pathway checkpoint. A checkpoint therefore reports the same change regardless of navigation direction or entry method.
- Condition-difference badges compare Type 1 and Type 2 with Normal at the same checkpoint.
- Divergence markers are derived from which qualitative physiology fields differ from Normal: no difference is `similar`; insulin/glucagon-only differences are `hormonal`; urinary-glucose differences are `renal`; tissue-uptake or hepatic-output differences are `metabolic`; other differences are `tissue`.
- “Most diverged” is derived from the summed ordinal distance of the seven qualitative indicators from Normal.

## Step definitions

Each entry in a condition's `steps` array includes an ID, order, title, location, icon, main event, trigger, next consequence, optional condition difference, Basic/Organ/Cellular text, movement label, explicit qualitative physiology, source IDs, empty `conceptIds`, and empty `relatedQuestionIds`.

## Future movement engine

Checkpoint buttons expose `data-step-id`, `data-step-index`, and `data-particle-anchor-id`. The active placeholder exposes `data-particle-id`. A future movement engine should read the shared particle array, resolve its start and destination anchors, and animate a reusable particle element rather than creating a separate permanent DOM tree for each molecule.

## Planned future phases

1. Add reusable movement particles and reduced-motion equivalents.
2. Add Explore behavior.
3. Add checkpoint questions, concept IDs, and quiz links.
4. Add Challenge mode only after the physiology and question mappings are audited.

## Known limitations

- Explore and Challenge explicitly show later-phase notices while Guided navigation remains available.
- Indicators are qualitative learning labels, not patient measurements.
- Qualitative timing is a teaching sequence; it is not a diagnostic or patient simulation.
- The Type 2 pathway models insulin resistance with retained compensatory insulin and does not model late beta-cell failure.
- Progress is not persisted across page reloads.

## Opening the guide

From `StudyOS-Physiology-Quiz/index.html`, select **Interactive Learning Guide**, then choose **Glucose, Insulin, and Diabetes Pathway** and select **Open Guide**. The guide header links back to the guide selector and quiz engine.
