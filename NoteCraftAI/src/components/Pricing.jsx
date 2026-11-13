import { useState } from "react";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "../data/content";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple, student-friendly plans
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Start free with core study tools or upgrade anytime for unlimited uploads.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                !yearly ? "bg-green-600 text-white shadow-xs" : "text-slate-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                yearly ? "bg-green-600 text-white shadow-xs" : "text-slate-600"
              }`}
            >
              Yearly (Save 25%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PRICING_PLANS.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-green-600 bg-green-50/20 shadow-lg shadow-green-100"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">${price}</span>
                    <span className="text-sm text-slate-500">/ month</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-green-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/signup?plan=${encodeURIComponent(plan.name)}`}
                  className={`mt-8 w-full rounded-xl p-3 text-sm font-semibold transition cursor-pointer ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700 hover:scale-110"
                      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}