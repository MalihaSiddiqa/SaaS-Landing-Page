import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
            <BookOpen className="h-4 w-4" />
          </span>
          <span>NoteCraft AI</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#how-it-works" className="hover:text-green-600">How It Works</a>
          <a href="#pricing" className="hover:text-green-600">Pricing</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </div>

        <p className="text-xs text-slate-500">
          @{new Date().getFullYear()} | NoteCraft AI. Built for Front-End Assignment.
        </p>
      </div>
    </footer>
  );
}