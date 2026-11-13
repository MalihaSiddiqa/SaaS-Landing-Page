import { CheckCircle2, FileText, Layers, Cpu } from "lucide-react";
import { FEATURES } from "../data/content";

const ICON_MAP = {
  FileText: FileText,
  Layers: Layers,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From raw notes to mastery in 3 steps
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Stop spending hours re-reading dense slides. Let AI organize the structure so you can
            focus on understanding.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((item) => {
            const IconComponent = ICON_MAP[item.icon];
            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md hover:scale-115"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}