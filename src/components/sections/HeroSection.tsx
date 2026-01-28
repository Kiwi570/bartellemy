'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Clock, MapPin } from 'lucide-react'
import { companyInfo } from '@/data'
import { Counter } from '@/components/animations'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-bleu via-bleu-600 to-bleu-700">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bleu/95 via-bleu/80 to-transparent" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-72 h-72 bg-orange/10 rounded-full blur-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-40 w-96 h-96 bg-orange/5 rounded-full blur-3xl hidden lg:block"
      />

      {/* Content */}
      <div className="container-pro relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-vert/20 text-vert rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Certifié RGE • Éligible aux aides de l&apos;État
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
            >
              Chauffage, Plomberie &{' '}
              <span className="text-orange">Énergies Renouvelables</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl"
            >
              Entreprise familiale depuis plus de 40 ans à Bar-le-Duc. 
              Installation, maintenance et dépannage pour particuliers et professionnels.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-accent font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-600 hover:shadow-orange transition-all"
              >
                Devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-accent font-semibold text-sm uppercase tracking-wider rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {companyInfo.phone}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/60 text-sm"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange" />
                Dépannage 7j/7
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange" />
                Zone 40 km
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-orange" />
                Devis gratuit
              </span>
            </motion.div>
          </div>

          {/* Right content - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-5xl font-heading font-bold text-white mb-2">
                <Counter to={40} suffix="+" />
              </div>
              <p className="text-white/70">Années d&apos;expérience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div className="text-5xl font-heading font-bold text-white mb-2">
                <Counter to={12} />
              </div>
              <p className="text-white/70">Experts qualifiés</p>
            </div>
            <div className="bg-orange/90 rounded-2xl p-6">
              <div className="text-5xl font-heading font-bold text-white mb-2">
                <Counter to={6} />
              </div>
              <p className="text-white/90">Labels RGE</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div className="text-5xl font-heading font-bold text-white mb-2">
                <Counter to={40} suffix=" km" />
              </div>
              <p className="text-white/70">Zone d&apos;intervention</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L60 45.7C120 41 240 33 360 35.3C480 38 600 52 720 55C840 58 960 52 1080 48.3C1200 45 1320 45 1380 45L1440 45V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
