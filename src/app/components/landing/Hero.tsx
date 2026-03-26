'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-gold-500">GLOBAL</span> SIGNALS
              <span className="block text-2xl md:text-3xl text-white/60 mt-2">.TRADE</span>
            </h1>
          </div>

          {/* Main Message */}
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto">
            The future of trading is almost here.
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-6 py-2 mb-12">
            <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
            <span className="text-gold-500 font-semibold">COMING SOON</span>
          </div>

          {/* Value Proposition */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-white/70 leading-relaxed">
              We're building the most intelligent trading platform on Earth.
              <br />
              AI-powered signals that see the future. Trade anything, anywhere.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">2,500+</div>
              <div className="text-sm text-white/50">Traders Waiting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">15+</div>
              <div className="text-sm text-white/50">Markets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-500">24/7</div>
              <div className="text-sm text-white/50">Support</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gold-500 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}