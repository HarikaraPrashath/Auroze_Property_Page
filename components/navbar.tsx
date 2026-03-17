'use client'

import { useState } from "react"
import { useTheme } from 'next-themes'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" },
      ]
      return (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
          className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[75%] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <div className="px-6 lg:px-10">
            <div className="flex justify-between items-center h-16">
              {/* LOGO */}
              <Link href="/" className="flex items-center gap-3 group">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold"
                >
                  PM
                </motion.div>
                <span className="hidden sm:block font-bold text-white text-lg tracking-wide">
                  ProManage
                </span>
              </Link>
              {/* DESKTOP MENU */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover="hover"
                    className="relative"
                  >
                    <Link
                      href={link.href}
                      className="text-white/90 font-medium text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                    {/* Animated underline */}
                    <motion.span
                      variants={{
                        hover: { width: "100%" },
                        initial: { width: "0%" }
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 -bottom-1 h-0.5 bg-primary"
                    />
                  </motion.div>
                ))}
                {/* CTA BUTTON */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg"
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
                  className="ml-2"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21c-5.523 0-10-4.477-10-10c0-4.418 2.865-8.167 6.839-9.543c.513-.17.998.296.89.82A7.5 7.5 0 0012 19.5c2.485 0 4.675-1.21 6.063-3.063c.322-.447.98-.5 1.19.07z" />
                    </svg>
                  )}
                </Button>
              </div>
              {/* MOBILE MENU BUTTON */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={26}/> : <Menu size={26}/>} 
              </button>
            </div>
          </div>
          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="md:hidden rounded-b-3xl px-6 pb-6"
              >
                <div className="flex flex-col gap-5 pt-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-white text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <Button
                    asChild
                    className="mt-3 bg-primary hover:bg-primary/90 text-white rounded-full"
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
                    size="icon"
                    className="mt-3"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.485 4.485l-.707-.707M4.222 19.778l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21c-5.523 0-10-4.477-10-10c0-4.418 2.865-8.167 6.839-9.543c.513-.17.998.296.89.82A7.5 7.5 0 0012 19.5c2.485 0 4.675-1.21 6.063-3.063c.322-.447.98-.5 1.19.07z" />
                      </svg>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )
    }