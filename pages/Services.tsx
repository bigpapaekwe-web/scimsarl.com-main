import React, { useState } from 'react';
import { SERVICES_DATA, getIcon } from '../constants';
import { ArrowRight, CheckCircle2, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

const Services: React.FC = () => {
  const [lightboxData, setLightboxData] = useState<{ url: string; title: string } | null>(null);

  const closeLightbox = () => setLightboxData(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Nos Services Industriels | Construction & Maintenance Métallique"
        description="Découvrez nos solutions en construction métallique, chaudronnerie, tuyauterie et maintenance industrielle au Cameroun. Expertise certifiée et précision technique."
      />
      {/* Page Header */}
      <div className="bg-slate-900 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[160px] -mr-48 -mt-48 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700 rounded-full blur-[120px] -ml-32 -mb-32"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              Expertise Technique
            </span>
            <div className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none overflow-hidden">
              <TextReveal text="Nos Solutions" delay={0.2} />
              <div className="text-orange-500"><TextReveal text="Industrielles" delay={0.4} /></div>
            </div>
            <p className="text-slate-400 text-xl font-light leading-relaxed border-l-4 border-orange-600 pl-6">
              Une ingénierie de précision pour répondre aux exigences critiques de l'industrie lourde, de l'énergie et des infrastructures au Cameroun.
            </p>
          </div>
        </div>
      </div>

      {/* Services Card Grid */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden transition-all duration-500 group flex flex-col hover:-translate-y-3"
              >
                {/* Main Service Image with Subtle Zoom */}
                <div
                  className="relative h-60 overflow-hidden cursor-zoom-in group/mainimg"
                  onClick={() => setLightboxData({ url: service.imageUrl, title: service.title })}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-[1500ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover/mainimg:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8" />
                  </div>
                  <div className="absolute bottom-6 left-6 flex items-center">
                    <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      {getIcon(service.icon)}
                    </div>
                    <div className="ml-4">
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none mb-1">Pôle Expertise</p>
                      <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none">
                        {service.title.split(' ')[0]}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm line-clamp-3">
                    {service.description}
                  </p>

                  {/* Gallery context for specific industrial elements */}
                  {service.galleryImages && (
                    <div className="mb-8">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                        <span className="w-8 h-[1px] bg-slate-200 mr-3"></span> Focus Structurel
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {service.galleryImages.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setLightboxData({ url: img, title: `${service.title} - Détail ${idx + 1}` })}
                            className="aspect-square rounded-xl overflow-hidden border border-slate-100 bg-slate-100 group/img relative cursor-zoom-in"
                          >
                            <img
                              src={img}
                              alt={`${service.title} detail ${idx}`}
                              className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 group-hover/img:scale-125 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                              <Maximize2 className="text-white w-5 h-5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Specs */}
                  <div className="mt-auto pt-8 border-t border-slate-50">
                    <div className="space-y-3 mb-8">
                      {service.solutions.slice(0, 3).map((sol, i) => (
                        <div key={i} className="flex items-start text-slate-700 text-[11px] font-black uppercase tracking-tight">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 shrink-0" />
                          {sol}
                        </div>
                      ))}
                    </div>

                    <MagneticButton>
                      <Link
                        to="/contact"
                        className="w-full flex items-center justify-center bg-orange-600 text-white p-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-[0_0_40px_rgba(234,88,12,0.4)]"
                      >
                        <span className="relative z-10 flex items-center">
                          Demander une étude
                          <ArrowRight className="w-4 h-4 ml-3" />
                        </span>
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Ingénierie de Projet</h2>
              <div className="overflow-hidden">
                 <TextReveal text="Notre protocole de livraison" className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none" />
              </div>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-light leading-relaxed">
              De l'audit initial sur site à la réception finale des ouvrages, nous appliquons un cadre méthodologique certifié pour chaque tonne d'acier transformée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic", desc: "Expertise terrain et définition rigoureuse des notes de calcul." },
              { step: "02", title: "Modélisation", desc: "Conception BIM & CAO 3D pour une précision sans faille." },
              { step: "03", title: "Fabrication", desc: "Usinage et soudage en atelier sous environnement contrôlé." },
              { step: "04", title: "Déploiement", desc: "Levage et montage final par nos équipes spécialisées." }
            ].map((p, i) => (
              <div key={i} className="relative group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white hover:text-slate-950 transition-all duration-500">
                <span className="text-7xl font-black text-white/5 absolute -top-4 right-4 group-hover:text-orange-600/10 transition-colors">
                  {p.step}
                </span>
                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight border-b border-orange-600/30 pb-4">{p.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-600 text-sm font-medium leading-relaxed relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner / Metrics */}
      <section className="py-24 bg-[#0d1b2a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20">
            <div className="text-center mb-16">
              <h2 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.5em] mb-4">Standard de Qualité</h2>
              <p className="text-2xl font-black text-white uppercase tracking-tighter">Capacité Technique Annuelle</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-3">
                <span className="text-5xl font-black text-orange-500 block tracking-tighter">2500T</span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-600/20 px-3 py-1 rounded-full">Acier Transformé</span>
              </div>
              <div className="space-y-3">
                <span className="text-5xl font-black text-orange-500 block tracking-tighter">100%</span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-600/20 px-3 py-1 rounded-full">Calculs Eurocodes</span>
              </div>
              <div className="space-y-3">
                <span className="text-5xl font-black text-orange-500 block tracking-tighter">24/7</span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-600/20 px-3 py-1 rounded-full">Maintenance Site</span>
              </div>
              <div className="space-y-3">
                <span className="text-5xl font-black text-orange-500 block tracking-tighter">80+</span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest bg-orange-600/20 px-3 py-1 rounded-full">Experts Techniques</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={closeLightbox}
          >
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
              <div className="flex flex-col">
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Visualisation Technique</span>
                <h3 className="text-white text-lg font-black uppercase tracking-tight">{lightboxData.title}</h3>
              </div>
              <button
                className="text-white/50 hover:text-white transition-colors p-3 bg-white/5 rounded-full backdrop-blur-md hover:bg-white/10"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxData.url}
                alt={lightboxData.title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.5em]">SCIM - Excellence Industrielle</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
