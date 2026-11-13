# NoteCraft AI — Smart Study & Note-Taking Assistant

A responsive SaaS landing page built for the **Sankar Group Front-End Development Internship Assignment**. **NoteCraft AI** helps students and learners transform raw lecture notes and PDFs into structured summaries, active-recall flashcards, and interactive self-test quizzes.

## Live Demo & Screenshots

* **Live Website:** `[Insert your deployed Vercel/Netlify URL here]`

* **Screenshots:** Located in the `/screenshots` directory (desktop hero, interactive preview, and mobile responsive views).

## Technologies Used

* **React 19** — Component-based UI architecture using functional components and React Hooks (`useState`).

* **React Router (`react-router-dom`)** — Client-side routing between the main landing page (`/`) and the dedicated Sign Up / Login page (`/signup`) with query-parameter plan selection.

* **Tailwind CSS** — Utility-first styling for responsive grids, typography, spacing, and custom split-screen diagonal layouts.

* **Lucide React** — Crisp, lightweight SVG iconography across feature cards, navigation, and form states.

* **Vite** — Fast development server and optimized production bundler.

## Key Features Implemented

* **Responsive Navigation Bar:** Sticky header with smooth-scroll section links, a mobile hamburger menu toggle, and direct routing to the sign-up flow.

* **Hero Section with Coded UI Preview:** Highlights the core value proposition alongside a miniature "Raw Lecture Notes $\rightarrow$ Generated Flashcard" transformation preview.

* **Interactive "How It Works" Demo Switcher:** Tabbed preview allowing visitors to switch live between *Raw Lecture Notes*, *AI Summary*, and an interactive *Practice Quiz* with instant answer feedback.

* **Dynamic Pricing Comparison:** Side-by-side *Student Free* and *Pro Scholar* plans with a working Monthly/Yearly (25% savings) billing toggle and plan-aware CTA links.

* **Dedicated Split-Screen Auth Page (`/signup`):** Responsive diagonal split layout supporting both *Create Account* and *Sign In* modes with client-side validation and confirmation states.

* **Validated Demo Request Form:** Contact/Campus Demo form with real-time error messaging and a submission confirmation screen.

## Project Structure

```
notecraft-ai/
├── screenshots/              # Desktop and mobile layout captures
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky header & responsive mobile menu
│   │   ├── Hero.jsx          # Headline, CTAs & visual product preview
│   │   ├── Features.jsx      # 4-column feature cards
│   │   ├── HowItWorks.jsx    # 3-step guide + interactive tab switcher
│   │   ├── Pricing.jsx       # Billing toggle & pricing tier cards
│   │   ├── ContactSection.jsx# Validated demo request form
│   │   ├── SignupModal.jsx   # Split-screen Sign Up / Login page (/signup)
│   │   └── Footer.jsx        # Quick navigation & copyright footer
│   ├── data/
│   │   └── content.js        # Structured data for features, demo tabs, & pricing
│   ├── App.jsx               # Route definitions (LandingPage & SignupPage)
│   ├── index.css             # Tailwind CSS setup & smooth scrolling
│   └── main.jsx              # Application entry point
├── index.html
├── package.json
└── README.md

```

## Local Setup & Installation

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```
   git clone https://github.com/<your-username>/notecraft-ai.git
   cd notecraft-ai
   
   ```

2. **Install dependencies:**

   ```
   npm install
   
   ```

3. **Start the development server:**

   ```
   npm run dev
   
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` to view the application.

5. **Build for production (optional):**

   ```
   npm run build
   
   ```

## Design Choices & Challenges Solved

For **NoteCraft AI**, I chose a clean, high-contrast light palette (`slate-50` and `white` surfaces paired with `green-600` primary accents) to give the interface an approachable, academic feel while maintaining clear visual hierarchy. Instead of relying on static stock illustrations, I built interactive UI components—including a live tabbed note-to-quiz preview and a monthly/yearly pricing toggle—to demonstrate the product's core workflow directly on the page. One key challenge was transitioning the sign-up flow from an overlay modal into a standalone route (`/signup`) while preserving the user's selected pricing tier; I solved this using `react-router-dom` with URL query parameters (`useSearchParams`) and designed a responsive diagonal split-screen layout that stacks cleanly on mobile viewports.