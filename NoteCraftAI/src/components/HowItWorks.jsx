import { useState } from "react";
import { DEMO_TABS } from "../data/content";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("summary");
  const [selectedOption, setSelectedOption] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Upload Your Material",
      desc: "Drop in lecture PDFs, pasted notes, or study guides in one click.",
    },
    {
      num: "02",
      title: "AI Extracts Key Concepts",
      desc: "Our model identifies core definitions, formulas, and exam topics.",
    },
    {
      num: "03",
      title: "Review & Quiz Yourself",
      desc: "Switch seamlessly between concise summaries and interactive quizzes.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-green-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From raw notes to mastery in 3 steps
          </h2>
        </div>

        {/* 3 Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl transition hover:scale-110 border border-slate-200 bg-white p-6">
              <span className="inline-block rounded-lg bg-green-600 px-3 py-1 text-xs font-bold text-white">
                Step {step.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Demo Switcher */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-base font-bold text-slate-900">Try an Interactive Preview</h3>
              <p className="text-xs text-slate-500">
                Click the tabs below to see how NoteCraft transforms a real CS note.
              </p>
            </div>

            <div className="flex rounded-xl bg-slate-50 p-1">
              {Object.entries(DEMO_TABS).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setSelectedOption(null);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    activeTab === key
                      ? "bg-white text-green-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Body */}
          <div className="mt-6">
            {activeTab === "raw" && (
              <div>
                <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                  {DEMO_TABS.raw.badge}
                </span>
                <h4 className="mt-3 text-base font-bold text-slate-900">{DEMO_TABS.raw.title}</h4>
                <p className="mt-2 rounded-xl bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-700">
                  {DEMO_TABS.raw.content}
                </p>
              </div>
            )}

            {activeTab === "summary" && (
              <div>
                <span className="rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                  {DEMO_TABS.summary.badge}
                </span>
                <h4 className="mt-3 text-base font-bold text-slate-900">
                  {DEMO_TABS.summary.title}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {DEMO_TABS.summary.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-xl bg-indigo-50/50 p-3 text-sm text-slate-700"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "quiz" && (
              <div>
                <span className="rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                  {DEMO_TABS.quiz.badge}
                </span>
                <h4 className="mt-3 font-bold text-slate-900">
                  {DEMO_TABS.quiz.question}
                </h4>
                <div className="mt-4 space-y-2.5">
                  {DEMO_TABS.quiz.options.map((option, idx) => {
                    const isPicked = selectedOption === idx;
                    const isCorrect = idx === DEMO_TABS.quiz.answerIndex;
                    let style = "border-slate-200 hover:border-green-300 text-slate-700";
                    if (selectedOption !== null) {
                      if (isCorrect) style = "border-green-500 bg-green-50 text-green-900";
                      else if (isPicked) style = "border-rose-400 bg-rose-50 text-rose-900";
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedOption(idx)}
                        className={`w-full rounded-xl border p-3.5 text-left text-sm font-medium transition cursor-pointer ${style}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}