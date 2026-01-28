'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Award, Wrench, HeartHandshake, ThumbsUp } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem, Counter } from '@/components/animations'
import { SectionTitle } from '@/components/ui'
import { companyInfo, stats } from '@/data'

const reasons = [
  {
    icon: Users,
    title: 'Entreprise familiale',
    description: 'Depuis 2 générations, nous perpétuons une tradition de qualité et de service personnalisé.',
  },
  {
    icon: Award,
    title: 'Certifiés RGE',
    description: '6 labels RGE pour vous garantir une expertise reconnue et l\'accès aux aides de l\'État.',
  },
  {
    icon: Wrench,
    title: 'Dépannage rapide',
    description: 'Service d\'urgence 7j/7 pour les pannes de chauffage et problèmes de plomberie.',
  },
  {
    icon: ThumbsUp,
    title: 'Devis gratuit',
    description: 'Étude personnalisée et devis détaillé sans engagement pour tous vos projets.',
  },
  {
    icon: HeartHandshake,
    title: 'Proximité',
    description: 'Intervention dans un rayon de 40 km autour de Bar-le-Duc, Meuse.',
  },
  {
    icon: Clock,
    title: '40+ ans d\'expérience',
    description: 'Un savoir-faire éprouvé au service de votre confort depuis 1984.',
  },
]

export function WhyUsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-pro">
        <Reveal>
          <SectionTitle
            badge="Pourquoi nous choisir"
            title="Une équipe de confiance à votre service"
            subtitle="Découvrez ce qui fait de Bartellemy-Robinet le partenaire idéal pour vos projets de chauffage et plomberie."
          />
        </Reveal>

        {/* Stats banner */}
        <Reveal className="mb-16">
          <div className="bg-bleu rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                    {stat.prefix}
                    <Counter to={stat.value} />
                    {stat.suffix}
                  </div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Reasons grid */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="flex gap-5 p-6 rounded-2xl bg-ardoise-50 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange/10 text-orange flex-shrink-0">
                  <reason.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-bleu text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-ardoise-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
