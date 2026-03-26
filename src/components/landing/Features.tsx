'use client'

import { motion } from 'framer-motion'
import { Brain, Users, TrendingUp, Coins, Plug, Zap, Shield, Newspaper, BarChart3, Bitcoin, Waves, Gauge } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI-Powered Signals', description: '85%+ accuracy predictions' },
  { icon: TrendingUp, title: 'Trade Options via TradeStation API', description: 'Options, stocks, futures' },
  { icon: Users, title: 'Copy Trading', description: 'Follow top traders automatically' },
  { icon: Waves, title: 'Trade CFDs via Admirals Group MT5', description: 'Forex, gold, indices' },
  { icon: Coins, title: 'Market Predictions', description: 'See market movements before they happen' },
  { icon: Bitcoin, title: 'Trade Crypto via Binance API', description: 'Spot & futures' },
  { icon: Coins, title: 'Token Creator (SPL/ERC20)', description: 'Launch your own tokens' },
  { icon: Gauge, title: 'Oil, Metals, Indices, Forex', description: 'All markets covered' },
  { icon: Plug, title: 'One-Click Broker Setup', description: 'No technical skills needed' },
  { icon: Newspaper, title: 'Real-Time News Analysis', description: 'NLP sentiment analysis' },
  { icon: Zap, title: 'Instant Execution', description: 'Low latency' },
  { icon: Shield, title: 'Institutional Security', description: 'Bank-grade encryption' },
]

export function Features() {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✨ <span className="text-gold-500">FEATURES</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to trade smarter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <feature.icon className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white/90 mb-1">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}