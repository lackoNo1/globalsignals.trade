'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 bg-gold-gradient">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Ready to transform your trading?
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Join thousands of traders already using Global Signals to trade smarter.
          No hidden fees. Cancel anytime.
        </p>
        <Link href="/register">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8">
            Start Trading Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <p className="text-sm text-black/60 mt-6">
          No credit card required for demo account
        </p>
      </div>
    </section>
  )
}