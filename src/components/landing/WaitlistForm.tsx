'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Loader2, Gift } from 'lucide-react'

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.message || 'Something went wrong')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          {!submitted ? (
            <>
              <Mail className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Join the waitlist
              </h2>
              <p className="text-white/60 mb-6">
                Be among the first to experience the most intelligent trading platform.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-gold-500 text-white placeholder-white/40"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Subscribe to waitlist'
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm mt-3">{error}</p>
                )}
              </form>

              <p className="text-xs text-white/40 mt-6">
                ✅ No spam. Unsubscribe anytime. Early access benefits included.
              </p>
            </>
          ) : (
            <div>
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-gold-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                You're on the list! 🎉
              </h2>
              <p className="text-white/60 mb-6">
                We'll notify you as soon as Global Signals launches.
              </p>
              <div className="bg-white/5 rounded-lg p-4 inline-block">
                <div className="flex items-center gap-2 text-sm">
                  <Gift className="w-4 h-4 text-gold-500" />
                  <span>You'll receive exclusive early access benefits</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-sm text-white/40">
            💡 Early access benefits: 50% off lifetime subscription • Priority support • 
            Beta tester status • First access to new features • Direct feedback channel
          </p>
        </div>
      </div>
    </section>
  )
}