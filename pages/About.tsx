import React from 'react';
import { Target, Eye, ShieldCheck, HardHat, Award, Globe, Factory, Users } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import TextReveal from '../components/TextReveal';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="À Propos de la SCIM | Expertise Panafricaine en Métallurgie"
        description="Découvrez l'histoire, la vision et l'expertise de la Société Camerounaise des Ingénieries Métalliques. Plus de 20 ans d'expérience au service de l'industrie."
      />
      {/* Header Institutionnel */}
      <div className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-orange-500 text-[11px] font-black uppercase tracking-[0.5em] mb-6 block"
          >
            Institutionnel
          </motion.span>
          <div className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none overflow-hidden">
            <TextReveal text="Société Camerounaise des" delay={0.2} />
            <div className="text-orange-600"><TextReveal text="Ingénieries Métalliques" delay={0.4} /></div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-400 text-xl font-light border-l-4 border-orange-600 pl-8 max-w-3xl leading-relaxed"
          >
            Une jeune entreprise dynamique issue de plus de 20 ans d'expertise panafricaine.
          </motion.p>
        </div>
      </div>

      {/* Histoire & Vision */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="border-b-4 border-orange-600 pb-6 w-fit overflow-hidden">
                <TextReveal text="Notre Genèse" className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter" />
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  La Société Camerounaise des Ingénieries Métallique (SCIM) est le fruit d'une association d'ingénieurs Camerounais et Ivoiriens cumulant une forte expérience de plus de 20 ans aux services de l'Afrique.
                </p>
                <p>
                  Située à Douala dans la zone portuaire, SCIM est une entreprise de droit camerounais qui s'impose par son professionnalisme et sa capacité à répondre aux standards internationaux les plus exigeants.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Notre Personnel Qualifié</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "Ingénieurs",
                        "Chargés d'affaire",
                        "Conducteurs des travaux",
                        "Préparateurs des travaux",
                        "Chaudronniers qualifiés",
                        "Tuyauteurs qualifiés",
                        "Soudeurs homologués",
                        "Monteurs"
                    ].map((role, i) => (
                        <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                            {role}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img
                src="/media/photos/584052925_122202054980362897_3110282139319874516_n.jpg"
                alt="Équipe SCIM sur chantier"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px] hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute -bottom-10 -left-10 bg-orange-600 p-10 rounded-[2rem] shadow-2xl hidden xl:block">
                <Users className="text-white w-10 h-10 mb-2" />
                <p className="text-white font-black text-xl">Expertise <br/>Panafricaine</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs - Mission - Vision */}
      <section className="py-32 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Target className="w-10 h-10" />, 
                title: "Rigueur", 
                text: "Une exécution précise de tous les travaux confiés, respectant scrupuleusement les cahiers des charges." 
              },
              { 
                icon: <Eye className="w-10 h-10" />, 
                title: "Professionnalisme", 
                text: "Un personnel homologué et qualifié (soudeurs, tuyauteurs, monteurs) pour chaque type d'intervention." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10" />, 
                title: "Sécurité", 
                text: "Application stricte des normes de sécurité industrielle sur nos chantiers et dans nos ateliers." 
              }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group">
                <div className="bg-orange-600/20 text-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">{card.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed font-medium transition-colors">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
