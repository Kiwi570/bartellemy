'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, MapPin, Clock, Mail } from 'lucide-react'
import { Reveal } from '@/components/animations'
import { companyInfo } from '@/data'

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-bleu">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bleu via-bleu-600/90 to-bleu-700" />

      {/* Floating shapes */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl"
      />

      <div className="container-pro relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Un projet ?{' '}
                <span className="text-orange">Parlons-en !</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg text-white/80 mb-8">
                Que ce soit pour une installation, une rénovation ou un dépannage urgent, 
                notre équipe est à votre écoute. Devis gratuit et sans engagement.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-accent font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-600 hover:shadow-orange transition-all"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bleu font-accent font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-ardoise-100 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right - Contact cards */}
          <div className="space-y-4">
            <Reveal direction="right">
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg text-white flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Téléphone</p>
                  <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="text-white font-heading font-semibold text-lg hover:text-orange transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-white font-heading font-semibold hover:text-orange transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Adresse</p>
                  <p className="text-white font-heading font-semibold">
                    {companyInfo.address.full}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <div className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg text-white flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Horaires</p>
                  <p className="text-white font-heading font-semibold">
                    Lun-Ven: 8h-12h / 14h-18h
                  </p>
                  <p className="text-orange text-sm font-medium">Dépannage 7j/7</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
