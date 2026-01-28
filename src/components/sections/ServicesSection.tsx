'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flame, Droplets, Wind, Sun, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/animations'
import { SectionTitle, Card } from '@/components/ui'
import { services } from '@/data'

const iconMap: Record<string, any> = {
  Flame,
  Droplets,
  Wind,
  Sun,
}

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-pro">
        <Reveal>
          <SectionTitle
            badge="Nos Services"
            title="Une expertise complète pour votre confort"
            subtitle="Du chauffage à la plomberie, en passant par les énergies renouvelables, nous vous accompagnons dans tous vos projets."
          />
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Flame
            return (
              <StaggerItem key={service.id}>
                <Link href={service.href}>
                  <Card className="h-full group" padding="lg">
                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange/10 text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-bleu mb-3 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-ardoise-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && (
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-ardoise-500">
                            <CheckCircle2 className="w-4 h-4 text-vert flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Link */}
                    <span className="inline-flex items-center gap-2 text-orange font-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerReveal>
      </div>
    </section>
  )
}
