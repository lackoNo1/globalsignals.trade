'use client'

import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'

const brokers = [
  {
    name: 'TradeStation API',
    description: 'Options, Stocks, Futures',
    features: ['Options Trading', 'Direct Market Access', 'API Integration'],
    icon: '📈',
  },
  {
    name: 'Admirals Group (MT5)',
    description: 'Forex, Gold, CFDs, Indices',
    features: ['MetaTrader 5', 'Gold Trading', 'CFDs', 'Forex'],
    icon: '⚡',
    recommended: true,
  },
  {
    name: 'Binance',
    description: 'Crypto Spot & Futures',
    features: ['500+ Pairs', 'Spot Trading', 'Futures'],
    icon: '₿',
  },
  {
    name: 'Interactive Brokers',
    description: 'Global Markets',
    features: ['Global Access', 'Low Margin', 'Professional Tools'],
    icon: '🌍',
  },
]

export function Brokers() {
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
            🏦 CONNECT WITH <span className="text-gold-500">YOUR BROKER</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            One-click account setup. Our team handles everything. No technical skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border transition-all hover:border-gold-500/50 ${
                broker.recommended ? 'border-gold-500/30' : 'border-white/10'
              }`}
            >
              {broker.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
              )}
              <div className="text-4xl mb-4">{broker.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{broker.name}</h3>
              <p className="text-white/50 text-sm mb-4">{broker.description}</p>
              <ul className="space-y-2 mb-4">
                {broker.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-4 h-4 text-gold-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-2 py-2 text-sm border border-white/20 rounded-lg hover:border-gold-500 transition-colors">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/50 text-sm mt-12">
          🔌 More brokers coming soon. Custom integrations available for enterprise clients.
        </p>
      </div>
    </section>
  )
}