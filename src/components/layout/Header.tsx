'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, Clock, MapPin, ChevronDown } from 'lucide-react'
import { navigation, companyInfo } from '@/data'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Top Bar */}
      <div className={cn(
        'hidden lg:block bg-bleu text-white transition-all duration-300',
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2'
      )}>
        <div className="container-pro flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-orange transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{companyInfo.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-orange transition-colors">
              <Mail className="w-4 h-4" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {companyInfo.address.city}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Lun-Ven: 8h-18h
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-pro py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        )}
      >
        <div className="container-pro">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">BR</span>
              </div>
              <div className="hidden sm:block">
                <span className="block text-xl font-heading font-bold text-bleu">
                  Bartellemy-Robinet
                </span>
                <span className="block text-xs text-ardoise-500 font-medium">
                  Chauffage • Plomberie • Énergies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-ardoise-700 hover:text-orange transition-colors rounded-lg hover:bg-ardoise-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-bleu font-semibold hover:text-orange transition-colors"
              >
                <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-orange" />
                </div>
                <span className="hidden xl:block">{companyInfo.phone}</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-orange text-white font-accent font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-orange-700 hover:shadow-orange transition-all"
              >
                Devis gratuit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-bleu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white" />
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
            >
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-ardoise-700 hover:text-orange hover:bg-ardoise-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-ardoise-200 space-y-4">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 bg-bleu/5 rounded-lg text-bleu"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{companyInfo.phone}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-4 bg-orange text-white text-center font-accent font-semibold uppercase tracking-wider rounded-lg"
                >
                  Demander un devis
                </Link>
              </div>

              <div className="mt-auto pt-8 text-sm text-ardoise-500">
                <p className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  {companyInfo.address.full}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Lun-Ven: 8h-12h / 14h-18h
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
