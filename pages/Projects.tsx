import React, { useState, useMemo, useEffect } from 'react';
import { PROJECTS_DATA } from '../constants';
import { MapPin, Calendar, Images, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const HEADER_IMAGES = [
  '/media/photos/projets/neo-industrie/neo-11.jpg',
  '/media/photos/projets/sht-tchad/sht-01.jpg',
  '/media/photos/projets/touristique-ndogssibi/ndog-01.jpg',
  '/media/photos/projets/nestle-cameroun/nestle-01.jpg',
  '/media/photos/projets/acc-kribi/acc-01.jpg'
];

// Sub-component for individual project galleries
const ProjectGallery: React.FC<{ project: any }> = ({ project }) => {
  const allImages = useMemo(() => {
    return project.gallery 
      ? [project.imageUrl, ...project.gallery] 
      : [project.imageUrl];
  }, [project]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Project Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-6 border-b border-white/5">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-orange-600/10 text-orange-500 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-orange-500/20">
              {project.category}
            </span>
            <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-orange-600" />
              {project.location}
            </div>
            <div className="flex items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-orange-600" />
              {project.year}
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            {project.title}
          </h3>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2 bg-white/5 backdrop-blur-sm text-slate-400 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl border border-white/10">
          <Images className="w-4 h-4 text-orange-500" />
          {allImages.length} Photos
        </div>
      </div>

      {/* Main Image + Thumbnails System */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Featured Main Image */}
        <div className="flex-1 relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-3xl border border-white/10 group cursor-zoom-in bg-slate-900" onClick={() => setIsLightboxOpen(true)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={allImages[activeIndex]}
              alt={`${project.title} - Main View`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-6 right-6 p-4 rounded-full bg-orange-600 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl shadow-orange-600/40">
            <Maximize2 className="w-6 h-6" />
          </div>
        </div>

        {/* Thumbnails Sidebar/Bottom */}
        <div className="lg:w-48 xl:w-64 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto pb-4 lg:pb-0 scrollbar-hide lg:max-h-[500px]">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-32 lg:w-full aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === i 
                  ? 'border-orange-600 scale-[0.98] shadow-lg shadow-orange-600/20' 
                  : 'border-white/5 opacity-50 hover:opacity-100 hover:border-white/20'
              }`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              {activeIndex === i && (
                <div className="absolute inset-0 bg-orange-600/10 backdrop-blur-[2px]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-4 md:p-12"
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-20"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="relative w-full max-w-6xl aspect-[16/9] flex items-center justify-center">
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length); }}
                className="absolute left-0 z-10 p-4 text-white/50 hover:text-orange-500 transition-colors"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              
              <motion.img
                key={activeIndex}
                src={allImages[activeIndex]}
                alt="Full Preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full object-contain"
              />

              <button 
                onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev + 1) % allImages.length); }}
                className="absolute right-0 z-10 p-4 text-white/50 hover:text-orange-500 transition-colors"
              >
                <ChevronRight className="w-12 h-12" />
              </button>

              <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 text-white/60 font-black text-xs uppercase tracking-[0.3em]">
                {activeIndex + 1} / {allImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['Tous', 'Construction Métallique', 'Chaudronnerie', 'Tuyauterie', 'Maintenance', 'Industrie'];

  const filteredProjects = useMemo(() => {
    return filter === 'Tous'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p: any) => p.category === filter);
  }, [filter]);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
  };

  // Slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HEADER_IMAGES.length);
    }, 5500); // Match Homepage slider timing
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HEADER_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HEADER_IMAGES.length) % HEADER_IMAGES.length);

  return (
    <div className="bg-[#060d16] min-h-screen text-slate-100 selection:bg-orange-600/30">
      <SEO
        title="Nos Réalisations | Portfolio de Projets Métalliques au Cameroun"
        description="Explorez les projets marquants de la SCIM : hangars industriels, réseaux de tuyauterie, maintenance offshore et chaudronnerie lourde à travers le Cameroun."
      />

      {/* Hero Header Slider */}
      <div className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Slider - Fully Visible */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={HEADER_IMAGES[currentSlide]} 
                alt="Background Slide" 
                className="w-full h-full object-cover scale-100 animate-slow-pan"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Overlays - Minimal for Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d16]/40 via-transparent to-slate-950/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />

        {/* Content Section - With Dedicated Text Blur Box */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* The Text Blur Overlay Box */}
            <div 
              className="relative inline-block p-8 md:p-12 rounded-2xl overflow-hidden backdrop-blur-[10px] bg-slate-950/25 border border-white/10"
              style={{
                maskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 70%, transparent 100%)'
              }}
            >
              <div className="space-y-6 md:space-y-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-px w-12 bg-orange-600" />
                  <span className="text-orange-500 text-[11px] font-black uppercase tracking-[0.5em]">
                    Portfolio Industriel
                  </span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] flex flex-col">
                  <span className="flex flex-wrap gap-x-4">
                    <TextReveal text="Nos" delay={0.6} />
                    <span className="text-orange-600"><TextReveal text="Grands" delay={0.7} /></span>
                  </span>
                  <TextReveal text="Projets" delay={0.8} />
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="text-slate-300 text-xl font-light border-l-4 border-orange-600 pl-8 max-w-xl leading-relaxed"
                >
                  Une démonstration de notre rigueur technique à travers les chantiers les plus stratégiques de la sous-région.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slider Navigation Controls */}
        <div className="absolute bottom-12 right-8 md:right-20 flex items-center gap-6 z-30">
          <div className="flex gap-3">
            {HEADER_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-700 rounded-full ${
                  currentSlide === i ? 'w-12 bg-orange-600' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-orange-600 hover:border-orange-600 transition-all backdrop-blur-md group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-orange-600 hover:border-orange-600 transition-all backdrop-blur-md group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mr-4">Filtrer par expertise :</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  filter === cat
                    ? 'bg-orange-600 border-orange-600 text-white shadow-xl shadow-orange-600/30 scale-105'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-orange-500/50 hover:text-orange-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-40 md:space-y-64"
            >
              {filteredProjects.map((project: any) => (
                <ProjectGallery key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-40 bg-white/5 rounded-[4rem] border border-white/10">
              <Images className="w-16 h-16 text-slate-700 mx-auto mb-6 opacity-50" />
              <p className="text-slate-500 text-2xl font-light italic uppercase tracking-widest">
                Aucun projet répertorié pour cette expertise.
              </p>
            </div>
          )}

          <div className="mt-40 pt-12 border-t border-white/5 text-center text-slate-600 text-[11px] font-black uppercase tracking-[0.5em]">
            Catalogue Industriel • SCIM Cameroun
          </div>
        </div>
      </section>

      {/* Clients Banner */}
      <section className="bg-slate-950 py-32 border-t border-white/5 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-20">Partenaires Stratégiques</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          >
            {['SNH', 'ALUCAM', 'SONARA', 'CAMWATER', 'E NEO'].map((client) => (
              <span key={client} className="font-black text-4xl md:text-5xl text-white tracking-tighter hover:text-orange-500 transition-colors cursor-default select-none">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
