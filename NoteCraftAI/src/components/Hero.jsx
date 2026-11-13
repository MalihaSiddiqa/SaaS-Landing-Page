import { ArrowRight, Check, Cpu} from "lucide-react";
import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-green-50/70 via-white to-white pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left Copy */}
        <div className="text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-3.5 py-1.5 text-xs font-semibold text-green-700">
            <Cpu className="h-3.5 w-3.5" />
            AI-Powered Study Companion
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.15]">
            Turn Messy Lecture Notes into 
            <span className="text-green-600"> Exam-Ready Flashcards</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Upload your PDFs, slides, or rough class notes. NoteCraft AI instantly extracts key
            concepts into clean summaries, flashcards, and self-test quizzes.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
            <Link
              to="/signup?plan=Student%20Free"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white hover:bg-white hover:border-2 hover:border-green-600 px-6 py-3.5 text-sm font-semibold hover:text-green-600 shadow-md shadow-green-200 transition cursor-pointer"
            >
              Start Studying Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-green-50 hover:border-none"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-600" /> Supports PDF, DOCX & Markdown
            </span>
          </div>
        </div>

        {/* Right Visual UI Preview */}
        <div className="mx-auto w-full max-w-lg">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                React_Hooks_Lecture.pdf
              </span>
            </div>

            {/* Raw Snippet */}
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Raw Input
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                "useEffect runs after render. Empty dependency array [] means run once on
                mount. Return a function to clean up timers or subscriptions..."
              </p>
            </div>

            {/* Transformation Divider */}
            <div className="my-3 flex items-center justify-center">
              <span className="rounded-full bg-green-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                Generated 3 Flashcards & Summary
              </span>
            </div>

            {/* Output Card */}
            <div className="rounded-xl border border-indigo-100 bg-green-50/40 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-green-700">Flashcard #1</span>
                <span className="text-[11px] font-medium text-slate-400">Active Recall</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Q: When does a useEffect hook with an empty dependency array [] execute?
              </p>
              <p className="mt-2 rounded-lg bg-white p-2.5 text-xs text-slate-700 shadow-xs">
                <strong className="text-emerald-600">A:</strong> Once immediately after the
                initial component mount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}