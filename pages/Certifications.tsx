
import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import { ShieldCheck, Award, CheckCircle2, FileText, ExternalLink, X, Info, Settings } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Certification } from '../types';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClose = () => {
    setSelectedCert(null);
    setActiveSlide(0);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Certifications & Standards de Qualité | SCIM Cameroun"
        description="La SCIM s'engage pour l'excellence à travers des certifications internationales : ISO 9001, ISO 45001, ASME, API. Découvrez nos standards de qualité et de sécurité."
      />
      
      {/* Hero Section */}
      <div className="bg-slate-900 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[160px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700 rounded-full blur-[120px] -ml-32 -mb-32"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Engagement Qualité
            </span>
            <div className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none overflow-hidden flex flex-wrap gap-x-4">
              <TextReveal text="Standards &" delay={0.2} />
              <span className="text-orange-500"><TextReveal text="Accréditations" delay={0.4} /></span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-slate-400 text-xl font-light leading-relaxed border-l-4 border-orange-600 pl-6"
            >
              Notre rigueur technique est validée par les plus hautes instances internationales pour garantir la sécurité et la fiabilité de vos infrastructures industrielles.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row gap-10 group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                  <div className="h-32 w-32 bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:shadow-lg transition-all duration-500 grayscale group-hover:grayscale-0">
                    <img 
                      src={cert.logoUrl} 
                      alt={cert.name} 
                      aria-label={`Logo officiel de la certification ${cert.name}`}
                      className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-all" 
                    />
                  </div>
                  <div className="mt-6 flex items-center text-[10px] font-black text-orange-600 uppercase tracking-widest bg-orange-50 px-4 py-2 rounded-full">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Certifié
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none group-hover:text-orange-600 transition-colors">
                      {cert.name}
                    </h2>
                    <Award className="w-6 h-6 text-slate-200 group-hover:text-orange-500 transition-colors" />
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-50">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Impact Opérationnel</h4>
                    <div className="flex items-start text-slate-700 text-[11px] font-black uppercase tracking-tight">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 shrink-0" />
                      Conformité aux exigences réglementaires
                    </div>
                    <div className="flex items-start text-slate-700 text-[11px] font-black uppercase tracking-tight">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 shrink-0" />
                      Maîtrise des risques industriels
                    </div>
                  </div>

                  <div className="pt-6 flex flex-wrap gap-4">
                    <MagneticButton>
                      <button 
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center bg-slate-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-slate-950/10 hover:shadow-orange-600/20"
                      >
                        <Info className="w-4 h-4 mr-2" />
                        En savoir plus
                      </button>
                    </MagneticButton>
                    <MagneticButton>
                      <button className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-orange-600 transition-colors group/btn h-full px-4">
                        <FileText className="w-4 h-4 mr-2" />
                        Consulter <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </button>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-orange-600 hover:text-white transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 overflow-y-auto">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 shrink-0">
                    <img src={selectedCert.logoUrl} alt={selectedCert.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
                      {selectedCert.name}
                    </h3>
                    <div className="flex items-center text-[10px] font-black text-orange-600 uppercase tracking-widest">
                      <ShieldCheck className="w-3 h-3 mr-2" />
                      Standard International
                    </div>
                  </div>
                </div>

                {/* Tabs / Carousel Navigation */}
                <div className="flex border-b border-slate-100 mb-8">
                  <button 
                    onClick={() => setActiveSlide(0)}
                    className={`flex-1 pb-4 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeSlide === 0 ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    Signification
                    {activeSlide === 0 && (
                      <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
                    )}
                  </button>
                  <button 
                    onClick={() => setActiveSlide(1)}
                    className={`flex-1 pb-4 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeSlide === 1 ? 'text-orange-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    Processus
                    {activeSlide === 1 && (
                      <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
                    )}
                  </button>
                </div>

                <div className="relative min-h-[200px]">
                  <AnimatePresence mode="wait">
                    {activeSlide === 0 ? (
                      <motion.section
                        key="meaning"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h4 className="flex items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                          <Info className="w-4 h-4 mr-2 text-orange-500" />
                          Signification de la norme
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium italic opacity-70">
                          {selectedCert.meaning || "Informations à venir."}
                        </p>
                      </motion.section>
                    ) : (
                      <motion.section
                        key="process"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h4 className="flex items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                          <Settings className="w-4 h-4 mr-2 text-orange-500" />
                          Processus d'obtention
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium italic opacity-70">
                          {selectedCert.process || "Informations à venir."}
                        </p>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setActiveSlide(0)}
                      className={`w-2 h-2 rounded-full transition-all ${activeSlide === 0 ? 'bg-orange-600 w-6' : 'bg-slate-200'}`}
                      aria-label="Slide 1"
                    />
                    <button 
                      onClick={() => setActiveSlide(1)}
                      className={`w-2 h-2 rounded-full transition-all ${activeSlide === 1 ? 'bg-orange-600 w-6' : 'bg-slate-200'}`}
                      aria-label="Slide 2"
                    />
                  </div>
                  <button 
                    onClick={handleClose}
                    className="bg-slate-100 text-slate-900 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quality Policy Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Politique QHSE</h2>
              <div className="overflow-hidden mb-10">
                <TextReveal text="Zéro Incident," className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]" delay={0.1} />
                <div className="text-white/40"><TextReveal text="Qualité Totale." className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]" delay={0.3} /></div>
              </div>
              <div className="space-y-8">
                {[
                  { title: "Sécurité", desc: "La protection de nos collaborateurs et des installations est notre priorité absolue sur chaque chantier." },
                  { title: "Environnement", desc: "Optimisation de la gestion des déchets métalliques et réduction de l'empreinte carbone." },
                  { title: "Rigueur", desc: "Application systématique des codes de calcul Eurocodes et ASME pour chaque ouvrage." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-orange-500 font-black">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200" 
                  alt="Contrôle Qualité SCIM" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-orange-600 p-12 rounded-[2.5rem] shadow-2xl">
                <span className="text-white text-5xl font-black block leading-none">100%</span>
                <p className="text-white text-[10px] uppercase font-black tracking-widest mt-2">Conformité Audit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Auditeures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-4">Organismes de Contrôle</h2>
            <p className="text-2xl font-black text-slate-950 uppercase tracking-tighter">Partenaires de Validation</p>
          </div>
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <span className="text-xl font-black uppercase tracking-[0.4em]">Bureau Veritas</span>
             <span className="text-xl font-black uppercase tracking-[0.4em]">SGS</span>
             <span className="text-xl font-black uppercase tracking-[0.4em]">Apave</span>
             <span className="text-xl font-black uppercase tracking-[0.4em]">Anor</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
