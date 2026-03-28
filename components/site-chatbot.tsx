'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle, Send, X } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

type ChatRole = 'bot' | 'user'

type ChatMessage = {
  id: string
  role: ChatRole
  text: string
}

const initialMessages: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'bot',
    text: 'Hi! Welcome to SoilRoots. Ask me about services, pricing, contact, WhatsApp, location, or business hours.',
  },
  {
    id: 'faq-hint',
    role: 'bot',
    text: 'Quick FAQs: How to contact? | What services do you offer? | What are your business hours?',
  },
]

const quickActions = [
  'What services do you offer?',
  'Show rental services',
  'Need maintenance help',
  'Talk about pricing',
  'How to contact?',
  'WhatsApp number',
  'Business hours',
  'Where is your office?',
]

type KnowledgeEntry = {
  keywords: string[]
  answer: string
}

const fallbackKnowledge: KnowledgeEntry[] = [
  {
    keywords: ['contact', 'how to contact', 'reach', 'whatsapp', 'phone'],
    answer: `You can contact us through WhatsApp ${siteConfig.contactPhoneDisplay}, Phone ${siteConfig.contactPhoneDisplay}, or Email ${siteConfig.contactEmail}. See /contact for full details.`,
  },
  {
    keywords: ['pricing', 'price', 'cost'],
    answer: 'Pricing depends on property size and selected services. Share your needs on /contact and our team will provide a custom quote.',
  },
  {
    keywords: ['services', 'rental', 'maintenance', 'tenant', 'legal'],
    answer: 'We provide rental management, tenant support, maintenance, legal documentation, and housekeeping services.',
  },
]

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const parseKnowledgeText = (raw: string): KnowledgeEntry[] => {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#') && line.includes('|'))
    .map((line) => {
      const [keywordsPart, ...answerParts] = line.split('|')
      const keywords = keywordsPart
        .split(',')
        .map((k) => normalizeText(k))
        .filter(Boolean)

      const answer = answerParts.join('|').trim()
      return { keywords, answer }
    })
    .filter((entry) => entry.keywords.length > 0 && entry.answer.length > 0)
}

const findBestAnswer = (query: string, knowledge: KnowledgeEntry[]): string | null => {
  const normalizedQuery = normalizeText(query)
  if (!normalizedQuery) return null

  let bestScore = 0
  let bestAnswer: string | null = null

  for (const entry of knowledge) {
    let score = 0

    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword)) {
        score += keyword.split(' ').length + 1
      } else if (keyword.includes(normalizedQuery)) {
        score += 1
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestAnswer = entry.answer
    }
  }

  return bestScore > 0 ? bestAnswer : null
}

export default function SiteChatbot() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [typing, setTyping] = useState(false)
  const [knowledge, setKnowledge] = useState<KnowledgeEntry[]>(fallbackKnowledge)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadKnowledge = async () => {
      try {
        const response = await fetch('/chatbot-knowledge.txt', { cache: 'no-store' })
        if (!response.ok) return

        const text = await response.text()
        const parsed = parseKnowledgeText(text)
        if (isMounted && parsed.length > 0) {
          setKnowledge(parsed)
        }
      } catch {
        // Keep fallback knowledge if the text file is unavailable.
      }
    }

    loadKnowledge()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 280)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const displayMessages = useMemo(() => messages.slice(-14), [messages])

  const pushBotMessage = (text: string) => {
    setTyping(true)
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text,
        },
      ])
      setTyping(false)
    }, 600)
  }

  const sendMessage = (text: string) => {
    const clean = text.trim()
    if (!clean) return

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: 'user',
        text: clean,
      },
    ])

    setDraft('')

    const answer = findBestAnswer(clean, knowledge)
    if (answer) {
      pushBotMessage(answer)
      return
    }

    pushBotMessage('I could not find an exact match. Please ask about contact, WhatsApp, pricing, maintenance, tenant services, or rentals.')
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-2 z-70 w-auto">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mb-3 w-[calc(100vw-1rem)] max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-[0_18px_60px_-28px_hsl(var(--primary))] backdrop-blur sm:max-w-md"
          >
            <div className="relative bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">SoilRoots Assistant</p>
                  <p className="text-xs text-primary-foreground/80">Quick help for property services</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1.5 text-primary-foreground/90 transition hover:bg-primary-foreground/15"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <motion.div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-primary-foreground/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="max-h-[55vh] space-y-3 overflow-y-auto px-3 py-3 sm:px-4">
              {displayMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className={
                      msg.role === 'user'
                        ? 'max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-xs text-white sm:text-sm'
                        : 'max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-xs text-foreground sm:text-sm'
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-foreground">
                    <div className="flex items-center gap-1">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-primary/80"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-primary/80"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7, delay: 0.12 }}
                      />
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-primary/80"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7, delay: 0.24 }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border/60 px-3 pb-3 pt-2 sm:px-4">
              <div className="mb-2 flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => sendMessage(action)}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary transition hover:bg-primary/20"
                  >
                    {action}
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  sendMessage(draft)
                }}
                className="flex items-center gap-2"
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type your message..."
                  className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-primary/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-2">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/95 text-foreground shadow-lg transition hover:scale-[1.04] hover:bg-accent"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="pointer-events-auto ml-auto inline-flex h-14 w-14 items-center justify-center rounded-l-2xl rounded-r-none bg-primary text-primary-foreground shadow-[0_14px_34px_-14px_hsl(var(--primary))] transition hover:scale-[1.04]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open chatbot"
        >
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  )
}
