export const FEATURES = [
  {
    id: 1,
    title: "Instant AI Summaries",
    description:
      "Paste your OS notes the night before the exam. Get a one-page summary",
    icon: "FileText",
  },
  {
    id: 2,
    title: "1-Click Flashcards",
    description:
      "Automatically extract key definitions and formulas into active-recall flashcards ready for quick revision.",
    icon: "Layers",
  },
  {
    id: 3,
    title: "Practice Quiz Generator",
    description:
      "Test your retention before exam day with custom multiple-choice questions generated directly from your notes.",
    icon: "CheckCircle2",
  },
  {
    id: 4,
    title: "Ask Your Notes",
    description:
      "Highlight any confusing concept and get plain-English explanations grounded strictly in your uploaded material.",
    icon: "Cpu",
  },
];

export const DEMO_TABS = {
  raw: {
    label: "Raw Lecture Notes",
    badge: "Messy Input",
    title: "OS Process Scheduling - Lecture 04",
    content:
      "CPU scheduling decides which ready process runs next. FCFS is simple non-preemptive, causes convoy effect if long job arrives first. SJF gives min avg waiting time but needs burst time prediction. Round Robin uses time quantum (q), good for time-sharing, if q too large behaves like FCFS, if q too small high context switch overhead.",
  },
  summary: {
    label: "AI Summary",
    badge: "Structured Notes",
    title: "Key Takeaways: CPU Scheduling Algorithms",
    bullets: [
      "FCFS (First-Come, First-Served): Non-preemptive; prone to the Convoy Effect when a long process blocks shorter ones.",
      "SJF (Shortest Job First): Minimizes average waiting time, though exact CPU burst duration is difficult to predict.",
      "Round Robin (RR): Preemptive using a fixed time quantum (q); balances responsiveness against context-switching overhead.",
    ],
  },
  quiz: {
    label: "Practice Quiz",
    badge: "Self-Test",
    question: "What happens in Round Robin scheduling if the time quantum (q) is extremely large?",
    options: [
      "Context switching overhead increases rapidly",
      "It degenerates into First-Come, First-Served (FCFS)",
      "Processes experience permanent starvation",
    ],
    answerIndex: 1,
  },
};

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Student Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Everything you need to organize daily class notes.",
    features: [
      "Up to 5 PDF or note uploads per month",
      "AI bullet-point summaries",
      "Up to 30 flashcards per deck",
      "Standard web access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Scholar",
    monthlyPrice: 8,
    yearlyPrice: 6,
    description: "Unlimited AI study tools for exam season and heavy coursework.",
    features: [
      "Unlimited PDF, slide, and audio uploads",
      "Unlimited practice quizzes & flashcards",
      "Interactive 'Ask Your Notes' AI tutor",
      "Export decks to PDF & Anki",
    ],
    cta: "Get Pro Scholar",
    popular: true,
  },
];