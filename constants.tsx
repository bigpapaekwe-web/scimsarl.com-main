
import React from 'react';
import { Construction, Pipette, Settings, BookOpen, Factory, ShieldCheck, Target, Eye, Ruler, HardHat, Truck, Wrench, Award } from 'lucide-react';
import { Service, Project, Metric, Certification, Testimonial } from './types';

export const COLORS = {
  primary: '#0f172a', // Slate 900
  secondary: '#f97316', // Orange 500
  accent: '#334155', // Slate 700
  background: '#f8fafc', // Slate 50
};

export const CONTACT_INFO = {
  address: "Terminus Akwa-Nord, BP 18712 Douala-Cameroun",
  phones: ["+237 694 72 78 08", "+237 657 18 30 53"],
  email: "enock.be@scimsarl.com"
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'construction-metallique',
    title: 'Construction Métallique',
    description: 'Conception et montage de charpentes, hangars industriels et structures complexes.',
    longDescription: 'Expertise complète en ouvrages métalliques : hangars (ex: 4 versants 2600m²), fermes treillis, poteaux et structures pour usines. Nous assurons la pré-fabrication en atelier et le montage sur site.',
    benefits: ['Structures grandes portées', 'Pré-fabrication atelier', 'Montage rapide sur site'],
    solutions: ['Hangars industriels', 'Charpentes métalliques', 'Bâtiments touristiques', 'Extensions d\'usines'],
    icon: 'Construction',
    imageUrl: '/media/photos/services/construction/chantier-01.jpg',
    galleryImages: [
      '/media/photos/services/construction/chantier-02.jpg',
      '/media/photos/services/construction/boulons-01.jpg'
    ]
  },
  {
    id: 'chaudronnerie-tuyauterie',
    title: 'Chaudronnerie & Tuyauterie',
    description: 'Travaux de tuyauterie industrielle, réservoirs et montages d\'équipements.',
    longDescription: 'Installation de lignes de tuyauterie (API, Inox), montage de réservoirs, échangeurs et stations de pompage. Intervention sur sites pétroliers et industriels (ex: SHT Tchad, ACC Kribi).',
    benefits: ['Tuyauterie Haute Pression', 'Soudure Homologuée', 'Montage équipements lourds'],
    solutions: ['Réservoirs de stockage', 'Réseaux incendie', 'Échangeurs thermiques', 'Skids de pompage'],
    icon: 'Pipette',
    imageUrl: '/media/photos/services/chaudronnerie/pipe-01.jpg',
    galleryImages: [
      '/media/photos/services/chaudronnerie/pipe-02.jpg',
      '/media/photos/services/chaudronnerie/montage-01.jpg'
    ]
  },
  {
    id: 'soudure-industrielle',
    title: 'Soudure Spécialisée',
    description: 'Soudure industrielle Argon, robotisée et homologation de soudeurs.',
    longDescription: 'Maîtrise des procédés de soudage avancés : soudure robotisée des profilés (Oméga, PRS), soudure Argon et TIG/MIG. Nous réalisons également l\'homologation des soudeurs (Field Welding).',
    benefits: ['Soudeurs homologués', 'Procédés automatisés', 'Contrôle qualité rigoureux'],
    solutions: ['Soudure Argon', 'Soudage robotisé PRS', 'Assemblage de précision'],
    icon: 'ShieldCheck',
    imageUrl: '/media/photos/services/soudure/equipe-01.jpg',
    galleryImages: [
      '/media/photos/services/soudure/toiture-01.jpg',
      '/media/photos/services/soudure/soudage-01.jpg'
    ]
  },
  {
    id: 'maintenance-services',
    title: 'Maintenance & Services',
    description: 'Entretien d\'usine, travaux offshore/onshore et location de matériel.',
    longDescription: 'SCIM propose des contrats de maintenance industrielle, l\'entretien d\'usines et la mise à disposition de personnel qualifié. Location de camion Hiab 10 roues (capacité levage 5t).',
    benefits: ['Personnel qualifié', 'Disponibilité engins', 'Intervention sur site'],
    solutions: ['Entretien usine', 'Travaux Offshore/Onshore', 'Location Camion Hiab', 'Prestation de services'],
    icon: 'Truck',
    imageUrl: '/media/photos/services/maintenance/equipe-01.jpg',
    galleryImages: [
      '/media/photos/services/maintenance/chantier-01.jpg',
      '/media/photos/services/maintenance/site-01.jpg'
    ]
  },
  {
    id: 'etudes-conception',
    title: 'Études & Conception',
    description: 'Bureau d\'études pour la conception et le dimensionnement de vos ouvrages.',
    longDescription: 'Nos ingénieurs réalisent la conception détaillée, les plans de fabrication et le suivi technique pour garantir la conformité et la sécurité de vos structures métalliques.',
    benefits: ['Ingénierie locale', 'Plans d\'exécution', 'Optimisation structurelle'],
    solutions: ['Calcul de structures', 'Plans 3D', 'Dossiers techniques'],
    icon: 'Ruler',
    imageUrl: '/media/photos/services/construction/grue-01.jpg',
    galleryImages: [
      '/media/photos/services/etudes/plans-01.jpg',
      '/media/photos/services/etudes/bureau-01.jpg'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '4',
    title: 'NEO INDUSTRIE',
    category: 'Industrie',
    description: 'Fabrication de platines, extension usine (SIC Cacao) et montage réseau incendie.',
    location: 'Kekem / Bafang',
    year: 'Récent',
    imageUrl: '/media/photos/projets/neo-industrie/neo-11.jpg',
    gallery: [
      '/media/photos/projets/neo-industrie/neo-01.jpg',
      '/media/photos/projets/neo-industrie/neo-02.jpg',
      '/media/photos/projets/neo-industrie/neo-03.jpg',
      '/media/photos/projets/neo-industrie/neo-04.jpg',
      '/media/photos/projets/neo-industrie/neo-05.jpg',
      '/media/photos/projets/neo-industrie/neo-06.jpg',
      '/media/photos/projets/neo-industrie/neo-07.jpg',
      '/media/photos/projets/neo-industrie/neo-08.jpg',
      '/media/photos/projets/neo-industrie/neo-09.jpg',
      '/media/photos/projets/neo-industrie/neo-10.jpg',
      '/media/photos/projets/neo-industrie/neo-12.jpg',
      '/media/photos/projets/neo-industrie/neo-13.jpg',
      '/media/photos/projets/neo-industrie/neo-14.jpg'
    ]
  },
  {
    id: '1',
    title: 'SHT Tchad',
    category: 'Chaudronnerie',
    description: 'Montage de réservoirs, ligne de tuyauterie et station de pompage eau incendie.',
    location: 'Tchad',
    year: 'Récent',
    imageUrl: '/media/photos/projets/sht-tchad/sht-01.jpg',
    gallery: [
      '/media/photos/projets/sht-tchad/sht-02.jpg',
      '/media/photos/projets/sht-tchad/sht-03.jpg'
    ]
  },
  {
    id: '2',
    title: 'Touristique Ndogssibi',
    category: 'Construction Métallique',
    description: 'Fabrication et montage d\'un hangar 4 versants de 2600m². Charpente lourde.',
    location: 'Douala, Ndogssibi',
    year: 'Récent',
    imageUrl: '/media/photos/projets/touristique-ndogssibi/ndogs-01.jpg',
    gallery: [
      '/media/photos/projets/touristique-ndogssibi/ndogs-02.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-03.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-04.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-05.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-06.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-07.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-08.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-09.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-10.jpg',
      '/media/photos/projets/touristique-ndogssibi/ndogs-11.jpg'
    ]
  },
  {
    id: '3',
    title: 'ACC KRIBI',
    category: 'Tuyauterie',
    description: 'Montage d\'échangeur, équipements et réseaux de tuyauterie complexes.',
    location: 'Kribi',
    year: 'Récent',
    imageUrl: '/media/photos/projets/acc-kribi/acc-01.jpg',
    gallery: [
      '/media/photos/projets/acc-kribi/acc-02.jpg'
    ]
  },
  {
    id: '5',
    title: 'Hangar Abong Mbang',
    category: 'Construction Métallique',
    description: 'Montage complet de la structure métallique d\'un hangar industriel.',
    location: 'Abong Mbang',
    year: 'Récent',
    imageUrl: '/media/photos/projets/hangar-abong-mbang/hangar-01.jpg',
    gallery: [
      '/media/photos/projets/hangar-abong-mbang/hangar-02.jpg'
    ]
  },
  {
    id: '6',
    title: 'Nestlé Cameroun',
    category: 'Maintenance',
    description: 'Travaux de maintenance industrielle et interventions techniques sur site de production Nestlé.',
    location: 'Douala, Cameroun',
    year: 'Récent',
    imageUrl: '/media/photos/projets/nestle-cameroun/nestle-01.jpg',
    gallery: [
      '/media/photos/projets/nestle-cameroun/nestle-02.jpg',
      '/media/photos/projets/nestle-cameroun/nestle-03.jpg',
      '/media/photos/projets/nestle-cameroun/nestle-04.jpg',
      '/media/photos/projets/nestle-cameroun/nestle-05.jpg',
      '/media/photos/projets/nestle-cameroun/nestle-06.jpg'
    ]
  },
  {
    id: '7',
    title: 'Racks Leader Express',
    category: 'Construction Métallique',
    description: 'Fabrication et installation de racks et étagères métalliques industriels pour entrepôt logistique.',
    location: 'Cameroun',
    year: 'Récent',
    imageUrl: '/media/photos/projets/racks-leader-express/rack-01.jpg',
    gallery: [
      '/media/photos/projets/racks-leader-express/rack-03.jpg',
      '/media/photos/projets/racks-leader-express/rack-04.jpg',
      '/media/photos/projets/racks-leader-express/rack-05.jpg',
      '/media/photos/projets/racks-leader-express/rack-02.jpg'
    ]
  }
];

export const KEY_METRICS: Metric[] = [
  { label: 'Ans d\'expérience', value: '20+' },
  { label: 'Experts Qualifiés', value: '80+' },
  { label: 'Projets Majeurs', value: '50+' },
  { label: 'Taux de Service', value: '100%' }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    description: 'Système de management de la qualité garantissant la satisfaction client et l\'amélioration continue.',
    logoUrl: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?auto=format&fit=crop&q=80&w=400',
    meaning: 'Garantie de processus fiables et amélioration continue pour une qualité constante de vos ouvrages.',
    process: 'Audits réguliers par des organismes indépendants assurant la conformité et la performance opérationnelle.'
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001',
    description: 'Norme internationale pour la santé et la sécurité au travail, priorité absolue sur nos chantiers.',
    logoUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400',
    meaning: 'Protection maximale de vos actifs et réduction des risques d\'accidents sur vos sites industriels.',
    process: 'Identification proactive des dangers et contrôles rigoureux pour un environnement de travail sécurisé.'
  },
  {
    id: 'asme',
    name: 'ASME Certification',
    description: 'Accréditation pour la fabrication d\'appareils à pression et de chaudières industrielles.',
    logoUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400',
    meaning: 'Conformité aux plus hauts standards mondiaux pour la sécurité de vos équipements sous pression.',
    process: 'Validation stricte des capacités de fabrication et inspections techniques par des experts accrédités.'
  },
  {
    id: 'anor',
    name: 'ANOR Cameroun',
    description: 'Conformité aux normes nationales de qualité édictées par l\'Agence des Normes du Cameroun.',
    logoUrl: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?auto=format&fit=crop&q=80&w=400',
    meaning: 'Respect total de la réglementation locale garantissant la validité juridique de vos installations.',
    process: 'Évaluation continue de la conformité aux exigences nationales par des analyses et tests certifiés.'
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015',
    description: 'Engagement pour le management environnemental et la réduction de l\'empreinte écologique de nos activités.',
    logoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400',
    meaning: 'Optimisation de l\'utilisation des ressources et réduction de l\'impact écologique de vos projets.',
    process: 'Mise en œuvre de plans de gestion environnementale audités pour une durabilité accrue.'
  },
  {
    id: 'api-q1',
    name: 'API Spec Q1',
    description: 'Standard de qualité rigoureux pour les organisations de fabrication pour l\'industrie du pétrole et du gaz naturel.',
    logoUrl: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400',
    meaning: 'Fiabilité exceptionnelle pour les applications critiques du secteur pétrolier et gazier.',
    process: 'Contrôles de fabrication ultra-stricts et traçabilité totale des matériaux utilisés.'
  },
  {
    id: 'aws-welding',
    name: 'AWS Certified',
    description: 'Certification de l\'American Welding Society garantissant l\'excellence des procédés de soudage.',
    logoUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400',
    meaning: 'Intégrité structurelle supérieure de vos assemblages métalliques grâce à une expertise certifiée.',
    process: 'Qualification systématique des soudeurs et des modes opératoires selon les codes internationaux.'
  },
  {
    id: 'en-1090',
    name: 'EN 1090-2',
    description: 'Norme européenne pour l\'exécution des structures en acier et en aluminium, garantissant la sécurité structurelle.',
    logoUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400',
    meaning: 'Sécurité structurelle certifiée répondant aux exigences de performance les plus strictes.',
    process: 'Contrôle rigoureux de la production en usine et certification par des organismes notifiés.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Jean-Paul Kamga',
    role: 'Directeur Technique',
    company: 'NEO INDUSTRIE',
    quote: 'La SCIM a su répondre à nos contraintes techniques les plus complexes lors de l\'extension de notre usine. Leur rigueur et le respect des délais sont exemplaires au Cameroun.',
    imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    name: 'Samuel Eto\'o',
    role: 'Chef de Projet Infrastructure',
    company: 'SNH (Société Nationale des Hydrocarbures)',
    quote: 'Une expertise locale qui n\'a rien à envier aux multinationales. Leurs soudeurs homologués ont réalisé un travail impeccable sur nos pipelines.',
    imageUrl: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '3',
    name: 'Marie-Claire Ngo',
    role: 'Responsable Maintenance',
    company: 'ALUCAM',
    quote: 'Nous collaborons avec la SCIM pour la maintenance de nos cuves depuis 3 ans. Leur réactivité 24/7 est un atout majeur pour notre continuité de service.',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '4',
    name: 'Ibrahim Bello',
    role: 'Directeur d\'Exploitation',
    company: 'SONARA',
    quote: 'La précision de leurs calculs de structure et la qualité de la chaudronnerie livrée pour nos échangeurs thermiques ont dépassé nos attentes.',
    imageUrl: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '5',
    name: 'Cédric Mvondo',
    role: 'Ingénieur Principal',
    company: 'CAMWATER',
    quote: 'Le montage du réseau incendie sur notre site de production a été réalisé avec un professionnalisme rare. Une équipe à l\'écoute et très compétente.',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '6',
    name: 'Abdoulaye Diallo',
    role: 'Consultant Industriel',
    company: 'SGS Cameroun',
    quote: 'En tant qu\'auditeur, j\'apprécie la conformité systématique de la SCIM aux normes ISO et ASME. C\'est un gage de sécurité pour tous leurs clients.',
    imageUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=150'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Construction': return <Construction className="w-8 h-8" />;
    case 'Pipette': return <Pipette className="w-8 h-8" />;
    case 'Settings': return <Settings className="w-8 h-8" />;
    case 'Ruler': return <Ruler className="w-8 h-8" />;
    case 'Factory': return <Factory className="w-8 h-8" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
    case 'Target': return <Target className="w-8 h-8" />;
    case 'Eye': return <Eye className="w-8 h-8" />;
    case 'HardHat': return <HardHat className="w-8 h-8" />;
    case 'Truck': return <Truck className="w-8 h-8" />;
    case 'Wrench': return <Wrench className="w-8 h-8" />;
    default: return <Construction className="w-8 h-8" />;
  }
};
