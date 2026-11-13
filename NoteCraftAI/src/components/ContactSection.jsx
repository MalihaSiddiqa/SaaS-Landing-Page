import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters.";
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left Info */}
        <div>
          <p className="text-sm font-semibold uppercase text-green-600">
            Request a Demo
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Bringing NoteCraft AI to your study group or campus?
          </h2>
          <p className="mt-4 text-slate-600">
            Have questions about student discounts, campus licenses, or feature requests? Send us a
            quick note and our team will respond within 24 hours.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-600" />
              <span>hello@notecraft-ai.example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
              <h3 className="mt-4 text-xl font-bold text-slate-900">Demo Request Received!</h3>
              <p className="mt-2 text-sm text-slate-600">
                Thanks for reaching out. We've sent a confirmation email with demo details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-800">Full Name</label>
                <input
                  type="text"
                  placeholder="Maliha Siddiqa"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800">Email Address</label>
                <input
                  type="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
                {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your coursework or demo needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
                {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                Request Demo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}