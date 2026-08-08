(function(root) {
  "use strict";

  var questions = [
  {
    "id": "CF-MMSR-001",
    "unit": "cumulative-membrane-muscle-reflexes-channel-characteristics",
    "conceptBlock": "Channel Characteristics",
    "subtopic": "Channel Characteristics",
    "question": "Which statement best distinguishes a leak channel from a gated channel?",
    "choices": {
      "A": "Leak channels remain open at rest, while gated channels open in response to a specific stimulus",
      "B": "Leak channels open only during an action potential",
      "C": "Leak channels require ATP to open",
      "D": "Leak channels are found only in cardiac muscle cells"
    },
    "correctAnswer": "A",
    "explanation": "Leak channels are continuously available at rest, so ions can move through them along their electrochemical gradient. Gated channels open or close in response to a specific stimulus — a voltage change, ligand binding, or mechanical deformation.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Cell Physiology & Membrane Transport",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-002",
    "unit": "cumulative-membrane-muscle-reflexes-gated-channel-types",
    "conceptBlock": "Gated Channel Types",
    "subtopic": "Gated Channel Types",
    "question": "A channel that opens in response to physical deformation of the membrane is best described as:",
    "choices": {
      "A": "Voltage-gated",
      "B": "Ligand-gated",
      "C": "Mechano-gated",
      "D": "Leak"
    },
    "correctAnswer": "C",
    "explanation": "Mechano-gated channels open with membrane deformation (e.g., stretch in baroreceptors and muscle spindles). Voltage-gated channels respond to changes in membrane potential, and ligand-gated channels open when a specific chemical binds.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Cell Physiology & Membrane Transport",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-003",
    "unit": "cumulative-membrane-muscle-reflexes-active-transport",
    "conceptBlock": "Active Transport",
    "subtopic": "Active Transport",
    "question": "Which transport process uses the sodium concentration gradient to move glucose into a cell against its gradient?",
    "choices": {
      "A": "Simple diffusion",
      "B": "Osmosis",
      "C": "Primary active transport",
      "D": "Secondary active transport"
    },
    "correctAnswer": "D",
    "explanation": "Secondary active transport harnesses the gradient of one ion, usually Na⁺, to move another substance against its gradient. Primary active transport uses ATP directly, as in the Na⁺/K⁺-ATPase.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Cell Physiology & Membrane Transport",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-004",
    "unit": "cumulative-membrane-muscle-reflexes-na-k-atpase",
    "conceptBlock": "Na+/K+-ATPase",
    "subtopic": "Na+/K+-ATPase",
    "question": "Each cycle of the Na⁺/K⁺-ATPase moves:",
    "choices": {
      "A": "3 Na⁺ into the cell and 2 K⁺ out of the cell",
      "B": "2 Na⁺ out of the cell and 3 K⁺ into the cell",
      "C": "2 Na⁺ into the cell and 3 K⁺ out of the cell",
      "D": "3 Na⁺ out of the cell and 2 K⁺ into the cell"
    },
    "correctAnswer": "D",
    "explanation": "The pump extrudes 3 Na⁺ for every 2 K⁺ it brings in, using ATP directly. The net loss of one positive charge per cycle contributes to the negative resting membrane potential.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Cell Physiology & Membrane Transport",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-005",
    "unit": "cumulative-membrane-muscle-reflexes-resting-membrane-potential",
    "conceptBlock": "Resting Membrane Potential",
    "subtopic": "Resting Membrane Potential",
    "question": "The negative resting membrane potential of a typical neuron is most directly explained by:",
    "choices": {
      "A": "Sodium leaving the cell faster than potassium enters",
      "B": "Chloride being actively pumped into the cell",
      "C": "Greater membrane permeability to potassium than to sodium at rest",
      "D": "Calcium accumulating in the extracellular fluid"
    },
    "correctAnswer": "C",
    "explanation": "At rest, the membrane is much more permeable to K⁺ than to Na⁺, so K⁺ efflux dominates and leaves negatively charged intracellular proteins behind. The Na⁺/K⁺-ATPase maintains the gradients that make this possible.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-006",
    "unit": "cumulative-membrane-muscle-reflexes-membrane-potential-terminology",
    "conceptBlock": "Membrane Potential Terminology",
    "subtopic": "Membrane Potential Terminology",
    "question": "When the membrane potential becomes more negative than the resting value, this is called:",
    "choices": {
      "A": "Depolarization",
      "B": "Hyperpolarization",
      "C": "Repolarization",
      "D": "Threshold"
    },
    "correctAnswer": "B",
    "explanation": "Hyperpolarization means the interior of the cell is more negative than resting. Depolarization moves the membrane toward zero, repolarization returns it toward resting, and threshold is the voltage at which an action potential is triggered.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-007",
    "unit": "cumulative-membrane-muscle-reflexes-action-potential-landmarks",
    "conceptBlock": "Action Potential Landmarks",
    "subtopic": "Action Potential Landmarks",
    "question": "In a typical neuron, the approximate threshold and peak of the action potential are:",
    "choices": {
      "A": "–55 mV and +30 mV",
      "B": "–70 mV and 0 mV",
      "C": "–90 mV and +50 mV",
      "D": "–40 mV and +70 mV"
    },
    "correctAnswer": "A",
    "explanation": "Threshold sits around –55 mV; peak reaches roughly +30 mV. Resting membrane potential in a typical neuron is about –70 mV.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-008",
    "unit": "cumulative-membrane-muscle-reflexes-voltage-gated-channel-gating",
    "conceptBlock": "Voltage-Gated Channel Gating",
    "subtopic": "Voltage-Gated Channel Gating",
    "question": "Which feature is unique to the voltage-gated Na⁺ channel compared with the voltage-gated K⁺ channel?",
    "choices": {
      "A": "It requires calcium binding to open",
      "B": "It has only an inactivation gate",
      "C": "It has both an activation gate and an inactivation gate",
      "D": "It opens more slowly than the K⁺ channel"
    },
    "correctAnswer": "C",
    "explanation": "Na⁺ channels have both activation and inactivation gates, while K⁺ channels have only an activation gate. Inactivation prevents another action potential until the cell has repolarized and produces the refractory period.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-009",
    "unit": "cumulative-membrane-muscle-reflexes-ionic-basis-of-the-action-potential",
    "conceptBlock": "Ionic Basis of the Action Potential",
    "subtopic": "Ionic Basis of the Action Potential",
    "question": "Which ionic movement is primarily responsible for the repolarization (falling) phase of a neuronal action potential?",
    "choices": {
      "A": "Na⁺ moving into the cell",
      "B": "Ca²⁺ moving into the cell",
      "C": "Cl⁻ moving out of the cell",
      "D": "K⁺ moving out of the cell"
    },
    "correctAnswer": "D",
    "explanation": "After the peak, slower voltage-gated K⁺ channels open and K⁺ efflux drives the membrane back toward rest. Na⁺ influx is responsible for the rising phase.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-010",
    "unit": "cumulative-membrane-muscle-reflexes-ionic-basis-of-the-action-potential",
    "conceptBlock": "Ionic Basis of the Action Potential",
    "subtopic": "Ionic Basis of the Action Potential",
    "question": "The brief hyperpolarizing undershoot that follows an action potential occurs because:",
    "choices": {
      "A": "K⁺ channels remain open after the membrane has repolarized, allowing extra K⁺ efflux",
      "B": "Na⁺ channels remain open longer than normal",
      "C": "Ca²⁺ enters the cell through leak channels",
      "D": "The Na⁺/K⁺-ATPase transiently reverses direction"
    },
    "correctAnswer": "A",
    "explanation": "Voltage-gated K⁺ channels close relatively slowly, so K⁺ continues to leave briefly after the membrane has already returned to rest. This drives the membrane more negative than the resting value.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-011",
    "unit": "cumulative-membrane-muscle-reflexes-refractory-period",
    "conceptBlock": "Refractory Period",
    "subtopic": "Refractory Period",
    "question": "If voltage-gated Na⁺ channels could not enter their inactivated state, the most direct consequence would be:",
    "choices": {
      "A": "Slower repolarization of the action potential",
      "B": "An elevated (less negative) resting membrane potential",
      "C": "Loss of the refractory period, allowing continuous re-excitation",
      "D": "Reduced K⁺ conductance during the falling phase"
    },
    "correctAnswer": "C",
    "explanation": "Once Na⁺ channels inactivate, they cannot immediately reopen, producing the absolute refractory period. Without this inactivation step, the neuron could be re-excited right after firing and would lose its ability to fire discrete action potentials.",
    "questionType": "Integrative",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Neuronal Membrane & Action Potentials",
    "learningLevel": "Integrative"
  },
  {
    "id": "CF-MMSR-012",
    "unit": "cumulative-membrane-muscle-reflexes-muscle-type-comparison",
    "conceptBlock": "Muscle Type Comparison",
    "subtopic": "Muscle Type Comparison",
    "question": "Which muscle type is under voluntary control?",
    "choices": {
      "A": "Cardiac",
      "B": "Smooth",
      "C": "Both cardiac and smooth",
      "D": "Skeletal"
    },
    "correctAnswer": "D",
    "explanation": "Skeletal muscle is controlled by the somatic motor system and is generally considered voluntary. Cardiac and smooth muscle are involuntary.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-013",
    "unit": "cumulative-membrane-muscle-reflexes-muscle-type-comparison",
    "conceptBlock": "Muscle Type Comparison",
    "subtopic": "Muscle Type Comparison",
    "question": "Intercalated discs are a defining structural feature of which muscle type?",
    "choices": {
      "A": "Cardiac",
      "B": "Skeletal",
      "C": "Unitary smooth",
      "D": "Multi-unit smooth"
    },
    "correctAnswer": "A",
    "explanation": "Cardiac muscle cells are joined by intercalated discs, which contain gap junctions for rapid electrical coupling. Skeletal muscle uses Z discs within sarcomeres; unitary smooth uses gap junctions but not intercalated discs.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-014",
    "unit": "cumulative-membrane-muscle-reflexes-muscle-type-comparison",
    "conceptBlock": "Muscle Type Comparison",
    "subtopic": "Muscle Type Comparison",
    "question": "Which feature would you NOT expect to see in a smooth muscle cell?",
    "choices": {
      "A": "Single central nucleus",
      "B": "Striations",
      "C": "Fusiform shape",
      "D": "Dense bodies"
    },
    "correctAnswer": "B",
    "explanation": "Smooth muscle lacks striations because actin and myosin are not arranged in parallel sarcomeres. Instead, actin filaments anchor to dense bodies within and along the cell membrane.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-015",
    "unit": "cumulative-membrane-muscle-reflexes-sarcomere-zones",
    "conceptBlock": "Sarcomere Zones",
    "subtopic": "Sarcomere Zones",
    "question": "During skeletal muscle contraction, which band or zone stays the same length?",
    "choices": {
      "A": "I band",
      "B": "H zone",
      "C": "Sarcomere as a whole",
      "D": "A band"
    },
    "correctAnswer": "D",
    "explanation": "The A band equals the length of the thick (myosin) filament and does not change during contraction. The I band and H zone shorten as thin filaments slide toward the M line.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-016",
    "unit": "cumulative-membrane-muscle-reflexes-connective-tissue-layers",
    "conceptBlock": "Connective Tissue Layers",
    "subtopic": "Connective Tissue Layers",
    "question": "The connective tissue layer that surrounds an individual skeletal muscle fiber is:",
    "choices": {
      "A": "Epimysium",
      "B": "Perimysium",
      "C": "Endomysium",
      "D": "Sarcolemma"
    },
    "correctAnswer": "C",
    "explanation": "Endomysium wraps individual fibers, perimysium wraps fascicles, and epimysium wraps the whole muscle. The sarcolemma is the muscle fiber's own plasma membrane, not a connective tissue sheath.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-017",
    "unit": "cumulative-membrane-muscle-reflexes-sr-and-ca2-storage",
    "conceptBlock": "SR & Ca2+ Storage",
    "subtopic": "SR & Ca2+ Storage",
    "question": "Most of the calcium in a resting skeletal muscle fiber is stored in the:",
    "choices": {
      "A": "Mitochondria",
      "B": "Sarcoplasmic reticulum",
      "C": "Extracellular fluid",
      "D": "Terminal button of the motor neuron"
    },
    "correctAnswer": "B",
    "explanation": "The SR stores Ca²⁺ and releases it into the cytosol during excitation–contraction coupling. A T-tubule flanked by two terminal cisternae of SR forms the triad.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Skeletal Muscle Structure",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-018",
    "unit": "cumulative-membrane-muscle-reflexes-neuromuscular-junction",
    "conceptBlock": "Neuromuscular Junction",
    "subtopic": "Neuromuscular Junction",
    "question": "The receptor on the motor end plate that binds acetylcholine at the neuromuscular junction is a:",
    "choices": {
      "A": "Muscarinic cholinergic G-protein–coupled receptor",
      "B": "Beta-1 adrenergic receptor",
      "C": "Voltage-gated Na⁺ channel",
      "D": "Nicotinic cholinergic ligand-gated channel"
    },
    "correctAnswer": "D",
    "explanation": "The NMJ uses a nicotinic ACh receptor, a ligand-gated non-selective cation channel. Na⁺ influx dominates and produces the end-plate depolarization that triggers the muscle action potential.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-019",
    "unit": "cumulative-membrane-muscle-reflexes-neuromuscular-junction",
    "conceptBlock": "Neuromuscular Junction",
    "subtopic": "Neuromuscular Junction",
    "question": "Acetylcholinesterase in the synaptic cleft directly:",
    "choices": {
      "A": "Breaks down ACh to terminate its signal",
      "B": "Reuptakes ACh into the presynaptic terminal",
      "C": "Opens voltage-gated Ca²⁺ channels",
      "D": "Blocks nicotinic receptors"
    },
    "correctAnswer": "A",
    "explanation": "AChE degrades ACh in the cleft, ending stimulation of the nicotinic receptors. This is why AChE inhibitors are used in myasthenia gravis to prolong ACh availability at reduced receptor numbers.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-020",
    "unit": "cumulative-membrane-muscle-reflexes-dhp-and-ryanodine-receptors",
    "conceptBlock": "DHP & Ryanodine Receptors",
    "subtopic": "DHP & Ryanodine Receptors",
    "question": "When an action potential travels down the T-tubule of a skeletal muscle fiber, the DHP receptor:",
    "choices": {
      "A": "Directly binds Ca²⁺ from the extracellular fluid",
      "B": "Pumps Ca²⁺ back into the sarcoplasmic reticulum",
      "C": "Senses the voltage change and activates the ryanodine receptor",
      "D": "Cleaves ACh in the synaptic cleft"
    },
    "correctAnswer": "C",
    "explanation": "The DHP receptor is a voltage sensor in the T-tubule membrane. It mechanically activates the ryanodine receptor on the adjacent SR, which opens to release Ca²⁺ into the cytosol.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-021",
    "unit": "cumulative-membrane-muscle-reflexes-cross-bridge-cycle",
    "conceptBlock": "Cross-Bridge Cycle",
    "subtopic": "Cross-Bridge Cycle",
    "question": "In the cross-bridge cycle, the direct role of a new ATP molecule binding to the myosin head is to:",
    "choices": {
      "A": "Trigger the power stroke",
      "B": "Detach the myosin head from actin",
      "C": "Bind calcium to troponin",
      "D": "Reactivate the ryanodine receptor"
    },
    "correctAnswer": "B",
    "explanation": "A new ATP binding to myosin releases it from actin. Subsequent hydrolysis to ADP + Pi re-cocks the head into its high-energy configuration for the next attachment.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-022",
    "unit": "cumulative-membrane-muscle-reflexes-troponin-and-ca2",
    "conceptBlock": "Troponin & Ca2+",
    "subtopic": "Troponin & Ca2+",
    "question": "Calcium initiates skeletal muscle contraction by binding to:",
    "choices": {
      "A": "Troponin C",
      "B": "Tropomyosin",
      "C": "The myosin head",
      "D": "Actin directly"
    },
    "correctAnswer": "A",
    "explanation": "Ca²⁺ binds troponin C, which shifts tropomyosin and exposes the myosin-binding sites on actin. Smooth muscle uses calmodulin in place of troponin.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-023",
    "unit": "cumulative-membrane-muscle-reflexes-motor-unit-definition",
    "conceptBlock": "Motor Unit Definition",
    "subtopic": "Motor Unit Definition",
    "question": "A motor unit consists of:",
    "choices": {
      "A": "A single motor neuron plus every muscle fiber it innervates",
      "B": "All the muscle fibers of a single whole muscle",
      "C": "The sarcomeres within a single muscle fiber",
      "D": "One alpha motor neuron paired with one gamma motor neuron"
    },
    "correctAnswer": "A",
    "explanation": "A motor unit is one alpha motor neuron and all of the extrafusal fibers it innervates. Fibers within a unit contract together whenever the neuron fires.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-024",
    "unit": "cumulative-membrane-muscle-reflexes-size-principle",
    "conceptBlock": "Size Principle",
    "subtopic": "Size Principle",
    "question": "According to the size principle, the first motor units recruited at the start of any voluntary contraction are:",
    "choices": {
      "A": "Fast glycolytic (Type IIb)",
      "B": "Fast oxidative glycolytic (Type IIa)",
      "C": "Whichever units are best matched to the task intensity",
      "D": "Slow oxidative (Type I)"
    },
    "correctAnswer": "D",
    "explanation": "The size principle says the smallest motor units are recruited first — these are generally composed of slow oxidative (Type I) fibers. As more force is required, progressively larger and faster units (Type IIa, then Type IIb) are added.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-025",
    "unit": "cumulative-membrane-muscle-reflexes-summation-types",
    "conceptBlock": "Summation Types",
    "subtopic": "Summation Types",
    "question": "Increasing the number of active motor units to generate a stronger contraction is called:",
    "choices": {
      "A": "Frequency summation",
      "B": "Tetany",
      "C": "Multiple fiber summation",
      "D": "Alpha–gamma coactivation"
    },
    "correctAnswer": "C",
    "explanation": "Multiple fiber summation adds motor units. Frequency summation increases the firing rate of units already recruited and can lead to tetany.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-026",
    "unit": "cumulative-membrane-muscle-reflexes-tetany",
    "conceptBlock": "Tetany",
    "subtopic": "Tetany",
    "question": "Sustained maximal contraction produced by very high-frequency stimulation of a motor unit is:",
    "choices": {
      "A": "Clonus",
      "B": "A single twitch",
      "C": "Recurrent inhibition",
      "D": "Tetany"
    },
    "correctAnswer": "D",
    "explanation": "Tetany results when frequency summation is fast enough that Ca²⁺ cannot be pumped back into the SR between stimuli. Clonus is oscillating contractions, not a sustained one.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-027",
    "unit": "cumulative-membrane-muscle-reflexes-fiber-type-comparison",
    "conceptBlock": "Fiber Type Comparison",
    "subtopic": "Fiber Type Comparison",
    "question": "Compared with Type I fibers, Type IIb (fast glycolytic) fibers have:",
    "choices": {
      "A": "Larger diameter, greater force production, and lower fatigue resistance",
      "B": "More mitochondria and greater fatigue resistance",
      "C": "More myoglobin and slower contraction speed",
      "D": "Smaller diameter but higher aerobic capacity"
    },
    "correctAnswer": "A",
    "explanation": "Type IIb fibers are the largest, produce the greatest force, and fatigue quickly with anaerobic metabolism. Type I fibers are smaller, aerobic, and fatigue resistant.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-028",
    "unit": "cumulative-membrane-muscle-reflexes-fiber-type-comparison",
    "conceptBlock": "Fiber Type Comparison",
    "subtopic": "Fiber Type Comparison",
    "question": "Which fiber type would predominate in a muscle best suited for prolonged endurance activity?",
    "choices": {
      "A": "Type IIa (fast oxidative glycolytic)",
      "B": "Type IIb (fast glycolytic)",
      "C": "Type I (slow oxidative)",
      "D": "Multi-unit smooth muscle fibers"
    },
    "correctAnswer": "C",
    "explanation": "Type I fibers have the most mitochondria and myoglobin and rely on aerobic metabolism, so they resist fatigue and are best for endurance.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Motor Units, Summation & Fiber Types",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-029",
    "unit": "cumulative-membrane-muscle-reflexes-smooth-muscle-ca2-signaling",
    "conceptBlock": "Smooth Muscle Ca2+ Signaling",
    "subtopic": "Smooth Muscle Ca2+ Signaling",
    "question": "In smooth muscle, cytosolic Ca²⁺ initiates contraction by binding to:",
    "choices": {
      "A": "Troponin C",
      "B": "Myosin light chain phosphatase",
      "C": "Dense bodies",
      "D": "Calmodulin"
    },
    "correctAnswer": "D",
    "explanation": "Smooth muscle has no troponin. Ca²⁺ binds calmodulin; the Ca²⁺–calmodulin complex activates myosin light chain kinase (MLCK).",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Smooth Muscle",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-030",
    "unit": "cumulative-membrane-muscle-reflexes-mlck-and-phosphorylation",
    "conceptBlock": "MLCK & Phosphorylation",
    "subtopic": "MLCK & Phosphorylation",
    "question": "Myosin light chain kinase (MLCK) promotes smooth muscle contraction by:",
    "choices": {
      "A": "Removing a phosphate from myosin light chains",
      "B": "Pumping Ca²⁺ back into the sarcoplasmic reticulum",
      "C": "Phosphorylating myosin light chains to activate myosin ATPase",
      "D": "Blocking calmodulin activity"
    },
    "correctAnswer": "C",
    "explanation": "MLCK phosphorylates the myosin light chains, which activates myosin ATPase and permits cross-bridge cycling. Myosin phosphatase reverses this and drives relaxation.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Smooth Muscle",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-031",
    "unit": "cumulative-membrane-muscle-reflexes-single-unit-vs-multi-unit",
    "conceptBlock": "Single-Unit vs Multi-Unit",
    "subtopic": "Single-Unit vs Multi-Unit",
    "question": "Smooth muscle cells connected by gap junctions that contract as one functional syncytium describe:",
    "choices": {
      "A": "Single-unit (unitary) smooth muscle",
      "B": "Multi-unit smooth muscle",
      "C": "Cardiac muscle",
      "D": "Skeletal muscle"
    },
    "correctAnswer": "A",
    "explanation": "Unitary smooth muscle is coupled by gap junctions and contracts as one unit (e.g., small intestine). Multi-unit smooth muscle cells are innervated independently (e.g., iris).",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Smooth Muscle",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-032",
    "unit": "cumulative-membrane-muscle-reflexes-smooth-muscle-regulation",
    "conceptBlock": "Smooth Muscle Regulation",
    "subtopic": "Smooth Muscle Regulation",
    "question": "Which stimulus would you expect to promote smooth muscle contraction?",
    "choices": {
      "A": "Nitric oxide",
      "B": "Oxytocin",
      "C": "Adenosine",
      "D": "Lactate"
    },
    "correctAnswer": "B",
    "explanation": "Vasopressin, endothelin, oxytocin, and stretch stimulate smooth muscle contraction. Nitric oxide, adenosine, and lactate are listed as relaxation stimuli.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Smooth Muscle",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-033",
    "unit": "cumulative-membrane-muscle-reflexes-reflex-arc",
    "conceptBlock": "Reflex Arc",
    "subtopic": "Reflex Arc",
    "question": "Which of the following is NOT one of the five parts of a reflex arc?",
    "choices": {
      "A": "Sensory neuron",
      "B": "Integration center",
      "C": "Cerebral cortex",
      "D": "Effector"
    },
    "correctAnswer": "C",
    "explanation": "The five parts are receptor, sensory neuron, integration center, motor neuron, and effector. Cognitive processing at the cortex is exactly what a reflex bypasses to allow a rapid response.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-034",
    "unit": "cumulative-membrane-muscle-reflexes-reflex-arc",
    "conceptBlock": "Reflex Arc",
    "subtopic": "Reflex Arc",
    "question": "Which of the following is a monosynaptic reflex?",
    "choices": {
      "A": "Flexor withdrawal reflex",
      "B": "Reciprocal inhibition of an antagonist",
      "C": "Crossed extensor reflex",
      "D": "Knee-jerk (stretch) reflex"
    },
    "correctAnswer": "D",
    "explanation": "The knee-jerk reflex has one synapse between the Type Ia sensory neuron and the alpha motor neuron. Withdrawal, reciprocal inhibition, and crossed extensor all use one or more interneurons.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-035",
    "unit": "cumulative-membrane-muscle-reflexes-bell-magendie-law",
    "conceptBlock": "Bell–Magendie Law",
    "subtopic": "Bell–Magendie Law",
    "question": "Bell–Magendie law states that:",
    "choices": {
      "A": "Anterior spinal roots are motor; posterior roots are sensory",
      "B": "Anterior spinal roots are sensory; posterior roots are motor",
      "C": "Both roots carry mixed fibers",
      "D": "Interneurons are located only in the ventral horn"
    },
    "correctAnswer": "A",
    "explanation": "Ventral (anterior) roots carry motor fibers, and dorsal (posterior) roots carry sensory fibers. Sensory afferents enter the dorsal horn for integration in the gray matter.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-036",
    "unit": "cumulative-membrane-muscle-reflexes-alpha-vs-gamma-motor-neurons",
    "conceptBlock": "Alpha vs Gamma Motor Neurons",
    "subtopic": "Alpha vs Gamma Motor Neurons",
    "question": "Gamma motor neurons differ from alpha motor neurons in that they:",
    "choices": {
      "A": "Innervate extrafusal fibers to generate force",
      "B": "Release glycine at the neuromuscular junction",
      "C": "Are located in the dorsal horn",
      "D": "Innervate intrafusal fibers to maintain spindle sensitivity"
    },
    "correctAnswer": "D",
    "explanation": "Alpha motor neurons drive force generation by innervating extrafusal fibers. Gamma motor neurons innervate intrafusal fibers within muscle spindles, keeping the spindle taut so it can still detect stretch as the whole muscle shortens.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-037",
    "unit": "cumulative-membrane-muscle-reflexes-renshaw-cells",
    "conceptBlock": "Renshaw Cells",
    "subtopic": "Renshaw Cells",
    "question": "Renshaw cells receive input from a collateral of the alpha motor neuron and then:",
    "choices": {
      "A": "Excite the same alpha motor neuron to sustain contraction",
      "B": "Inhibit the same alpha motor neuron to prevent excessive firing",
      "C": "Inhibit the antagonist alpha motor neuron",
      "D": "Activate gamma motor neurons to increase spindle sensitivity"
    },
    "correctAnswer": "B",
    "explanation": "A collateral from the alpha motor neuron activates the Renshaw cell, which releases an inhibitory neurotransmitter (glycine) back onto that same motor neuron. This recurrent inhibition dampens further firing of the motor neuron.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-038",
    "unit": "cumulative-membrane-muscle-reflexes-muscle-spindle-sensory-fibers",
    "conceptBlock": "Muscle Spindle Sensory Fibers",
    "subtopic": "Muscle Spindle Sensory Fibers",
    "question": "Which sensory ending in a muscle spindle detects the DYNAMIC component of stretch?",
    "choices": {
      "A": "Type Ib (Golgi tendon organ)",
      "B": "Type II (secondary, flower spray)",
      "C": "Type Ia (primary, annulospiral)",
      "D": "Type III (A-delta)"
    },
    "correctAnswer": "C",
    "explanation": "Type Ia annulospiral endings detect dynamic (rate) stretch and drive the stretch reflex. Type II flower-spray endings track static (sustained) length. Type Ib fibers are the sensory arm of the GTO.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-039",
    "unit": "cumulative-membrane-muscle-reflexes-reciprocal-inhibition-vs-alpha-gamma",
    "conceptBlock": "Reciprocal Inhibition vs Alpha–Gamma",
    "subtopic": "Reciprocal Inhibition vs Alpha–Gamma",
    "question": "Tapping the patellar tendon causes the quadriceps to contract while the hamstrings stay relaxed. The hamstring response is best explained by:",
    "choices": {
      "A": "Reciprocal inhibition through an inhibitory interneuron",
      "B": "Alpha–gamma coactivation",
      "C": "Renshaw cell recurrent inhibition",
      "D": "The Golgi tendon organ reflex"
    },
    "correctAnswer": "A",
    "explanation": "A Type Ia collateral synapses onto an inhibitory interneuron that then inhibits the antagonist's alpha motor neuron. Alpha–gamma coactivation maintains spindle sensitivity in the CONTRACTING muscle — it does not inhibit anything.",
    "questionType": "Integrative",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Integrative"
  },
  {
    "id": "CF-MMSR-040",
    "unit": "cumulative-membrane-muscle-reflexes-clonus",
    "conceptBlock": "Clonus",
    "subtopic": "Clonus",
    "question": "Clonus is best described as:",
    "choices": {
      "A": "Sustained maximal contraction driven by high-frequency stimulation",
      "B": "Inability to relax due to failure of the Na⁺/K⁺-ATPase",
      "C": "Oscillating contractions of a muscle after the spindle is activated",
      "D": "Loss of the deep tendon reflex"
    },
    "correctAnswer": "C",
    "explanation": "Clonus is a rhythmic oscillation of contractions (e.g., ankle clonus) seen alongside a stretch reflex. Tetany, by contrast, is a sustained contraction produced by frequency summation.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-041",
    "unit": "cumulative-membrane-muscle-reflexes-golgi-tendon-organ",
    "conceptBlock": "Golgi Tendon Organ",
    "subtopic": "Golgi Tendon Organ",
    "question": "The Golgi tendon organ differs from the muscle spindle in that it:",
    "choices": {
      "A": "Detects muscle length rather than tension",
      "B": "Uses Type Ia fibers to detect dynamic stretch",
      "C": "Is located in the belly of the muscle",
      "D": "Detects tension rather than length, using Type Ib fibers"
    },
    "correctAnswer": "D",
    "explanation": "GTOs sit at the muscle–tendon border and detect tension through Type Ib afferents. When tension rises, the spinal circuit inhibits the same muscle (autogenic inhibition), reducing tension and helping prevent injury.",
    "questionType": "Applied Reinforcement",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Applied Reinforcement"
  },
  {
    "id": "CF-MMSR-042",
    "unit": "cumulative-membrane-muscle-reflexes-crossed-extensor-reflex",
    "conceptBlock": "Crossed Extensor Reflex",
    "subtopic": "Crossed Extensor Reflex",
    "question": "When you step barefoot on a sharp object, the crossed extensor reflex produces:",
    "choices": {
      "A": "Ipsilateral extension and contralateral flexion",
      "B": "Ipsilateral flexion and contralateral extension",
      "C": "Bilateral flexion of both legs",
      "D": "Bilateral extension of both legs"
    },
    "correctAnswer": "B",
    "explanation": "On the injured side, flexors contract and extensors are inhibited to withdraw the limb. On the opposite side, extensors contract to support body weight. Both are polysynaptic and use Type III (A-delta) and Type IV (C) fibers.",
    "questionType": "Foundation",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Foundation"
  },
  {
    "id": "CF-MMSR-043",
    "unit": "cumulative-membrane-muscle-reflexes-inhibitory-neurotransmission",
    "conceptBlock": "Inhibitory Neurotransmission",
    "subtopic": "Inhibitory Neurotransmission",
    "question": "If inhibitory interneurons in the spinal cord failed to release their neurotransmitter, which reflex effect would you most expect?",
    "choices": {
      "A": "Loss of the stretch reflex",
      "B": "Increased muscle length sensitivity from Type Ia fibers",
      "C": "Loss of reciprocal inhibition of the antagonist muscle",
      "D": "Loss of alpha–gamma coactivation"
    },
    "correctAnswer": "C",
    "explanation": "Glycine (and GABA) from inhibitory interneurons drives reciprocal inhibition of antagonist motor neurons. Without it, antagonists would fire alongside agonists, while the excitatory glutamate pathway of the stretch reflex itself would remain intact.",
    "questionType": "Integrative",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Spinal Reflexes",
    "learningLevel": "Integrative"
  },
  {
    "id": "CF-MMSR-044",
    "unit": "cumulative-membrane-muscle-reflexes-ca2-reuptake-and-relaxation",
    "conceptBlock": "Ca2+ Reuptake & Relaxation",
    "subtopic": "Ca2+ Reuptake & Relaxation",
    "question": "If sarcoplasmic Ca²⁺-ATPase activity in a skeletal muscle fiber were sharply reduced, the most likely direct effect would be:",
    "choices": {
      "A": "Failure to depolarize the sarcolemma on the next stimulus",
      "B": "Prolonged contraction with delayed relaxation",
      "C": "Loss of the end-plate potential at the NMJ",
      "D": "Reduced recruitment of Type IIb motor units"
    },
    "correctAnswer": "B",
    "explanation": "Relaxation requires Ca²⁺ to be pumped back into the SR so that Ca²⁺ leaves troponin C and tropomyosin can re-cover actin's binding sites. If pumping falters, cytosolic Ca²⁺ stays high and cross-bridge cycling continues.",
    "questionType": "Integrative",
    "bankType": "sprint",
    "bankId": "cumulative_final_membrane_muscle_reflexes_v1",
    "contentGroup": "cumulative-final",
    "sourceLabel": "Physiology II Cumulative Final — Membrane, Muscle & Spinal Reflexes",
    "broadCategory": "Excitation–Contraction Coupling",
    "learningLevel": "Integrative"
  }
];
  var categories = [
  {
    "order": 33,
    "name": "cumulative-mmsr-cell-physiology-and-membrane-transport",
    "title": "Cell Physiology & Membrane Transport",
    "ids": [
      "CF-MMSR-001",
      "CF-MMSR-002",
      "CF-MMSR-003",
      "CF-MMSR-004"
    ]
  },
  {
    "order": 34,
    "name": "cumulative-mmsr-neuronal-membrane-and-action-potentials",
    "title": "Neuronal Membrane & Action Potentials",
    "ids": [
      "CF-MMSR-005",
      "CF-MMSR-006",
      "CF-MMSR-007",
      "CF-MMSR-008",
      "CF-MMSR-009",
      "CF-MMSR-010",
      "CF-MMSR-011"
    ]
  },
  {
    "order": 35,
    "name": "cumulative-mmsr-skeletal-muscle-structure",
    "title": "Skeletal Muscle Structure",
    "ids": [
      "CF-MMSR-012",
      "CF-MMSR-013",
      "CF-MMSR-014",
      "CF-MMSR-015",
      "CF-MMSR-016",
      "CF-MMSR-017"
    ]
  },
  {
    "order": 36,
    "name": "cumulative-mmsr-excitation-contraction-coupling",
    "title": "Excitation–Contraction Coupling",
    "ids": [
      "CF-MMSR-018",
      "CF-MMSR-019",
      "CF-MMSR-020",
      "CF-MMSR-021",
      "CF-MMSR-022",
      "CF-MMSR-044"
    ]
  },
  {
    "order": 37,
    "name": "cumulative-mmsr-motor-units-summation-and-fiber-types",
    "title": "Motor Units, Summation & Fiber Types",
    "ids": [
      "CF-MMSR-023",
      "CF-MMSR-024",
      "CF-MMSR-025",
      "CF-MMSR-026",
      "CF-MMSR-027",
      "CF-MMSR-028"
    ]
  },
  {
    "order": 38,
    "name": "cumulative-mmsr-smooth-muscle",
    "title": "Smooth Muscle",
    "ids": [
      "CF-MMSR-029",
      "CF-MMSR-030",
      "CF-MMSR-031",
      "CF-MMSR-032"
    ]
  },
  {
    "order": 39,
    "name": "cumulative-mmsr-spinal-reflexes",
    "title": "Spinal Reflexes",
    "ids": [
      "CF-MMSR-033",
      "CF-MMSR-034",
      "CF-MMSR-035",
      "CF-MMSR-036",
      "CF-MMSR-037",
      "CF-MMSR-038",
      "CF-MMSR-039",
      "CF-MMSR-040",
      "CF-MMSR-041",
      "CF-MMSR-042",
      "CF-MMSR-043"
    ]
  }
];

  root.CUMULATIVE_FINAL_QUESTIONS = (root.CUMULATIVE_FINAL_QUESTIONS || []).concat(questions);
  root.CUMULATIVE_FINAL_CATEGORIES = (root.CUMULATIVE_FINAL_CATEGORIES || []).concat(categories);
})(typeof window !== "undefined" ? window : globalThis);
