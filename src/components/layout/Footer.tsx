'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, ArrowRight, Shield } from 'lucide-react'
import { companyInfo, navigation, certifications, services } from '@/data'
import { Reveal } from '@/components/animations'

export function Footer() {
  return (
    <footer className="bg-bleu text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange to-orange-600">
        <div className="container-pro py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Besoin d&apos;un devis ou d&apos;un dépannage ?
              </h3>
              <p className="text-white/90 mt-2">
                Notre équipe est à votre écoute du lundi au vendredi
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange font-accent font-semibold uppercase tracking-wider rounded-lg hover:bg-bleu hover:text-white transition-all"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bleu text-white font-accent font-semibold uppercase tracking-wider rounded-lg hover:bg-bleu-700 transition-all"
              >
                Devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-pro py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">BR</span>
              </div>
              <div>
                <span className="block text-xl font-heading font-bold">Bartellemy-Robinet</span>
                <span className="block text-xs text-white/60">Depuis {companyInfo.foundedYear}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {companyInfo.tagline}. Chauffage, plomberie et énergies renouvelables pour particuliers et professionnels.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-orange transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-white/70 hover:text-orange transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-orange" />
                  <div>
                    <span className="block font-medium text-white">{companyInfo.phone}</span>
                    <span className="text-sm">Dépannage 7j/7</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-orange transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-orange" />
                  <span className="text-sm">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 text-orange flex-shrink-0" />
                <span className="text-sm">{companyInfo.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5 text-orange flex-shrink-0" />
                <div className="text-sm">
                  <p>Lun-Ven: 8h-12h / 14h-18h</p>
                  <p>Sam: Sur rendez-vous</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Certifications</h4>
            <div className="space-y-3">
              {certifications.slice(0, 4).map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <div className="w-10 h-10 bg-vert rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">{cert.name}</span>
                    <span className="text-xs text-white/60">{cert.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-pro py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Bartellemy-Robinet SARL. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/mentions-legales" className="hover:text-orange transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="hover:text-orange transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
