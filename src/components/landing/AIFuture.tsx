'use client'

import { motion } from 'framer-motion'
import { Brain, Newspaper, BarChart3, TrendingUp, Eye, Sparkles } from 'lucide-react'

const capabilities = [
  { icon: Newspaper, text: 'News Sentiment', description: 'Real-time news analysis' },
  { icon: BarChart3, text: 'Macro Indicators', description: 'GDP, rates, inflation' },
  { icon: TrendingUp, text: 'Technical Patterns', description: '100+ indicators' },
  { icon: Brain, text: 'Deep Learning', description: 'Neural network predictions' },
  { icon: Globe, text: 'Global Markets', description: 'Cross-asset correlations' },
  { icon: Sparkles, text: 'Real-Time Signals', description: 'Instant alerts' },
]

export function AIFuture() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔮 <span className="text-gold-500">WE SEE</span> THE FUTURE
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Our AI reads financial news in real-time. Analyzes macroeconomics. Studies micro patterns.
            Understands market psychology. Predicts movements.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <cap.icon className="w-8 h-8 text-gold-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-white/80">{cap.text}</p>
              <p className="text-xs text-white/40">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-r from-gold-500/10 to-transparent rounded-2xl p-8 border border-gold-500/20"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            <span className="text-gold-500 font-semibold">Oil moves?</span> We know before it happens.
            <br />
            <span className="text-gold-500 font-semibold">Gold spikes?</span> We predicted it.
            <br />
            <span className="text-gold-500 font-semibold">Crypto rallies?</span> Our models saw it coming.
            <br />
            <span className="text-gold-500 font-semibold">CFD opportunities?</span> We found them.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Globe icon component
function Globe(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}