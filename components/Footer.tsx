
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter text-white">SCIM</span>
              <span className="text-[11px] uppercase tracking-[0.2em] leading-none text-orange-500 font-semibold">Société Camerounaise des Ingénieries Métalliques</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Conception, réalisation des ouvrages métalliques, chaudronnerie, soudure et entretiens industriels. L'expertise locale aux standards internationaux.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/scim-cameroun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Suivez SCIM sur LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/scim.cameroun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Suivez SCIM sur Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Expertise</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Charpente Métallique</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Chaudronnerie</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Tuyauterie</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Soudure Argon</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Entreprise</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/a-propos" className="hover:text-orange-500 transition-colors">À Propos</Link></li>
              <li><Link to="/certifications" className="hover:text-orange-500 transition-colors">Certifications</Link></li>
              <li><Link to="/realisations" className="hover:text-orange-500 transition-colors">Nos Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Nous Contacter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              {CONTACT_INFO.phones.map((phone, idx) => (
                <li key={idx} className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-orange-500 transition-colors">{phone}</a>
                </li>
              ))}
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors break-all">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} SCIM. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="text-slate-500">Douala - Cameroun</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
