import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components/layout'

export const metadata: Metadata = {
  title: {
    default: 'Bartellemy-Robinet | Chauffage, Plomberie, Énergies Renouvelables | Bar-le-Duc',
    template: '%s | Bartellemy-Robinet',
  },
  description: 'Entreprise familiale de chauffage, plomberie et énergies renouvelables à Bar-le-Duc depuis 40 ans. Certifiée RGE. Pompes à chaleur, chaudières, salles de bains. Devis gratuit.',
  keywords: [
    'chauffage Bar-le-Duc',
    'plomberie Meuse',
    'pompe à chaleur',
    'chaudière gaz',
    'chaudière granulés',
    'salle de bains',
    'RGE',
    'QUALIPAC',
    'énergies renouvelables',
    'dépannage chauffage',
  ],
  authors: [{ name: 'Bartellemy-Robinet SARL' }],
  creator: 'Bartellemy-Robinet',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bartellemyrobinet.fr',
    siteName: 'Bartellemy-Robinet',
    title: 'Bartellemy-Robinet | Chauffage & Plomberie à Bar-le-Duc',
    description: 'Entreprise familiale certifiée RGE. Chauffage, plomberie, énergies renouvelables. 40+ ans d\'expérience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bartellemy-Robinet - Chauffage et Plomberie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bartellemy-Robinet | Chauffage & Plomberie',
    description: 'Entreprise familiale certifiée RGE depuis 40 ans à Bar-le-Duc.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
