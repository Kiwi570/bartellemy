'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { Reveal } from '@/components/animations'
import { Badge, Button } from '@/components/ui'
import { companyInfo, zoneIntervention } from '@/data'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Téléphone invalide'),
  address: z.string().optional(),
  projectType: z.string().min(1, 'Type de projet requis'),
  message: z.string().min(10, 'Décrivez votre projet'),
  urgency: z.boolean().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const projectTypes = [
  'Installation pompe à chaleur',
  'Remplacement chaudière',
  'Rénovation salle de bains',
  'Installation climatisation',
  'Dépannage chauffage',
  'Dépannage plomberie',
  'Entretien / Maintenance',
  'Autre projet',
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-bleu overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        
        <div className="container-pro relative">
          <Reveal>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact</span>
            </nav>
          </Reveal>

          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="orange" className="mb-4">Contact & Devis</Badge>
            </Reveal>
            
            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Parlons de votre <span className="text-orange">projet</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl text-white/80">
                Devis gratuit et sans engagement. Notre équipe vous répond sous 48h.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-ardoise-50">
        <div className="container-pro">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ardoise-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          {...register('firstName')}
                          className="input-pro"
                          placeholder="Jean"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ardoise-700 mb-2">
                          Nom *
                        </label>
                        <input
                          {...register('lastName')}
                          className="input-pro"
                          placeholder="Dupont"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-ardoise-700 mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="input-pro"
                          placeholder="jean@exemple.fr"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ardoise-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="input-pro"
                          placeholder="06 12 34 56 78"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ardoise-700 mb-2">
                        Adresse du chantier
                      </label>
                      <input
                        {...register('address')}
                        className="input-pro"
                        placeholder="Adresse complète"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ardoise-700 mb-2">
                        Type de projet *
                      </label>
                      <select {...register('projectType')} className="input-pro">
                        <option value="">Sélectionnez le type de projet</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-ardoise-700 mb-2">
                        Description du projet *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="textarea-pro"
                        placeholder="Décrivez votre projet en quelques lignes..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        {...register('urgency')}
                        id="urgency"
                        className="w-5 h-5 rounded border-ardoise-300 text-orange focus:ring-orange"
                      />
                      <label htmlFor="urgency" className="text-sm text-ardoise-600">
                        🚨 C&apos;est une urgence (dépannage)
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      className="w-full"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 bg-vert/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-vert" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-bleu mb-4">
                      Demande envoyée !
                    </h3>
                    <p className="text-ardoise-600 mb-8">
                      Nous vous répondrons dans les plus brefs délais.<br />
                      En cas d&apos;urgence, appelez-nous directement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/">
                        <Button variant="outline">Retour à l&apos;accueil</Button>
                      </Link>
                      <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                        <Button variant="primary" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                          Appeler
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact info */}
              <Reveal direction="right">
                <div className="bg-bleu text-white rounded-2xl p-8">
                  <h3 className="text-xl font-heading font-bold mb-6">Nous contacter</h3>
                  
                  <div className="space-y-5">
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Téléphone</p>
                        <p className="font-heading font-semibold group-hover:text-orange transition-colors">
                          {companyInfo.phone}
                        </p>
                        <p className="text-orange text-sm">Dépannage 7j/7</p>
                      </div>
                    </a>

                    <a href={`mailto:${companyInfo.email}`} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <p className="font-heading font-semibold group-hover:text-orange transition-colors">
                          {companyInfo.email}
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Adresse</p>
                        <p className="font-heading font-semibold">{companyInfo.address.full}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-orange rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Horaires</p>
                        <p className="font-heading font-semibold">Lun-Ven: 8h-12h / 14h-18h</p>
                        <p className="text-white/70 text-sm">Sam: Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Zone */}
              <Reveal direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl shadow-card p-6">
                  <h4 className="font-heading font-semibold text-bleu mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange" />
                    Zone d&apos;intervention
                  </h4>
                  <p className="text-sm text-ardoise-600 mb-4">
                    Nous intervenons dans un rayon de <strong>40 km</strong> autour de Bar-le-Duc :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {zoneIntervention.slice(0, 8).map((ville) => (
                      <span
                        key={ville}
                        className="px-3 py-1 bg-ardoise-100 rounded-full text-xs text-ardoise-600"
                      >
                        {ville}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
