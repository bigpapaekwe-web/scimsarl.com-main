import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Info, Factory, ChevronDown, Upload, FileImage, X, Banknote } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import TextReveal from '../components/TextReveal';

interface FormState {
  fullName: string;
  company: string;
  phoneNumber: string;
  email: string;
  sector: string;
  projectType: string;
  budget: string;
  description: string;
  projectFile: File | null;
}

interface FormErrors {
  fullName?: string;
  company?: string;
  phoneNumber?: string;
  email?: string;
  sector?: string;
  projectType?: string;
  budget?: string;
  description?: string;
}

const SECTOR_PROJECT_TYPES: Record<string, string[]> = {
  'Industrie / BTP': [
    'Charpente Métallique',
    'Hangar Industriel',
    'Bâtiment Commercial',
    'Passerelles & Escaliers',
    'Couverture & Bardage'
  ],
  'Mines & Énergie': [
    'Structures de Soutènement',
    'Convoyeurs & Manutention',
    'Tuyauterie Haute Pression',
    'Cuves de Stockage (Gros Volume)',
    'Plateformes Techniques'
  ],
  'Pétrole & Gaz': [
    'Tuyauterie API / Inox',
    'Skids de Process',
    'Réservoirs sous Pression',
    'Maintenance Offshore/Onshore',
    'Structures de Torches'
  ],
  'Agro-industrie': [
    'Cuverie Inox Alimentaire',
    'Réseaux de Fluides Process',
    'Châssis de Machines',
    'Silos de Stockage'
  ],
  'Autre': [
    'Fabrication Sur Mesure',
    'Expertise & Études Seules',
    'Maintenance Ponctuelle'
  ]
};

const BUDGET_RANGES = [
  'Moins de 10 Millions FCFA',
  '10 - 50 Millions FCFA',
  '50 - 200 Millions FCFA',
  '200 - 500 Millions FCFA',
  'Plus de 500 Millions FCFA',
  'Budget non défini / Étude de faisabilité'
];

const Contact: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    company: '',
    phoneNumber: '',
    email: '',
    sector: 'Industrie / BTP',
    projectType: '',
    budget: '',
    description: '',
    projectFile: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        return !value.trim() ? 'Le nom complet est requis.' : undefined;
      case 'company':
        return !value.trim() ? 'La raison sociale est requise.' : undefined;
      case 'phoneNumber':
        if (!value.trim()) return 'Le numéro de téléphone est requis.';
        if (!/^[+]?[\d\s()\-]{8,}$/.test(value.replace(/\s/g, '')) || value.replace(/\D/g, '').length < 8) return 'Format invalide (ex: +237 6...)';
        return undefined;
      case 'email':
        if (!value.trim()) return "L'adresse email est requise.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Adresse email invalide.';
        return undefined;
      case 'projectType':
        return !value ? "Le type d'ouvrage est requis." : undefined;
      case 'budget':
        return !value ? 'Une estimation budgétaire est requise.' : undefined;
      case 'description':
        if (!value.trim()) return 'Veuillez décrire votre projet.';
        if (value.trim().length < 10) return 'La description est trop courte.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate immediately if field was already touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData(prev => ({ ...prev, projectFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;

    const fieldsToValidate = ['fullName', 'company', 'phoneNumber', 'email', 'projectType', 'budget', 'description'];

    fieldsToValidate.forEach(field => {
      const value = formData[field as keyof FormState] as string;
      const error = validateField(field, value);
      if (error) {
        newErrors[field as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(fieldsToValidate.reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    if (!isValid) return;

    setIsSubmitting(true);
    // Simulation d'envoi API
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getInputClasses = (fieldName: keyof FormErrors, isSelect = false) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClasses = `w-full bg-white border rounded-xl px-5 py-4 text-slate-900 text-sm focus:ring-4 outline-none transition-all font-medium placeholder:text-slate-400 ${isSelect ? 'appearance-none cursor-pointer pr-12' : ''}`;

    if (hasError) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500/10`;
    }
    return `${baseClasses} border-slate-200 focus:border-orange-500 focus:ring-orange-500/10`;
  };

  const ErrorMessage = ({ field }: { field: keyof FormErrors }) => {
    if (touched[field] && errors[field]) {
      return (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mt-2 text-red-500 text-[10px] font-bold uppercase tracking-wide"
        >
          <AlertCircle className="w-3 h-3 mr-1.5" />
          {errors[field]}
        </motion.div>
      );
    }
    return null;
  };

  const labelClasses = "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3";

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-24 px-4">
        <div className="max-w-xl w-full text-center bg-white p-16 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-orange-100">
            <CheckCircle2 className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-950 mb-4 uppercase tracking-tighter">Dossier Transmis</h2>
          <p className="text-slate-600 mb-10 leading-relaxed font-light text-lg">
            Votre demande technique pour <strong>{formData.company}</strong> a été transmise à notre bureau d'études. Nous reviendrons vers vous sous 48h ouvrées.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                company: '',
                phoneNumber: '',
                email: '',
                sector: 'Industrie / BTP',
                projectType: '',
                budget: '',
                description: '',
                projectFile: null,
              });
              setErrors({});
              setTouched({});
            }}
            className="w-full bg-slate-950 hover:bg-slate-900 text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all shadow-xl active:scale-95"
          >
            Nouveau dossier
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <SEO
        title="Contactez Notre Bureau d'Études | Devis & Études Techniques"
        description="Soumettez votre projet industriel à la SCIM. Notre bureau d'études qualifie vos besoins en construction métallique et maintenance sous 48h au Cameroun."
      />
      <div className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none overflow-hidden">
              <TextReveal text="Bureau d'Études" delay={0.2} />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-slate-400 text-xl font-light border-l-4 border-orange-600 pl-8 leading-relaxed"
            >
              Soumettez votre cahier des charges. Nos ingénieurs qualifient votre projet industriel sous 48 heures.
            </motion.p>
          </div>
        </div>
      </div>

      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar Contact */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-12">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight border-b border-slate-100 pb-6">Assistance Technique</h2>

                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-slate-950 text-orange-500 rounded-2xl shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">Siège & Ateliers</h3>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-slate-950 text-orange-500 rounded-2xl shadow-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">Ligne Directe</h3>
                      <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} className="block text-slate-950 font-black text-lg tracking-tight hover:text-orange-600 transition-colors">{CONTACT_INFO.phones[0]}</a>
                      <a href={`tel:${CONTACT_INFO.phones[1].replace(/\s/g, '')}`} className="block text-slate-500 font-medium text-sm tracking-tight hover:text-orange-600 transition-colors">{CONTACT_INFO.phones[1]}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-slate-950 text-orange-500 rounded-2xl shadow-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-2">Bureau d'Études</h3>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 text-sm font-medium hover:text-orange-600 transition-colors break-all">{CONTACT_INFO.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600 p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <Factory className="absolute -right-8 -bottom-8 opacity-10 w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <Info className="w-8 h-8 mb-6" />
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">Calculs Eurocodes</h3>
                  <p className="text-orange-50 text-sm leading-relaxed font-light">
                    Chaque offre commerciale s'accompagne d'une pré-étude technique garantissant le respect des normes internationales de construction métallique.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire Principal */}
            <div className="lg:col-span-8">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-10" noValidate>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className={labelClasses}>Nom du Responsable <span className="text-orange-500">*</span></label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('fullName')}
                        placeholder="Paul BIYA"
                      />
                      <ErrorMessage field="fullName" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="company" className={labelClasses}>Raison Sociale (Entreprise) <span className="text-orange-500">*</span></label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('company')}
                        placeholder="Ex: SONARA SA"
                      />
                      <ErrorMessage field="company" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <label htmlFor="phoneNumber" className={labelClasses}>Téléphone Direct <span className="text-orange-500">*</span></label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('phoneNumber')}
                        placeholder="+237 6XX XXX XXX"
                      />
                      <ErrorMessage field="phoneNumber" />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className={labelClasses}>Email Professionnel <span className="text-orange-500">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('email')}
                        placeholder="contact@entreprise.cm"
                      />
                      <ErrorMessage field="email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-1">
                      <label htmlFor="sector" className={labelClasses}>Secteur d'Activité</label>
                      <div className="relative">
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className={getInputClasses('sector', true)}
                        >
                          {Object.keys(SECTOR_PROJECT_TYPES).map(sector => (
                            <option key={sector} value={sector}>{sector}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="projectType" className={labelClasses}>Typologie de l'Ouvrage <span className="text-orange-500">*</span></label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={getInputClasses('projectType', true)}
                        >
                          <option value="">-- Sélectionner --</option>
                          {SECTOR_PROJECT_TYPES[formData.sector].map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                      <ErrorMessage field="projectType" />
                    </div>
                  </div>

                  {/* Nouveau champ Budget */}
                  <div className="space-y-1">
                    <label htmlFor="budget" className={labelClasses}>Enveloppe Budgétaire Prévisionnelle <span className="text-orange-500">*</span></label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClasses('budget', true) + ' pl-10'}
                      >
                        <option value="">-- Sélectionner une fourchette --</option>
                        {BUDGET_RANGES.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none z-10" />
                      <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-500 pointer-events-none" />
                    </div>
                    <ErrorMessage field="budget" />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="description" className={labelClasses}>Détails Techniques & Contraintes <span className="text-orange-500">*</span></label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={getInputClasses('description') + " resize-none"}
                      placeholder="Précisez les dimensions, tonnage estimé, milieu (corrosif/marin), et délais souhaités..."
                    />
                    <ErrorMessage field="description" />
                  </div>

                  <div className="space-y-1">
                    <label className={labelClasses}>Plan Technique ou Croquis (Optionnel)</label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center bg-slate-50 hover:bg-orange-50 hover:border-orange-500 transition-all cursor-pointer group"
                    >
                      {!formData.projectFile ? (
                        <>
                          <Upload className="w-10 h-10 text-slate-300 group-hover:text-orange-600 mx-auto mb-4 transition-transform group-hover:-translate-y-1" />
                          <p className="text-sm font-black text-slate-900 mb-1">Cliquer pour importer un fichier</p>
                          <p className="text-[10px] text-slate-500 uppercase tracking-widest">Plans, croquis ou photos du site (Max 10Mo)</p>
                        </>
                      ) : (
                        <div className="flex items-center justify-center space-x-4">
                          <FileImage className="w-8 h-8 text-orange-600" />
                          <div className="text-left">
                            <p className="text-sm font-black text-slate-900">{formData.projectFile.name}</p>
                            <p className="text-[10px] text-slate-500 uppercase">Fichier sélectionné</p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFormData(prev => ({ ...prev, projectFile: null }));
                              if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      )}
                      <input ref={fileInputRef} type="file" className="hidden" accept="image/*,.pdf" onChange={handleFileChange} />
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-950 hover:bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-[11px] py-6 rounded-2xl transition-all flex items-center justify-center shadow-2xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {isSubmitting ? "Traitement du dossier..." : <>Transmettre au Bureau d'Études <Send className="ml-4 w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation Simplifiée */}
      <section className="h-[500px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white/95 backdrop-blur-xl p-10 shadow-2xl rounded-[2.5rem] border border-white/20 max-w-sm text-center">
            <h3 className="font-black text-slate-950 text-3xl mb-4 uppercase tracking-tighter">Nos Ateliers</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">{CONTACT_INFO.address}</p>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-950 text-white text-[10px] px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-orange-600 transition-colors">Ouvrir Google Maps</a>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" alt="Localisation SCIM" className="w-full h-full object-cover grayscale" />
      </section>
    </div>
  );
};

export default Contact;
