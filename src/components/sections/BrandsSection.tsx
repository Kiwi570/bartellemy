'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/animations'
import { Badge } from '@/components/ui'
import { brands } from '@/data'

export function BrandsSection() {
  return (
    <section className="py-16 bg-white border-y border-ardoise-100">
      <div className="container-pro">
        <Reveal className="text-center mb-12">
          <Badge variant="bleu" className="mb-4">Nos Partenaires</Badge>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-bleu">
            Les meilleures marques du marché
          </h2>
          <p className="text-ardoise-600 mt-2">
            Nous travaillons avec les leaders européens du chauffage et de la plomberie
          </p>
        </Reveal>

        <StaggerReveal className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <StaggerItem key={brand.id}>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: 'rgb(232 93 4 / 0.05)' }}
                className="aspect-[3/2] flex flex-col items-center justify-center p-4 rounded-xl bg-ardoise-50 transition-colors cursor-pointer group"
              >
                <span className="text-ardoise-600 font-heading font-semibold text-sm text-center group-hover:text-orange transition-colors">
                  {brand.name}
                </span>
                {brand.category && (
                  <span className="text-xs text-ardoise-400 mt-1">{brand.category}</span>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
