import { useState } from "react";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { Navbar } from "./components/layout/Navbar";
import { MobileDrawer } from "./components/layout/MobileDrawer";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Journey } from "./components/sections/Journey";
import { Portfolio } from "./components/sections/Portfolio";
import { ItPortfolio } from "./components/sections/ItPortfolio";
import { InterestsSection } from "./components/sections/InterestsSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink antialiased">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <Navbar onOpenMenu={() => setMenuOpen(true)} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <ErrorBoundary><Hero /></ErrorBoundary>
        <ErrorBoundary><About /></ErrorBoundary>
        <ErrorBoundary><Journey /></ErrorBoundary>
        <ErrorBoundary><Portfolio /></ErrorBoundary>
        <ErrorBoundary><ItPortfolio /></ErrorBoundary>
        <ErrorBoundary><InterestsSection /></ErrorBoundary>
        <ErrorBoundary><ContactSection /></ErrorBoundary>
      </main>

      <ErrorBoundary><Footer /></ErrorBoundary>
    </div>
  );
}
