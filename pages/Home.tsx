import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Ruler, X, Maximize2, Quote, ChevronRight, Play } from 'lucide-react';
import { SERVICES_DATA, PROJECTS_DATA, KEY_METRICS, CERTIFICATIONS_DATA, TESTIMONIALS_DATA, getIcon } from '../constants';
import SEO from '../components/SEO';
import VideoPlayer from '../components/VideoPlayer';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';

/* Logos SVG simplifiés des clients de référence pour la preuve sociale */
const CLIENT_LOGOS = [
  { name: 'SONARA', abbr: 'SONARA' },
  { name: 'SNH', abbr: 'SNH' },
  { name: 'ALUCAM', abbr: 'ALUCAM' },
  { name: 'NEO INDUSTRIE', abbr: 'NEO IND.' },
  { name: 'CAMWATER', abbr: 'CAMWATER' },
  { name: 'SGS Cameroun', abbr: 'SGS' },
];

const Home: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeLightbox = () => setLightboxImage(null);

  return (
    <div>
      <SEO
        title="Expert en Ingénierie Métallique & Industrie Lourde au Cameroun"
        description="La SCIM est le leader de la construction métallique, chaudronnerie et maintenance industrielle au Cameroun. Découvrez nos solutions techniques certifiées."
      />

      {/* ─── Section 1 : Héros ─── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <VideoPlayer variant="background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-500 text-[11px] font-black uppercase tracking-[0.4em] mb-8"
            >
              Expert de référence au Cameroun
            </motion.span>
            <div className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 uppercase tracking-tighter overflow-hidden">
              <TextReveal text="Ingénierie Métallique &" delay={0.2} />
              <div className="text-orange-600"><TextReveal text="Industrie Lourde" delay={0.5} /></div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 font-light max-w-2xl leading-relaxed border-l-4 border-orange-600 pl-8"
            >
              La SCIM conçoit, fabrique et déploie les infrastructures critiques pour les secteurs pétrolier, minier et BTP au Cameroun.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group relative overflow-hidden bg-orange-600 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center transition-all shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_rgba(249,115,22,0.6)]"
                >
                  <span className="relative z-10 flex items-center">
                    Demander une étude technique <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/services"
                  className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center transition-all"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-4 h-4 mr-3 fill-white" /> Nos pôles d'expertise
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Barre de preuve sociale — clients de référence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 z-10 bg-slate-950/70 backdrop-blur-md border-t border-white/5 py-5 px-4"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] whitespace-nowrap shrink-0">
              Ils nous font confiance
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-2 items-center">
              {CLIENT_LOGOS.map((client) => (
                <span
                  key={client.name}
                  title={client.name}
                  className="text-[11px] font-black text-white/30 hover:text-orange-500 uppercase tracking-widest transition-colors duration-300 cursor-default"
                >
                  {client.abbr}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-slate-950 text-white py-16 border-y border-slate-900 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {KEY_METRICS.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="text-5xl font-black text-white tracking-tighter">
                  <AnimatedCounter value={parseInt(metric.value, 10) || 0} suffix={metric.value.replace(/\d+/g, '')} />
                </div>
                <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-orange-500">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2 : Présentation Institutionnelle ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/welder.png"
                  alt="Soudeur SCIM au travail — étincelles et précision industrielle"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge cohérent avec KEY_METRICS */}
              <div className="absolute -bottom-10 -right-10 bg-orange-600 p-12 rounded-[2.5rem] shadow-2xl hidden md:block">
                <span className="text-white text-6xl font-black block leading-none">20+</span>
                <p className="text-white text-xs uppercase font-black tracking-widest mt-2">Ans de Savoir-faire</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-6 flex items-center">
                  <span className="w-12 h-[2px] bg-orange-600 mr-4"></span> Profil Entreprise
                </h2>
                <div className="mb-8">
                  <TextReveal text="L'excellence technique au service des projets d'envergure" className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter leading-[1.1]" />
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Depuis plus de 20 ans, la Société Camerounaise des Ingénieries Métalliques (SCIM) s'impose comme un acteur incontournable de l'industrie lourde. Notre mission est d'accompagner la croissance industrielle par des infrastructures métalliques fiables et conformes aux standards internationaux (Eurocodes, ASME).
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Ruler className="w-5 h-5" />, text: "Bureau d'études & Calcul 3D" },
                  { icon: <ShieldCheck className="w-5 h-5" />, text: "Sécurité & Normes HSE" },
                  { icon: <Factory className="w-5 h-5" />, text: "Ateliers de Fabrication Certifiés" },
                  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Intervention sur site 24/7" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-900 font-black uppercase text-[10px] tracking-widest">
                    <div className="bg-slate-50 p-3 rounded-xl mr-4 text-orange-600 shadow-sm border border-slate-100">
                      {item.icon}
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <Link
                to="/a-propos"
                className="inline-flex items-center text-orange-600 font-black uppercase text-xs tracking-[0.2em] group"
              >
                Découvrir notre vision institutionnelle <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 3 : Nos Domaines d'Intervention ─── */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-6">Nos Domaines d'Intervention</h2>
            <div className="flex justify-center">
              <TextReveal text="Expertise Technique Complète" className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 text-center" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div
                  className="relative h-48 w-full mb-8 rounded-2xl overflow-hidden shadow-md cursor-zoom-in"
                  onClick={() => setLightboxImage(service.imageUrl)}
                >
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                  </div>
                  <div className="absolute top-4 left-4 bg-slate-950 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 z-10">
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-950 group-hover:text-orange-600 transition-colors relative z-10">
                  {service.title}
                </h4>
                <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm relative z-10">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center text-slate-400 font-black uppercase text-[10px] tracking-widest group-hover:text-orange-600 transition-colors relative z-10"
                >
                  Détails techniques <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Barre de certifications */}
          <div className="mt-24 pt-16 border-t border-slate-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xs text-center md:text-left">
                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Standards Internationaux</h5>
                <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">Nos processus sont audités et certifiés par les organismes leaders.</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                {CERTIFICATIONS_DATA.slice(0, 5).map((cert) => (
                  <div key={cert.id} className="group relative" title={cert.name}>
                    <img
                      src={cert.logoUrl}
                      alt={cert.name}
                      className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[8px] font-black text-orange-600 uppercase tracking-widest">{cert.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4 : Témoignages Clients ─── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-6">Références Clients</h2>
              <TextReveal text="Ce qu'ils disent de la SCIM" className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950" />
            </div>
            <Link to="/a-propos" className="bg-slate-950 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shrink-0">
              Notre histoire
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] z-10"
              >
                {/* Icône guillemet décorative */}
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl shadow-orange-600/30 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="text-white w-6 h-6" />
                </div>

                <p className="text-slate-600 group-hover:text-slate-900 italic text-base leading-relaxed mb-8 font-light transition-colors relative z-10">
                  « {testimonial.quote} »
                </p>

                {/* Évaluation étoiles */}
                <div className="flex gap-1 mb-6" role="img" aria-label="Note : 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      initial={{ opacity: 0, scale: 0 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="text-orange-500 text-sm drop-shadow-sm" 
                      aria-hidden="true"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center border-t border-slate-100 group-hover:border-orange-100 pt-6 transition-colors">
                  <div className="relative w-14 h-14 mr-4">
                    <div className="absolute inset-0 bg-orange-600 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="relative w-full h-full rounded-full object-cover border-2 border-orange-600 shadow-md group-hover:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <h4 className="text-slate-950 font-black uppercase text-[11px] tracking-widest leading-none mb-1.5">
                      {testimonial.name}
                    </h4>
                    <p className="text-orange-600 text-[9px] font-bold uppercase tracking-widest">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aperçu des 3 témoignages restants en version compacte */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS_DATA.slice(3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-600 shrink-0"
                />
                <div>
                  <p className="text-slate-900 font-black uppercase text-[9px] tracking-widest leading-none mb-1">{testimonial.name}</p>
                  <p className="text-slate-500 text-[9px] font-medium uppercase tracking-wide">{testimonial.company}</p>
                </div>
                <div className="ml-auto flex gap-0.5" role="img" aria-label="Note : 5 étoiles sur 5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-[8px]" aria-hidden="true">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5 : Réalisations Marquantes ─── */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-[11px] font-black text-orange-600 uppercase tracking-[0.5em] mb-6">Réalisations</h2>
              <TextReveal text="Réalisations Marquantes" className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950" />
            </div>
            <Link to="/realisations" className="bg-slate-950 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-xl shrink-0">
              Voir tout le portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {PROJECTS_DATA.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index === 1 ? 'md:col-span-2 md:row-span-1' :
                  'md:col-span-1 md:row-span-1'
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] font-black text-white bg-orange-600 px-3 py-1 rounded-full uppercase tracking-[0.3em] mb-4 inline-block shadow-lg">{project.category}</span>
                  <h4 className="text-white text-2xl font-black uppercase tracking-tight leading-tight mb-2">{project.title}</h4>
                  <div className="flex items-center text-slate-300 text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="w-4 h-[1px] bg-orange-500 mr-2"></span> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6 : Certifications & Accréditations ─── */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-black text-orange-500 uppercase tracking-[0.5em] mb-6">Qualité & Sécurité</h2>
            <div className="flex justify-center">
              <TextReveal text="Certifications & Accréditations" className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-600/5"
              >
                <div className="h-20 w-full mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={cert.logoUrl}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-orange-500 group-hover:translate-x-1 transition-transform">{cert.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
            <span className="text-xs font-black uppercase tracking-[0.4em]">Bureau Veritas</span>
            <span className="text-xs font-black uppercase tracking-[0.4em]">SGS Certified</span>
            <span className="text-xs font-black uppercase tracking-[0.4em]">Apave</span>
          </div>
        </div>
      </section>

      {/* ─── Section 7 : Vidéo de Présentation ─── */}
      <VideoPlayer
        variant="player"
        title="SCIM en action"
        description="Découvrez nos équipes et nos réalisations industrielles au Cameroun."
      />

      {/* ─── Section 8 : Appel à l'Action ─── */}
      <section className="bg-orange-600 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] border-[40px] border-orange-500/30 rounded-full pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] border-[20px] border-white/10 rounded-full pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8 flex justify-center">
              <TextReveal text="Un projet industriel complexe ?" className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-xl text-center" />
            </div>
            <p className="text-orange-100 text-xl md:text-2xl mb-14 max-w-3xl mx-auto font-light leading-relaxed">
              Notre bureau d'études qualifie votre besoin sous 48h. Profitez de l'expertise locale certifiée SCIM pour vos infrastructures.
            </p>
            <MagneticButton>
              <Link
                to="/contact"
                className="group relative overflow-hidden bg-slate-950 hover:bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all inline-flex items-center shadow-2xl hover:shadow-[0_0_40px_rgba(15,23,42,0.6)]"
              >
                <span className="relative z-10 flex items-center">
                  Soumettre un cahier des charges <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ─── Lightbox Modal ─── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 md:p-10"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-3 bg-white/5 rounded-full backdrop-blur-md"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Détail industriel SCIM"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
