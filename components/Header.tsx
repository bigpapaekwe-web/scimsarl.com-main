
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center relative z-[60]">
            <Link 
              to="/" 
              className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900 rounded-lg transition-all"
            >
              <span className="text-2xl font-bold tracking-tighter text-orange-500">SCIM</span>
              <span className="text-[10px] uppercase tracking-[0.2em] leading-none text-slate-400 font-medium">Ingénieries Métalliques</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`relative text-sm font-bold transition-all uppercase tracking-widest flex items-center py-2 px-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-8 focus-visible:ring-offset-slate-900 rounded-sm ${
                  isActive(link.path) ? 'text-orange-500' : 'text-slate-300 hover:text-white'
                }`}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.span>
                
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                  />
                )}
                
                {!isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-orange-600 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all group inline-flex items-center shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span className="relative z-10">Demander un devis</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center relative z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg p-2 bg-white/5 backdrop-blur-md border border-white/10 transition-all"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[50] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-900 z-[55] md:hidden shadow-2xl border-l border-white/5 flex flex-col"
            >
              <div className="flex-grow overflow-y-auto pt-24 pb-10 px-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        aria-current={isActive(link.path) ? 'page' : undefined}
                        className={`group flex items-center justify-between p-5 rounded-2xl text-lg font-black uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-inset ${
                          isActive(link.path) 
                            ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <span>{link.name}</span>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isActive(link.path) ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-slate-950/50">
                <Link
                  to="/contact"
                  className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center shadow-xl shadow-orange-600/20 active:scale-95 transition-all"
                >
                  Demander un devis
                </Link>
                <p className="text-center text-slate-500 text-[10px] uppercase tracking-widest mt-6 font-bold">
                  SCIM - Excellence Industrielle
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
