'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

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
      className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[75%] rounded-full 
      bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
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
                  className="absolute left-0 -bottom-1 h-[2px] bg-primary"
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
            className="md:hidden bg-black/90 backdrop-blur-xl rounded-b-3xl px-6 pb-6"
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

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  )
}