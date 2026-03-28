'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Services',
      dropdown: true,
      items: [
        { href: '/services/management', label: 'Management', description: 'Property & Tenant Management' },
        { href: '/services/support', label: 'Support', description: 'Property Support Service' },
      ],
    },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <div className="transition-transform hover:rotate-6 hover:scale-105">
              <Image src="/logo.png" alt="SoulRoots Logo" width={48} height={48} className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl  object-contain" priority />
            </div>
            <span className="hidden sm:block font-bold text-foreground text-xl lg:text-2xl tracking-wide drop-shadow-lg">SoulRoots</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  <div>
                    <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 text-foreground/80 font-semibold text-sm tracking-wide hover:text-foreground transition-colors">
                      {link.label}
                      <span className={`transform transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}>
                        <ChevronDown size={16} className="icon-brown" />
                      </span>
                    </button>

                    {servicesOpen && (
                      <div className="absolute left-0 mt-3 w-72 rounded-2xl bg-card border border-border shadow-lg overflow-hidden">
                        <div className="p-2">
                          {link.items?.map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/30 transition-colors group" onClick={() => { setServicesOpen(false); setIsOpen(false) }}>
                              <div className="flex-1">
                                <p className="text-foreground font-medium text-sm">{item.label}</p>
                                <p className="text-muted-foreground text-xs">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative">
                    <Link href={link.href || '#'} className="text-foreground/80 font-semibold text-sm tracking-wide hover:text-foreground transition-colors">{link.label}</Link>
                    <span className="absolute left-0 -bottom-1 h-0.5 bg-primary w-0 group-hover:w-full transition-all" />
                  </div>
                )}
              </div>
            ))}

            <div className="transform-gpu transition-transform hover:scale-105 active:scale-95">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-4 lg:px-6 shadow-lg text-sm lg:text-base">
                <a href="https://wa.me/94771299675" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>

          <button className="md:hidden text-foreground rounded-lg border border-border p-2 hover:bg-accent transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="icon-brown" /> : <Menu size={24} className="icon-brown" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden overflow-hidden border-t border-border bg-background shadow-md">
          <div className="px-6 pb-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label} className="py-1">
                {link.dropdown ? (
                  <div className="space-y-2">
                    <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full text-foreground text-lg font-medium">
                      <span>{link.label}</span>
                      <span className={`transform transition-transform ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}><ChevronDown size={20} className="icon-brown" /></span>
                    </button>

                    {servicesOpen && (
                      <div className="pl-4 space-y-2">
                        {link.items?.map((item) => (
                          <Link key={item.href} href={item.href} className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground" onClick={() => { setIsOpen(false); setServicesOpen(false) }}>
                            <div>
                              <p className="text-sm font-medium text-foreground">{item.label}</p>
                              <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href || '#'} className="block text-foreground text-lg font-medium" onClick={() => setIsOpen(false)}>{link.label}</Link>
                )}
              </div>
            ))}

            <div className="pt-4 space-y-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                <a href="https://wa.me/94771299675" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}