import { Service, Certification, Testimonial, Brand, NavItem, Stat, FAQ } from '@/types'

export const navigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Chauffage', href: '/chauffage' },
  { label: 'Plomberie', href: '/plomberie' },
  { label: 'Climatisation', href: '/climatisation' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Notre Entreprise', href: '/entreprise' },
  { label: 'Contact', href: '/contact' },
]

export const companyInfo = {
  name: 'Bartellemy-Robinet',
  tagline: 'L\'énergie maîtrisée depuis plus de 40 ans',
  shortDescription: 'Chauffage, Plomberie & Énergies Renouvelables',
  phone: '03 29 79 10 68',
  email: 'contact@bartellemyrobinet.fr',
  address: {
    street: '11 Rue de l\'Étoile',
    city: 'Bar-le-Duc',
    postalCode: '55000',
    full: '11 Rue de l\'Étoile, 55000 Bar-le-Duc',
  },
  hours: {
    weekdays: 'Lundi - Vendredi : 8h00 - 12h00 / 14h00 - 18h00',
    saturday: 'Samedi : Sur rendez-vous',
    emergency: 'Dépannage 7j/7',
  },
  zone: '40 km autour de Bar-le-Duc',
  teamSize: 12,
  experience: 40,
  foundedYear: 1984,
}

export const stats: Stat[] = [
  { value: 40, suffix: '+', label: 'Années d\'expérience' },
  { value: 12, label: 'Experts qualifiés' },
  { value: 40, suffix: ' km', label: 'Zone d\'intervention' },
  { value: 100, suffix: '%', label: 'Certifié RGE' },
]

export const services: Service[] = [
  {
    id: 'chauffage',
    title: 'Chauffage',
    description: 'Installation et maintenance de systèmes de chauffage performants : pompes à chaleur, chaudières gaz, granulés, géothermie.',
    icon: 'Flame',
    href: '/chauffage',
    features: ['Pompes à chaleur', 'Chaudières gaz', 'Granulés / Bois', 'Plancher chauffant'],
  },
  {
    id: 'plomberie',
    title: 'Plomberie & Salle de bains',
    description: 'Création de salles de bains sur-mesure, dépannage plomberie, aménagement PMR certifié Handibat.',
    icon: 'Droplets',
    href: '/plomberie',
    features: ['Salle de bains', 'Dépannage', 'Aménagement PMR', 'Adoucisseur'],
  },
  {
    id: 'climatisation',
    title: 'Climatisation & Ventilation',
    description: 'Solutions de climatisation réversible et ventilation pour un confort optimal été comme hiver.',
    icon: 'Wind',
    href: '/climatisation',
    features: ['Climatisation', 'PAC air/air', 'VMC simple flux', 'VMC double flux'],
  },
  {
    id: 'energies',
    title: 'Énergies Renouvelables',
    description: 'Accompagnement dans votre transition énergétique : solaire thermique, géothermie, biomasse.',
    icon: 'Sun',
    href: '/chauffage',
    features: ['Solaire thermique', 'Géothermie', 'Biomasse', 'Aides financières'],
  },
]

export const certifications: Certification[] = [
  {
    id: 'qualipac',
    name: 'QUALIPAC',
    fullName: 'RGE QualiPAC',
    description: 'Pompes à chaleur air/eau et eau/eau',
    color: 'vert',
  },
  {
    id: 'qualibois',
    name: 'QUALIBOIS',
    fullName: 'RGE QualiBois',
    description: 'Chaudières bois, granulés, bois déchiqueté',
    color: 'vert',
  },
  {
    id: 'qualibat',
    name: 'QUALIBAT',
    fullName: 'RGE Qualibat',
    description: 'Chaudières gaz condensation',
    color: 'vert',
  },
  {
    id: 'qualisol',
    name: 'QUALISOL',
    fullName: 'RGE QualiSol',
    description: 'Chauffe-eau solaire thermique',
    color: 'vert',
  },
  {
    id: 'handibat',
    name: 'HANDIBAT',
    fullName: 'Handibat',
    description: 'Aménagement PMR',
    color: 'bleu',
  },
  {
    id: 'grdf',
    name: 'GRDF',
    fullName: 'Partenaire GRDF',
    description: 'Installateur agréé gaz naturel',
    color: 'bleu',
  },
]

export const chauffageTypes = [
  {
    id: 'pac-air-eau',
    title: 'Pompe à chaleur Air/Eau',
    description: 'Solution économique et écologique pour chauffer votre maison en captant les calories de l\'air extérieur.',
    advantages: ['Économies jusqu\'à 70%', 'Éligible aux aides', 'Faible impact environnemental'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600',
  },
  {
    id: 'pac-geothermie',
    title: 'Géothermie Eau/Eau',
    description: 'Captez l\'énergie du sol pour un chauffage ultra-performant toute l\'année.',
    advantages: ['Rendement optimal', 'Indépendance énergétique', 'Durée de vie 25+ ans'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
  {
    id: 'chaudiere-gaz',
    title: 'Chaudière Gaz Condensation',
    description: 'Technologie condensation pour un rendement supérieur et des économies d\'énergie.',
    advantages: ['Rendement 109%', 'Installation rapide', 'Compact'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600',
  },
  {
    id: 'chaudiere-granules',
    title: 'Chaudière Granulés',
    description: 'Chauffage bois automatisé avec les chaudières ÖKOFEN, leader européen.',
    advantages: ['Énergie renouvelable', 'Automatique', 'Confort optimal'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
  {
    id: 'plancher-chauffant',
    title: 'Plancher Chauffant',
    description: 'Chaleur douce et homogène avec les systèmes VELTA, neuf ou rénovation.',
    advantages: ['Chaleur uniforme', 'Invisible', 'Compatible toutes énergies'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
  },
]

export const brands: Brand[] = [
  { id: '1', name: 'Viessmann', category: 'Chauffage' },
  { id: '2', name: 'Vaillant', category: 'Chauffage' },
  { id: '3', name: 'Saunier Duval', category: 'Chauffage' },
  { id: '4', name: 'Atlantic', category: 'Chauffage' },
  { id: '5', name: 'ÖKOFEN', category: 'Granulés' },
  { id: '6', name: 'VELTA', category: 'Plancher chauffant' },
  { id: '7', name: 'Daikin', category: 'Climatisation' },
  { id: '8', name: 'Mitsubishi', category: 'Climatisation' },
  { id: '9', name: 'Grohe', category: 'Sanitaire' },
  { id: '10', name: 'Geberit', category: 'Sanitaire' },
  { id: '11', name: 'Jacob Delafon', category: 'Sanitaire' },
  { id: '12', name: 'Aldes', category: 'Ventilation' },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Sabatino',
    text: 'Entreprise sérieuse, très bon travail, propre et soigné. Je recommande vivement ! Merci à toute l\'équipe y compris le secrétariat qui vous accompagne agréablement dans vos démarches de dossiers.',
    rating: 5,
    date: 'Février 2024',
    service: 'Pompe à chaleur',
    location: 'Bar-le-Duc',
  },
  {
    id: '2',
    name: 'Jean-Pierre M.',
    text: 'Installation de notre chaudière à granulés parfaitement réalisée. L\'équipe a été ponctuelle et professionnelle. Le chantier a été laissé propre.',
    rating: 5,
    date: 'Janvier 2024',
    service: 'Chaudière granulés',
    location: 'Ligny-en-Barrois',
  },
  {
    id: '3',
    name: 'Famille Dupont',
    text: 'Rénovation complète de notre salle de bains. Le résultat est magnifique et correspond exactement à nos attentes. Merci pour votre professionnalisme.',
    rating: 5,
    date: 'Décembre 2023',
    service: 'Salle de bains',
    location: 'Commercy',
  },
  {
    id: '4',
    name: 'Michel L.',
    text: 'Dépannage rapide un samedi matin pour une fuite urgente. Intervention efficace et tarif correct. Je recommande !',
    rating: 5,
    date: 'Novembre 2023',
    service: 'Dépannage plomberie',
    location: 'Bar-le-Duc',
  },
]

export const faq: FAQ[] = [
  {
    question: 'Quelles sont les aides disponibles pour l\'installation d\'une pompe à chaleur ?',
    answer: 'Grâce à notre certification RGE, vous pouvez bénéficier de MaPrimeRénov\', des CEE (Certificats d\'Économie d\'Énergie), de l\'éco-PTZ et parfois d\'aides locales. Nous vous accompagnons dans toutes vos démarches.',
    category: 'Aides',
  },
  {
    question: 'Quelle est votre zone d\'intervention ?',
    answer: 'Nous intervenons dans un rayon de 40 km autour de Bar-le-Duc, couvrant ainsi une grande partie de la Meuse.',
    category: 'Général',
  },
  {
    question: 'Proposez-vous un service de dépannage urgent ?',
    answer: 'Oui, nous disposons d\'un service de dépannage pour les urgences plomberie et chauffage. Contactez-nous au 03 29 79 10 68.',
    category: 'Services',
  },
  {
    question: 'Pourquoi choisir une entreprise RGE ?',
    answer: 'Le label RGE (Reconnu Garant de l\'Environnement) est obligatoire pour bénéficier des aides de l\'État. Il garantit également notre expertise en matière d\'efficacité énergétique.',
    category: 'Certifications',
  },
  {
    question: 'Quel système de chauffage choisir pour ma maison ?',
    answer: 'Le choix dépend de nombreux facteurs : surface, isolation, budget, énergie souhaitée. Nous réalisons une étude personnalisée gratuite pour vous conseiller la solution la plus adaptée.',
    category: 'Chauffage',
  },
]

export const zoneIntervention = [
  'Bar-le-Duc',
  'Ligny-en-Barrois',
  'Commercy',
  'Saint-Mihiel',
  'Verdun',
  'Revigny-sur-Ornain',
  'Ancerville',
  'Vaucouleurs',
  'Void-Vacon',
  'Gondrecourt-le-Château',
]
