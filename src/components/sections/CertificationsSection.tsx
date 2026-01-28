'use client'

import { motion } from 'framer-motion'
import { Shield, Award, BadgeCheck, Euro, FileCheck, Leaf } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/animations'
import { Badge } from '@/components/ui'
import { certifications } from '@/data'

const advantages = [
  {
    icon: Euro,
    title: 'Aides financières',
    description: 'MaPrimeRénov\', CEE, Éco-PTZ... Bénéficiez des aides de l\'État',
  },
  {
    icon: BadgeCheck,
    title: 'Qualité garantie',
    description: 'Travaux conformes aux normes en vigueur',
  },
  {
    icon: Leaf,
    title: 'Éco-responsable',
    description: 'Solutions respectueuses de l\'environnement',
  },
  {
    icon: FileCheck,
    title: 'Accompagnement',
    description: 'Aide aux démarches administratives',
  },
]

export function CertificationsSection() {
  return (
    <section className="section-padding bg-ardoise-50">
      <div className="container-pro">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <Reveal>
              <Badge variant="vert" className="mb-4">Certifications</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-bleu mb-6">
                Entreprise certifiée{' '}
                <span className="text-vert">RGE</span>
              </h2>
              <p className="text-lg text-ardoise-600 mb-8">
                Le label RGE (Reconnu Garant de l&apos;Environnement) atteste de notre expertise 
                en matière d&apos;efficacité énergétique et vous permet de bénéficier des aides de l&apos;État.
              </p>
            </Reveal>

            {/* Advantages */}
            <StaggerReveal className="grid sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-vert/10 text-vert rounded-xl flex-shrink-0">
                      <advantage.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-bleu mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-ardoise-500">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          {/* Right - Certifications grid */}
          <Reveal direction="right">
            <div className="bg-white rounded-3xl shadow-pro-lg p-8">
              <h3 className="font-heading font-semibold text-bleu mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-vert" />
                Nos labels et certifications
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-4 rounded-xl border-2 ${
                      cert.color === 'vert' 
                        ? 'border-vert/20 bg-vert/5' 
                        : 'border-bleu/20 bg-bleu/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      cert.color === 'vert' ? 'bg-vert text-white' : 'bg-bleu text-white'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-semibold text-bleu text-sm mb-1">
                      {cert.fullName}
                    </h4>
                    <p className="text-xs text-ardoise-500">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p className="mt-6 text-sm text-ardoise-500 text-center">
                Ces certifications sont garantes de notre expertise et vous permettent 
                de bénéficier des aides à la rénovation énergétique.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
