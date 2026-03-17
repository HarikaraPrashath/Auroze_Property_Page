'use client'

import { useState } from "react"
import { useTheme } from 'next-themes'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Building2, Headset, Settings, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      label: "Services", 
      dropdown: true,
      items: [
        { href: "/services/management", label: "Management", description: "Property & Tenant Management" },
        { href: "/services/support", label: "Support", description: "Property Support Service" },
      ]
    },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
      className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[90%] lg:w-[75%] rounded-2xl lg:rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg"
    >
      <div className="px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className=""
            >
              <Image
                src="/logo.png"
                alt="SoulRoots Logo"
                width={48}
                height={48}
                className="w-14 h-14 lg:w-12 lg:h-12 rounded-xl shadow-lg border border-border  object-contain"
                priority
              />
            </motion.div>
            <span className="hidden sm:block font-bold text-foreground text-xl lg:text-2xl tracking-wide drop-shadow-lg">
              SoulRoots
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.dropdown ? (
                  // Dropdown 
                  <div>
                    <motion.button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center gap-1 text-foreground/80 font-medium text-sm tracking-wide hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <motion.div
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-3 w-72 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl overflow-hidden"
                        >
                          <div className="p-2">
                            {link.items?.map((item, index) => (
                              <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent transition-colors group"
                                  onClick={() => {
                                    setServicesOpen(false);
                                    setIsOpen(false);
                                  }}
                                >
                                  <div className="flex-1">
                                    <p className="text-foreground font-medium text-sm">{item.label}</p>
                                    <p className="text-muted-foreground text-xs">{item.description}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    whileHover="hover"
                    className="relative"
                  >
                    <Link
                      href={link.href || "#"}
                      className="text-foreground/80 font-medium text-sm tracking-wide hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                    <motion.span
                      variants={{
                        hover: { width: "100%" },
                        initial: { width: "0%" }
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 -bottom-1 h-0.5 bg-primary"
                    />
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA BUTTON */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 lg:px-6 shadow-lg text-sm lg:text-base"
              >
                <a
                  href="https://wa.me/94XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="ml-2 border-border hover:bg-accent"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5 text-foreground">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 lg:w-5 lg:h-5 text-foreground">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21c-5.523 0-10-4.477-10-10c0-4.418 2.865-8.167 6.839-9.543c.513-.17.998.296.89.82A7.5 7.5 0 0012 19.5c2.485 0 4.675-1.21 6.063-3.063c.322-.447.98-.5 1.19.07z" />
                </svg>
              )}
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24}/> : <Menu size={24}/>} 
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.dropdown ? (
                    // Mobile Dropdown
                    <div className="space-y-2">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-foreground text-lg font-medium"
                      >
                        <span>{link.label}</span>
                        <motion.div
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {link.items?.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground"
                                onClick={() => {
                                  setIsOpen(false)
                                  setServicesOpen(false)
                                }}
                              >
                                <div>
                                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                                  <p className="text-xs text-muted-foreground">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="block text-foreground text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <div className="pt-4 space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                >
                  <a
                    href="https://wa.me/94XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>

                {/* Theme Toggle for mobile */}
                <Button
                  variant="outline"
                  size="default"
                  className="w-full border-border hover:bg-accent text-foreground"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}