'use client'

import { Hero } from '@/components/landing/Hero'
import { WhatYouCanTrade } from '@/components/landing/WhatYouCanTrade'
import { Brokers } from '@/components/landing/Brokers'
import { AIFuture } from '@/components/landing/AIFuture'
import { Features } from '@/components/landing/Features'
import { WaitlistForm } from '@/components/landing/WaitlistForm'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatYouCanTrade />
      <Brokers />
      <AIFuture />
      <Features />
      <WaitlistForm />
      <Footer />
    </main>
  )
}