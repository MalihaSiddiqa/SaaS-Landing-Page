import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";

export default function SignupModal() {
  const [searchParams] = useSearchParams();
  const selectedPlan = searchParams.get("plan") || "Student Free";
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-100 px-4 py-6 sm:px-6">
      {/* Top Navigation */}
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white">
            <BookOpen className="h-4 w-4" />
          </span>
          <span>
            NoteCraft <span className="text-green-600">AI</span>
          </span>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-green-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Split Card */}
      <div className="mx-auto my-8 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-300/60">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Panel: Green Diagonal Welcome Banner */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-green-600 px-8 py-12 text-white sm:px-10 md:min-h">
            {/* Diagonal Cut Overlay for Desktop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 hidden h-[140%] w-32 rotate-12 bg-white md:block"
            />

            <div className="relative z-10 max-w-xs">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                Plan: {selectedPlan}
              </span>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {isLogin ? "Welcome Back!" : "Welcome!"}
              </h1>

              <p className="mt-3 text-sm leading-relaxed text-green-50">
                {isLogin
                  ? "Log in to access your AI summaries, flashcards, and practice quizzes."
                  : "Create your account for free and turn messy lecture notes into exam-ready study decks."}
              </p>

              <button
                type="button"
                onClick={handleToggleMode}
                className="mt-7 rounded-full border-2 border-white px-7 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-green-700 cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="flex flex-col justify-center bg-white px-8 py-10 sm:px-12">
            {submitted ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  {isLogin ? "Signed In Successfully!" : "Account Created!"}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {isLogin
                    ? `Welcome back, ${formData.email}! Redirecting to your study dashboard.`
                    : `Your ${selectedPlan} workspace is ready for ${formData.email}.`}
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-block w-full rounded-full bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Go to Home Page
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-800">
                  {isLogin ? "Login" : "Create Account"}
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  {isLogin
                    ? "Enter your credentials to continue"
                    : `Get started with your ${selectedPlan} plan`}
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  {/* Name Field (Sign Up Only) */}
                  {!isLogin && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                      />
                      {errors.name && <p className="mt-1 pl-3 text-xs text-rose-600">{errors.name}</p>}
                    </div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Email address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.email && (
                      <p className="mt-1 pl-3 text-xs text-rose-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="mt-1.5 w-full rounded-full border border-slate-300 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                    {errors.password && (
                      <p className="mt-1 pl-3 text-xs text-rose-600">{errors.password}</p>
                    )}
                  </div>

                  {/* Pill Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full border-2 border-green-600 bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 hover:border-green-700 cursor-pointer"
                  >
                    {isLogin ? "Sign In" : "Create Account"}
                  </button>

                  
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500">
        @ {new Date().getFullYear()} | NoteCraft AI. All rights reserved.
      </p>
    </div>
  );
}