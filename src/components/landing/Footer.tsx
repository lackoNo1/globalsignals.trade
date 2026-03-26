'use client'

import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>
            © {new Date().getFullYear()} Global Signals. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> for traders worldwide
          </div>
        </div>
      </div>
    </footer>
  )
}