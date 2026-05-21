import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import PageTransition from './components/PageTransition';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error — key est valide sur Routes pour forcer le remontage via AnimatePresence (React 19) */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/a-propos" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/realisations" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <Router>
        <ScrollToTop />
        <CustomCursor />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </SmoothScroll>
  );
};

export default App;
