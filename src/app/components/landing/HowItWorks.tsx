'use client'

import { Card, CardContent } from '@/components/ui/card'
import { UserPlus, Building2, CreditCard, LineChart } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Register',
    description: 'Create your account in 30 seconds',
    number: '01',
  },
  {
    icon: Building2,
    title: 'Choose Broker',
    description: 'Select TradeStation, MT5, Binance, or IBKR',
    number: '02',
  },
  {
    icon: CreditCard,
    title: 'Deposit',
    description: 'Add funds via card or crypto',
    number: '03',
  },
  {
    icon: LineChart,
    title: 'Trade',
    description: 'Start receiving AI signals instantly',
    number: '04',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start trading in under 10 minutes
          </h2>
          <p className="text-xl text-muted-foreground">
            The fastest way to start trading with AI-powered signals
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-gold-500" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold-500/30" />
                  )}
                </div>
                <div className="text-sm text-gold-500 font-bold mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            ⚡️ No technical skills required. Our team sets everything up for you.
          </p>
        </div>
      </div>
    </section>
  )
}