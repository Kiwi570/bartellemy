'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react'
import { Reveal } from '@/components/animations'
import { Badge, StarRating, Card } from '@/components/ui'
import { testimonials } from '@/data'

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section className="section-padding bg-ardoise-50">
      <div className="container-pro">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <Badge variant="orange" className="mb-4">Témoignages</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-bleu">
              Ce que disent nos clients
            </h2>
          </Reveal>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-ardoise-200 text-bleu hover:bg-bleu hover:text-white hover:border-bleu transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-ardoise-200 text-bleu hover:bg-bleu hover:text-white hover:border-bleu transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <Card className="h-full" padding="lg">
                  {/* Quote icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-orange/10 rounded-xl mb-6">
                    <Quote className="w-6 h-6 text-orange" />
                  </div>

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} className="mb-4" />

                  {/* Text */}
                  <p className="text-ardoise-700 leading-relaxed mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="pt-6 border-t border-ardoise-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-semibold text-bleu">
                          {testimonial.name}
                        </p>
                        {testimonial.service && (
                          <p className="text-sm text-ardoise-500">{testimonial.service}</p>
                        )}
                      </div>
                      {testimonial.location && (
                        <span className="flex items-center gap-1 text-xs text-ardoise-400">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? 'w-8 bg-orange' : 'bg-ardoise-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
