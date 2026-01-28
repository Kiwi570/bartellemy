'use client'

import { ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Button Component
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      icon,
      iconPosition = 'right',
      loading = false,
      disabled = false,
      onClick,
      type = 'button',
    },
    ref
  ) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-accent font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-orange text-white hover:bg-orange-700 hover:shadow-orange active:scale-[0.98]',
      secondary: 'bg-bleu text-white hover:bg-bleu-700 hover:shadow-pro active:scale-[0.98]',
      outline: 'bg-transparent text-bleu border-2 border-bleu hover:bg-bleu hover:text-white active:scale-[0.98]',
      ghost: 'bg-transparent text-orange hover:text-orange-700',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-sm',
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'invisible')}>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </span>
      </motion.button>
    )
  }
)
Button.displayName = 'Button'

// Badge Component
interface BadgeProps {
  children: ReactNode
  variant?: 'orange' | 'bleu' | 'vert' | 'gray'
  className?: string
}

export function Badge({ children, variant = 'orange', className = '' }: BadgeProps) {
  const variants = {
    orange: 'bg-orange/10 text-orange',
    bleu: 'bg-bleu/10 text-bleu',
    vert: 'bg-vert/10 text-vert',
    gray: 'bg-ardoise-100 text-ardoise-600',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-accent font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

// Card Component
interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        'bg-white rounded-2xl shadow-card',
        hover && 'hover:shadow-card-hover transition-shadow duration-300',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </motion.div>
  )
}

// Section Title Component
interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionTitle({ badge, title, subtitle, align = 'center', light = false, className = '' }: SectionTitleProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
      {badge && (
        <Badge variant={light ? 'orange' : 'orange'} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight',
          light ? 'text-white' : 'text-bleu'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/80' : 'text-ardoise-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

// Star Rating
interface StarRatingProps {
  rating: number
  className?: string
}

export function StarRating({ rating, className = '' }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn('w-5 h-5', i < rating ? 'text-orange' : 'text-ardoise-200')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// RGE Badge
interface RGEBadgeProps {
  name: string
  description: string
  className?: string
}

export function RGEBadge({ name, description, className = '' }: RGEBadgeProps) {
  return (
    <div className={cn('flex items-center gap-3 p-4 bg-vert/5 rounded-xl border border-vert/20', className)}>
      <div className="w-12 h-12 flex items-center justify-center bg-vert rounded-lg text-white font-accent font-bold text-sm">
        RGE
      </div>
      <div>
        <p className="font-heading font-semibold text-bleu">{name}</p>
        <p className="text-sm text-ardoise-500">{description}</p>
      </div>
    </div>
  )
}

// Stat Card
interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  icon?: ReactNode
  className?: string
}

export function StatCard({ value, suffix = '', prefix = '', label, icon, className = '' }: StatCardProps) {
  return (
    <div className={cn('text-center p-6', className)}>
      {icon && <div className="mb-3 flex justify-center">{icon}</div>}
      <div className="text-4xl md:text-5xl font-heading font-bold text-bleu">
        {prefix}{value}{suffix}
      </div>
      <p className="text-sm text-ardoise-500 mt-2">{label}</p>
    </div>
  )
}
