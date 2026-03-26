'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Bitcoin, Waves, Gauge, LineChart, BarChart3, Landmark } from 'lucide-react'

const markets = [
  { icon: TrendingUp, name: 'CFDs', color: 'text-blue-400' },
  { icon: BarChart3, name: 'Options', color: 'text-purple-400' },
  { icon: Bitcoin, name: 'Crypto', color: 'text-orange-400' },
  { icon: Waves, name: 'Oil', color: 'text-cyan-400' },
  { icon: Gauge, name: 'Metals', color: 'text-gold-500' },
  { icon: DollarSign, name: 'Forex', color: 'text-green-400' },
  { icon: LineChart, name: 'Indices', color: 'text-pink-400' },
  { icon: Landmark, name: 'Commodities', color: 'text-yellow-400' },
]

export function WhatYouCanTrade() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gold-500">📊 WHAT</span> YOU CAN TRADE
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything. Every market. One platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all hover:scale-105"
            >
              <market.icon className={`w-10 h-10 ${market.color} mx-auto mb-3`} />
              <span className="text-white/90 font-medium">{market.name}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/50 text-sm mt-12">
          Plus Futures, Bonds, and 50+ more instruments
        </p>
      </div>
    </section>
  )
}