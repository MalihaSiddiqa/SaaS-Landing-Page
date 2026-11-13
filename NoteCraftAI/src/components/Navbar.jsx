import { useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 text-white">
            <BookOpen className="h-5 w-5" />
          </span>
          <span>
            NoteCraft <span className="text-green-600">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition p-2 hover:text-green-600 hover:border-b-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to='/signup?plan=Student%20Free'
            className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-700 hover:scale-110 cursor-pointer"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="rounded-lg p-2 text-slate-600 hover:bg-green-50 md:hidden cursor-pointer"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-900"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenModal("Student Free");
              }}
              className="mt-2 w-full rounded-lg bg-green-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-white hover:border-2 hover:border-green-600 hover:text-green-600 cursor-pointer"
            >
              Get Started Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}