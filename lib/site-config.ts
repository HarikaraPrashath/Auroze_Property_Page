const fallbackWhatsAppNumber = '94771299675'

const fallbackSupportEmail = 'support.soulroots@gmail.com'
const fallbackContactEmail = 'info@SoulRoots.lk'
const fallbackContactPhoneDisplay = '+94 77 129 9675'
const fallbackContactPhoneHref = '+94771299675'
const fallbackOfficeAddress = 'No-09, Pioneer road, Batticaloa, Sri Lanka'

export const siteConfig = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsAppNumber,
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackWhatsAppNumber}`,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? fallbackSupportEmail,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? fallbackContactEmail,
  contactPhoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? fallbackContactPhoneDisplay,
  contactPhoneHref: process.env.NEXT_PUBLIC_CONTACT_PHONE_HREF ?? fallbackContactPhoneHref,
  officeAddress: process.env.NEXT_PUBLIC_OFFICE_ADDRESS ?? fallbackOfficeAddress,
} as const

export const getWhatsAppMessageUrl = (message: string) =>
  `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`
