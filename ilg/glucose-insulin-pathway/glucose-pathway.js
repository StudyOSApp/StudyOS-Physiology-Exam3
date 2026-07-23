(function () {
  "use strict";
  const data = window.GlucoseILGData;
  if (!data?.conditionData?.normal?.steps) throw new Error("Glucose pathway data is unavailable.");

  const conditionLabels = { normal: "Normal", type1: "Type 1 Diabetes", type2: "Type 2 Diabetes" };
  const modeLabels = { guided: "Guided", explore: "Explore", compare: "Compare", challenge: "Challenge" };
  const complexityLabels = { basic: "Basic", organ: "Organ", cellular: "Cellular" };
  const metricIds = {
    bloodGlucose: "metricBloodGlucose", insulin: "metricInsulin", glucagon: "metricGlucagon",
    tissueUptake: "metricTissueUptake", hepaticOutput: "metricHepaticOutput",
    urinaryGlucose: "metricUrinaryGlucose", ketones: "metricKetones"
  };
  const metricLabels = {
    bloodGlucose: "Blood glucose", insulin: "Insulin", glucagon: "Glucagon",
    tissueUptake: "Tissue glucose uptake", hepaticOutput: "Hepatic glucose output",
    urinaryGlucose: "Urinary glucose", ketones: "Ketones"
  };
  const valueRanks = { None: 0, "Very low": 1, Low: 2, Normal: 3, Elevated: 4, High: 5 };
  const takeawayLabels = { basic: "Key takeaway", organ: "Organ-level takeaway", cellular: "Cellular takeaway" };

  window.GlucoseILG = {
    state: {
      condition: "normal", mode: "guided", complexity: "basic", currentStepIndex: 0,
      completedSteps: [], physiology: { ...data.conditionData.normal.steps[0].physiology }
    },
    elements: {},
    getSteps() { return data.conditionData[this.state.condition].steps; },
    init() {
      this.elements.pathway = document.querySelector("#pathwayList");
      this.elements.detail = document.querySelector("#stepDetail");
      this.bindSelectors();
      document.querySelector("#previousStep").addEventListener("click", () => this.previousStep());
      document.querySelector("#nextStep").addEventListener("click", () => this.nextStep());
      document.querySelector("#restartPathway").addEventListener("click", () => this.restartPathway());
      this.renderActiveStep(false);
    },
    bindSelectors() {
      document.querySelectorAll("[data-control]").forEach((group) => {
        group.querySelectorAll("button[data-value]").forEach((button) => {
          button.addEventListener("click", () => {
            const control = group.dataset.control;
            if (control === "condition") this.setCondition(button.dataset.value);
            if (control === "mode") this.setMode(button.dataset.value);
            if (control === "complexity") this.setComplexity(button.dataset.value);
          });
        });
      });
    },
    setPressed(control, value) {
      document.querySelectorAll(`[data-control="${control}"] button`).forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.value === value));
      });
    },
    setCondition(condition) {
      if (this.state.mode === "compare") return;
      this.state.condition = condition;
      this.setPressed("condition", condition);
      const steps = this.getSteps();
      const step = steps[this.state.currentStepIndex];
      this.state.physiology = { ...step.physiology };
      const title = document.querySelector("#conditionTitle");
      const summary = document.querySelector("#conditionSummary");
      title.textContent = `${conditionLabels[condition]} physiology`;
      summary.textContent = data.conditionData[condition].summary;
      this.renderActiveStep(false);
    },
    setMode(mode) {
      this.state.mode = mode;
      this.setPressed("mode", mode);
      const notice = document.querySelector("#modeNotice");
      if (mode === "guided" || mode === "compare") {
        notice.hidden = true;
      } else {
        notice.hidden = false;
        notice.textContent = `${modeLabels[mode]} mode is coming in a later phase. Guided condition pathways remain available now.`;
      }
      this.setConditionControlMode();
      this.renderActiveStep(false);
    },
    setConditionControlMode() {
      document.querySelectorAll('[data-control="condition"] button').forEach((button) => {
        const comparing = this.state.mode === "compare";
        button.disabled = comparing;
        button.classList.toggle("glucose-ilg-compare-participant", comparing);
        button.setAttribute("aria-pressed", String(comparing || button.dataset.value === this.state.condition));
      });
      const title = document.querySelector("#conditionTitle");
      const summary = document.querySelector("#conditionSummary");
      if (this.state.mode === "compare") {
        title.textContent = "All conditions shown";
        summary.textContent = "Normal physiology is the reference for Type 1 and Type 2 differences at this checkpoint.";
      } else {
        title.textContent = `${conditionLabels[this.state.condition]} physiology`;
        summary.textContent = data.conditionData[this.state.condition].summary;
      }
    },
    setComplexity(complexity) {
      this.state.complexity = complexity;
      this.setPressed("complexity", complexity);
      this.renderActiveStep(false);
    },
    goToStep(index, scroll = true) {
      const steps = this.getSteps();
      const nextIndex = Math.max(0, Math.min(index, steps.length - 1));
      if (nextIndex > this.state.currentStepIndex) {
        for (let i = this.state.currentStepIndex; i < nextIndex; i += 1) {
          if (!this.state.completedSteps.includes(steps[i].id)) this.state.completedSteps.push(steps[i].id);
        }
      }
      this.state.currentStepIndex = nextIndex;
      this.state.physiology = { ...steps[nextIndex].physiology };
      this.renderActiveStep(scroll);
    },
    nextStep() {
      if (this.state.currentStepIndex < this.getSteps().length - 1) this.goToStep(this.state.currentStepIndex + 1);
    },
    previousStep() {
      if (this.state.currentStepIndex > 0) this.goToStep(this.state.currentStepIndex - 1);
    },
    restartPathway() {
      this.state.currentStepIndex = 0;
      this.state.completedSteps = [];
      this.state.physiology = { ...this.getSteps()[0].physiology };
      this.renderActiveStep(true);
    },
    renderPathway() {
      const steps = this.getSteps();
      const activeIndex = this.state.currentStepIndex;
      const visibleIndexes = [activeIndex - 1, activeIndex, activeIndex + 1].filter((index) => index >= 0 && index < steps.length);
      const timeline = steps.map((step, index) => {
        const state = index === activeIndex ? "active" : (index < activeIndex ? "completed" : "upcoming");
        return `<button type="button" class="glucose-ilg-timeline-step" data-step-index="${index}" data-state="${state}" aria-label="Go to Step ${step.order}: ${step.title}" aria-current="${index === activeIndex ? "step" : "false"}"><span>${step.order}</span></button>`;
      }).join("");
      const focusSteps = visibleIndexes.map((index) => {
        const step = steps[index];
        const state = index === activeIndex ? "active" : (index < activeIndex ? "completed" : "upcoming");
        const positionLabel = state === "active" ? "Current step" : (state === "completed" ? "Previous · completed" : "Next preview");
        const activeParticle = index === activeIndex ? `<span class="glucose-ilg-moving-anchor" data-particle-anchor="${step.id}"><span class="glucose-ilg-particle" data-particle-id="active-particle">${step.movingItem}</span></span>` : "";
        return `<button type="button" id="glucose-ilg-step-${step.id}" class="glucose-ilg-step" data-step-id="${step.id}" data-step-index="${index}" data-particle-anchor-id="${step.id}" data-state="${state}" aria-current="${index === activeIndex ? "step" : "false"}">
          <span class="glucose-ilg-icon" aria-hidden="true">${step.icon}</span>
          <span class="glucose-ilg-step-copy"><span class="glucose-ilg-step-number">${positionLabel} · Step ${step.order}</span><strong>${step.title}</strong><span>${step.location}</span></span>${activeParticle}</button>`;
      }).join("");
      this.elements.pathway.innerHTML = `<nav class="glucose-ilg-timeline" aria-label="Complete pathway overview">${timeline}</nav><div class="glucose-ilg-focus-sequence">${focusSteps}</div>`;
      this.elements.pathway.querySelectorAll("[data-step-index]").forEach((button) => button.addEventListener("click", () => this.goToStep(Number(button.dataset.stepIndex))));
    },
    getStepState(condition, index = this.state.currentStepIndex) {
      return data.conditionData[condition].steps[index];
    },
    compareDirection(before, after) {
      return before === after ? "same" : ((valueRanks[after] ?? 0) > (valueRanks[before] ?? 0) ? "up" : "down");
    },
    compareStepChange(condition, key, index = this.state.currentStepIndex) {
      const fromIndex = Math.max(0, index - 1);
      const before = this.getStepState(condition, fromIndex).physiology[key];
      const after = this.getStepState(condition, index).physiology[key];
      return { before, after, direction: this.compareDirection(before, after) };
    },
    compareToNormal(condition, key, index = this.state.currentStepIndex) {
      if (condition === "normal") return { relation: "reference", label: "Normal reference" };
      const normalValue = this.getStepState("normal", index).physiology[key];
      const value = this.getStepState(condition, index).physiology[key];
      if (value === normalValue) return { relation: "same", label: "Same as Normal" };
      const direction = (valueRanks[value] ?? 0) > (valueRanks[normalValue] ?? 0) ? "higher" : "lower";
      if (key === "bloodGlucose" && direction === "higher" && index >= 8) return { relation: "delayed", label: "Delayed recovery; higher than Normal" };
      if (key === "insulin" && condition === "type1") return { relation: "lower", label: "Lower than Normal; insulin severely deficient" };
      if (key === "tissueUptake" && direction === "lower" && condition === "type2") return { relation: "lower", label: "Lower than Normal despite insulin presence" };
      if (key === "ketones" && condition === "type2") return { relation: direction, label: `${direction === "higher" ? "Higher" : "Lower"} than Normal; not the Type 1 pattern` };
      return { relation: direction, label: `${direction === "higher" ? "Higher" : "Lower"} than Normal` };
    },
    getStepDivergences(index = this.state.currentStepIndex) {
      return Object.keys(metricIds).filter((key) => {
        const normal = this.getStepState("normal", index).physiology[key];
        return ["type1", "type2"].some((condition) => this.getStepState(condition, index).physiology[key] !== normal);
      });
    },
    getDivergenceStage(index) {
      const keys = this.getStepDivergences(index);
      if (!keys.length) return "similar";
      if (keys.includes("urinaryGlucose")) return "renal";
      if (keys.includes("ketones") || keys.includes("hepaticOutput")) return "metabolic";
      if (keys.includes("tissueUptake")) return "tissue";
      return "hormonal";
    },
    getSharedStepFeatures(index = this.state.currentStepIndex) {
      const step = this.getStepState("normal", index);
      const sharedIndicators = Object.keys(metricIds).filter((key) => ["type1", "type2"].every((condition) => this.getStepState(condition, index).physiology[key] === step.physiology[key]));
      return { event: step.mainEvent, location: step.location, sharedIndicators };
    },
    getMostDivergedCondition(index = this.state.currentStepIndex) {
      const normal = this.getStepState("normal", index).physiology;
      const score = (condition) => Object.keys(metricIds).reduce((total, key) => total + Math.abs((valueRanks[this.getStepState(condition, index).physiology[key]] ?? 0) - (valueRanks[normal[key]] ?? 0)), 0);
      return score("type1") >= score("type2") ? "type1" : "type2";
    },
    renderComparePathway() {
      const steps = data.conditionData.normal.steps;
      const activeIndex = this.state.currentStepIndex;
      const timeline = steps.map((step, index) => {
        const state = index === activeIndex ? "active" : (index < activeIndex ? "completed" : "upcoming");
        const divergence = this.getDivergenceStage(index);
        return `<button type="button" class="glucose-ilg-timeline-step" data-step-index="${index}" data-state="${state}" data-divergence="${divergence}" aria-label="Go to Step ${step.order}: ${step.title}. ${divergence === "similar" ? "Pathways largely similar" : `${divergence} divergence`}" aria-current="${index === activeIndex ? "step" : "false"}"><span>${step.order}</span><span class="glucose-ilg-divergence-dot" aria-hidden="true"></span></button>`;
      }).join("");
      this.elements.pathway.innerHTML = `<nav class="glucose-ilg-timeline glucose-ilg-compare-timeline" aria-label="Comparison pathway overview">${timeline}</nav>`;
      this.elements.pathway.querySelectorAll("[data-step-index]").forEach((button) => button.addEventListener("click", () => this.goToStep(Number(button.dataset.stepIndex))));
    },
    renderCompareMode() {
      const index = this.state.currentStepIndex;
      const conditions = ["normal", "type1", "type2"];
      const normalStep = this.getStepState("normal", index);
      const shared = this.getSharedStepFeatures(index);
      const divergences = this.getStepDivergences(index);
      const most = this.getMostDivergedCondition(index);
      const nextDivergences = index < 11 ? this.getStepDivergences(index + 1) : [];
      const cards = conditions.map((condition) => {
        const step = this.getStepState(condition, index);
        const changeItems = Object.keys(metricIds).map((key) => ({ key, ...this.compareStepChange(condition, key, index) })).filter((item) => item.direction !== "same");
        const changeText = changeItems.length ? changeItems.map((item) => `${metricLabels[item.key]} ${item.direction === "up" ? "↑" : "↓"}`).join(" · ") : "No indicator change from the preceding pathway checkpoint";
        if (condition === "normal") {
          return `<article class="glucose-ilg-condition-card" data-condition="normal" aria-labelledby="compare-normal-heading"><p class="glucose-ilg-condition-tag">Reference</p><h3 id="compare-normal-heading">Normal</h3><p class="glucose-ilg-card-step">Step ${step.order} · ${step.title}<br><span>${step.location}</span></p><dl><div><dt>Main event</dt><dd>${step.mainEvent}</dd></div><div><dt>Trigger</dt><dd>${step.trigger}</dd></div><div><dt>Next</dt><dd>${step.next}</dd></div></dl><p class="glucose-ilg-card-complexity"><strong>${takeawayLabels[this.state.complexity]}:</strong> ${step[this.state.complexity]}</p><p class="glucose-ilg-step-change"><strong>From preceding checkpoint:</strong> ${changeText}</p></article>`;
        }
        const fields = [
          ["Main event", "mainEvent"], ["Trigger", "trigger"], ["Next", "next"]
        ].filter(([, key]) => step[key] !== normalStep[key]).map(([label, key]) => `<div><dt>${label}</dt><dd>${step[key]}</dd></div>`);
        if (step.difference) fields.push(`<div><dt>Why it differs</dt><dd>${step.difference}</dd></div>`);
        const complexityDiffers = step[this.state.complexity] !== normalStep[this.state.complexity];
        const diseaseChangeItems = Object.keys(metricIds).map((key) => {
          const diseaseChange = this.compareStepChange(condition, key, index);
          const normalChange = this.compareStepChange("normal", key, index);
          return { key, diseaseChange, normalChange };
        }).filter(({ key, diseaseChange, normalChange }) => this.compareToNormal(condition, key, index).relation !== "same" || diseaseChange.direction !== normalChange.direction);
        const diseaseChangeText = diseaseChangeItems.filter(({ diseaseChange }) => diseaseChange.direction !== "same").map(({ key, diseaseChange }) => `${metricLabels[key]} ${diseaseChange.direction === "up" ? "↑" : "↓"}`).join(" · ");
        const hasMeaningfulDifference = fields.length || complexityDiffers || diseaseChangeItems.length;
        const noDifference = `${conditionLabels[condition]} has no meaningful difference from Normal at this checkpoint.`;
        return `<article class="glucose-ilg-condition-card glucose-ilg-difference-card" data-condition="${condition}" aria-labelledby="compare-${condition}-heading"><p class="glucose-ilg-condition-tag">Differences from Normal</p><h3 id="compare-${condition}-heading">${conditionLabels[condition]}</h3><p class="glucose-ilg-card-step">Step ${step.order} · ${step.title}<br><span>${step.location}</span></p>${hasMeaningfulDifference ? `<dl>${fields.join("")}</dl>${complexityDiffers ? `<p class="glucose-ilg-card-complexity"><strong>${takeawayLabels[this.state.complexity]} difference:</strong> ${step[this.state.complexity]}</p>` : ""}${diseaseChangeText ? `<p class="glucose-ilg-step-change"><strong>Different change pattern:</strong> ${diseaseChangeText}</p>` : ""}` : `<p class="glucose-ilg-no-divergence">${noDifference}</p>`}<span class="ilg-sr-only">${hasMeaningfulDifference ? `${conditionLabels[condition]} shows only fields that differ from Normal.` : noDifference}</span></article>`;
      }).join("");
      const physiologyRows = Object.keys(metricIds).map((key) => {
        const values = conditions.map((condition) => {
          const value = this.getStepState(condition, index).physiology[key];
          const change = this.compareStepChange(condition, key, index);
          const relation = this.compareToNormal(condition, key, index);
          if (condition !== "normal" && relation.relation === "same") {
            const matches = `${conditionLabels[condition]} matches Normal for ${metricLabels[key]} at this checkpoint.`;
            return `<div class="glucose-ilg-compare-value glucose-ilg-match-placeholder" data-condition="${condition}" data-relation="same"><span class="ilg-sr-only">${matches}</span></div>`;
          }
          const arrow = change.direction === "up" ? "↑" : (change.direction === "down" ? "↓" : "");
          const accessible = `${conditionLabels[condition]} ${metricLabels[key]} is ${value}; ${change.direction === "same" ? "unchanged from the preceding pathway checkpoint" : `${change.direction === "up" ? "increased" : "decreased"} from ${change.before}`}; ${relation.label}.`;
          return `<div class="glucose-ilg-compare-value" data-condition="${condition}" data-relation="${relation.relation}"><span class="glucose-ilg-compare-condition">${conditionLabels[condition]}</span><span class="glucose-ilg-compare-reading">${value}${arrow ? ` <span aria-hidden="true">${arrow}</span>` : ""}</span><span class="glucose-ilg-relation-badge">${relation.label}</span><span class="ilg-sr-only">${accessible}</span></div>`;
        }).join("");
        return `<section class="glucose-ilg-compare-metric" aria-labelledby="compare-metric-${key}"><h3 id="compare-metric-${key}">${metricLabels[key]}</h3><div>${values}</div></section>`;
      }).join("");
      const keyDifference = divergences.length ? divergences.map((key) => metricLabels[key]).join(", ") : "No physiology indicators differ yet";
      const nextDifference = nextDivergences.length ? nextDivergences.map((key) => metricLabels[key]).join(", ") : (index === 11 ? "Pathway complete" : "No new indicator divergence expected");
      this.elements.detail.innerHTML = `<div class="glucose-ilg-compare-shell"><header><p class="glucose-ilg-kicker">${complexityLabels[this.state.complexity]} comparison</p><h2 id="detailHeading">Step ${index + 1}: ${this.getStepState("normal", index).title}</h2></header><section class="glucose-ilg-compare-cards" aria-label="Condition comparison cards">${cards}</section><section class="glucose-ilg-compare-summary" aria-labelledby="compareSummaryHeading"><h3 id="compareSummaryHeading">Comparison summary</h3><div><p><strong>Shared physiology</strong><span>${shared.event} Shared indicators: ${shared.sharedIndicators.length ? shared.sharedIndicators.map((key) => metricLabels[key]).join(", ") : "none"}.</span></p><p><strong>Key divergence</strong><span>${keyDifference}.</span></p><p><strong>Which diverged most</strong><span>${conditionLabels[most]} differs most from Normal at this checkpoint.</span></p><p><strong>Why it matters</strong><span>${this.getStepState(most, index).difference || "The pathways remain largely similar here."}</span></p><p><strong>Next expected difference</strong><span>${nextDifference}.</span></p></div></section><section class="glucose-ilg-compare-physiology" aria-labelledby="comparePhysiologyHeading"><h3 id="comparePhysiologyHeading">Physiology comparison</h3>${physiologyRows}</section></div>`;
    },
    getStepChanges() {
      const steps = this.getSteps();
      const current = steps[this.state.currentStepIndex].physiology;
      const previous = steps[Math.max(0, this.state.currentStepIndex - 1)].physiology;
      return Object.keys(metricIds).map((key) => {
        const before = previous[key];
        const after = current[key];
        const direction = before === after ? "same" : ((valueRanks[after] ?? 0) > (valueRanks[before] ?? 0) ? "up" : "down");
        return { key, before, after, direction };
      });
    },
    describePhysiologyChange(change) {
      const level = change.after.toLowerCase();
      if (change.direction === "same") return `${metricLabels[change.key]} remains ${level} at this checkpoint.`;
      const contexts = {
        bloodGlucose: { up: "as glucose enters the circulation", down: "as glucose leaves the circulation" },
        insulin: { up: "in response to absorbed glucose", down: "as the fed-state response subsides" },
        glucagon: { up: "as fasting signaling becomes more active", down: "during the fed-state response" },
        tissueUptake: { up: "as insulin signaling becomes effective", down: "as insulin action declines" },
        hepaticOutput: { up: "as liver glucose production becomes more active", down: "as insulin suppresses liver glucose production" },
        urinaryGlucose: { up: "as the filtered glucose load exceeds reabsorptive capacity", down: "as the filtered glucose load falls" },
        ketones: { up: "as fat-derived fuel production increases", down: "as ketone production is suppressed" }
      };
      return `${metricLabels[change.key]} ${change.direction === "up" ? "increases" : "decreases"} to ${level} ${contexts[change.key][change.direction]}.`;
    },
    renderStepDetail() {
      const step = this.getSteps()[this.state.currentStepIndex];
      const selectedCopy = step[this.state.complexity];
      const changes = this.getStepChanges().filter((change) => change.direction !== "same");
      const changeSummary = changes.length
        ? changes.map((change) => `<li>${this.describePhysiologyChange(change)}</li>`).join("")
        : "<li>No physiology indicators change from the preceding pathway checkpoint.</li>";
      this.elements.detail.innerHTML = `<p class="glucose-ilg-kicker">${complexityLabels[this.state.complexity]} explanation</p><h2 id="detailHeading">${step.title}</h2>
        <section class="glucose-ilg-change-summary" aria-labelledby="changeHeading"><h3 id="changeHeading">What changed this step?</h3><ul>${changeSummary}</ul></section>
        <div class="glucose-ilg-detail-grid"><div><strong>What is happening?</strong><span>${step.mainEvent}</span></div><div><strong>What triggered it?</strong><span>${step.trigger}</span></div><div><strong>What happens next?</strong><span>${step.next}</span></div>${step.difference ? `<div class="glucose-ilg-difference"><strong>Why is this different?</strong><span>${step.difference}</span></div>` : ""}</div>
        <p class="glucose-ilg-complexity-copy"><strong>${takeawayLabels[this.state.complexity]}:</strong> ${selectedCopy}</p>`;
    },
    updatePhysiologyPanel() {
      const steps = this.getSteps();
      const step = steps[this.state.currentStepIndex];
      document.querySelector("#panelStep").textContent = `${step.order} of ${steps.length}`;
      document.querySelector("#panelLocation").textContent = step.location;
      document.querySelector("#panelCondition").textContent = conditionLabels[this.state.condition];
      document.querySelector("#panelComplexity").textContent = complexityLabels[this.state.complexity];
      this.getStepChanges().forEach(({ key, before, after, direction }) => {
        const value = document.querySelector(`#${metricIds[key]}`);
        const row = value.closest("div");
        const arrow = direction === "up" ? "↑" : (direction === "down" ? "↓" : "→");
        const changeText = direction === "same" ? "unchanged from the preceding pathway checkpoint" : `${direction === "up" ? "increased" : "decreased"} from ${before} at the preceding pathway checkpoint`;
        value.innerHTML = `<span>${after}</span><span class="glucose-ilg-direction" aria-hidden="true">${arrow}</span><span class="ilg-sr-only">, ${changeText}</span>`;
        row.dataset.change = direction;
        row.classList.remove("glucose-ilg-metric-flash");
        if (direction !== "same") {
          void row.offsetWidth;
          row.classList.add("glucose-ilg-metric-flash");
        }
      });
    },
    renderStatus() {
      const condition = this.state.mode === "compare" ? "All conditions" : conditionLabels[this.state.condition];
      document.querySelector("#glucoseIlgStatus").textContent = `${modeLabels[this.state.mode]} mode · ${condition} · ${complexityLabels[this.state.complexity]}`;
    },
    renderActiveStep(scroll) {
      const steps = this.getSteps();
      const step = steps[this.state.currentStepIndex];
      this.state.physiology = { ...step.physiology };
      const app = document.querySelector("#glucoseIlgApp");
      const physiology = document.querySelector(".glucose-ilg-physiology");
      app.dataset.mode = this.state.mode;
      if (this.state.mode === "compare") {
        physiology.hidden = true;
        this.renderComparePathway();
        this.renderCompareMode();
      } else {
        physiology.hidden = false;
        this.renderPathway();
        this.renderStepDetail();
        this.updatePhysiologyPanel();
      }
      this.renderStatus();
      document.querySelector("#stepCounter").textContent = `Step ${step.order} of ${steps.length}`;
      const previous = document.querySelector("#previousStep");
      const next = document.querySelector("#nextStep");
      previous.disabled = this.state.currentStepIndex === 0;
      next.disabled = this.state.currentStepIndex === steps.length - 1;
      next.textContent = next.disabled ? "Pathway Complete" : "Next";
      if (scroll) {
        const active = this.state.mode === "compare" ? document.querySelector(`.glucose-ilg-timeline-step[data-step-index="${this.state.currentStepIndex}"]`) : document.querySelector(`[data-step-id="${step.id}"]`);
        active?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
      }
    }
  };

  window.addEventListener("DOMContentLoaded", () => window.GlucoseILG.init());
})();
