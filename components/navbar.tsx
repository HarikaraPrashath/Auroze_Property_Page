'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? (resolvedTheme ?? theme) === 'dark' : false

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
              <Image src="/logo.png" alt="SoulRoots Logo" width={48} height={48} className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl shadow-lg object-contain" priority />
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

            <Button variant="outline" size="icon" className="ml-2 border-border hover:bg-accent" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label="Toggle theme">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5 text-foreground"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5 text-foreground"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21c-5.523 0-10-4.477-10-10c0-4.418 2.865-8.167 6.839-9.543c.513-.17.998.296.89.82A7.5 7.5 0 0012 19.5c2.485 0 4.675-1.21 6.063-3.063c.322-.447.98-.5 1.19.07z" /></svg>
              )}
            </Button>
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

              <Button variant="outline" size="default" className="w-full border-border hover:bg-accent text-foreground" onClick={() => setTheme(isDark ? 'light' : 'dark')}>
                {mounted ? (isDark ? 'Light Mode' : 'Dark Mode') : 'Toggle Theme'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}