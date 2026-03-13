# ProManage - Quick Start Guide

## Welcome to Your Property Management Website!

Your professional property management website is now ready. Here's how to get started:

## 🚀 Launch the Website

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Immediate Configuration Tasks

### 1. Update Your Contact Information
These are the places where users can reach you:

**File:** `components/navbar.tsx` (Line 42)
```tsx
href="https://wa.me/94XXXXXXXXX"
```
Replace with your WhatsApp number

**File:** `components/footer.tsx`
- Line 51: Phone number
- Line 54: Email address
- Line 57: WhatsApp link
- Line 61: Physical address

**File:** `app/contact/page.tsx`
- Update all phone numbers
- Update email address
- Update WhatsApp link
- Update business hours
- Update location

### 2. Customize Your Services
**File:** `app/services/page.tsx`

Update the `services` array to match your specific offerings. Each service includes:
- Title
- Icon (emoji)
- Description
- Details (array of features)

### 3. Adjust Pricing Plans
**File:** `components/pricing-section.tsx`

Update the `plans` array with your actual pricing:
- Plan names
- Prices (currently in Rs.)
- Features included
- Billing periods

### 4. Update Property Listings
**File:** `components/properties-section.tsx`

Modify the `properties` array to showcase your actual properties:
- Property names
- Locations
- Number of beds/baths
- Square footage
- Rental prices

## 🎨 Customization Guide

### Change Your Color Theme
All colors are defined in `app/globals.css`

**Light Mode (`:root`)**
- `--primary`: Green color (default: oklch(0.517 0.147 142.476))
- `--secondary`: Dark Yellow (default: oklch(0.716 0.135 61.856))

**Dark Mode (`.dark`)**
- Same variables with adjusted values for dark theme

### Update Your Logo
Replace "PM" in `components/navbar.tsx` (Line 16) with your actual logo:
```tsx
<div className="w-10 h-10 bg-primary rounded-lg...">
  PM  {/* Replace with your logo */}
</div>
```

### Add Your Company Name
Update "ProManage" references throughout:
- `components/navbar.tsx`
- `components/footer.tsx`
- `app/layout.tsx` (metadata)

### Update Hero Images
Replace images in `public/` folder:
- `hero-1.jpg` - First carousel slide
- `hero-2.jpg` - Second carousel slide
- `hero-3.jpg` - Third carousel slide
- `hero-4.jpg` - Fourth carousel slide

Add property images:
- `property-1.jpg` through `property-4.jpg`

## 📄 Page Structure

### Home Page (`app/page.tsx`)
Sections in order:
1. Navigation
2. Hero Carousel (with background images)
3. About Section
4. Trust/Stats Section
5. Featured Properties
6. Rental Features
7. Service Overview
8. Testimonials
9. Pricing Plans
10. Call-to-Action
11. Footer

### Services Page (`app/services/page.tsx`)
- Hero section with title
- Main services (6 categories)
- Additional services (4 extra services)
- Pricing section
- Footer

### Contact Page (`app/contact/page.tsx`)
- Hero section
- Contact info cards (Phone, Email, WhatsApp, Location)
- Contact form with validation
- Business hours
- Footer

## 🔧 Important Files to Know

```
components/
├── navbar.tsx              # Main navigation
├── footer.tsx              # Footer with links and contact
├── hero-carousel.tsx       # Auto-rotating hero section
├── about-section.tsx       # Company information
├── trust-section.tsx       # Statistics cards
├── properties-section.tsx  # Featured properties
├── service-overview-section.tsx # Home page services preview
├── service-card.tsx        # Individual service details
├── testimonials-section.tsx # Client testimonials
├── pricing-section.tsx     # Subscription plans
├── cta-section.tsx         # Call-to-action section
├── contact-form.tsx        # Contact form with validation
└── ui/                     # All UI components

app/
├── page.tsx                # Home page
├── services/page.tsx       # Services page
├── contact/page.tsx        # Contact page
└── globals.css             # Global styles & theme colors
```

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up (md breakpoint)
- **Desktop**: 1024px and up (lg breakpoint)

Test on various devices using browser DevTools.

## 🎯 Features Included

✅ Modern hero carousel with auto-rotation  
✅ Fully responsive mobile design  
✅ Contact form with validation  
✅ Service categories with details  
✅ Pricing plans with comparison  
✅ Testimonials section  
✅ Trust/stats section  
✅ Property listings  
✅ SEO optimized  
✅ Accessible design (WCAG compliant)  
✅ Smooth animations  
✅ Dark mode ready  

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Environment Variables
No environment variables are required for basic functionality.

For contact form to send emails, you'll need to set up:
- Backend endpoint or email service (SendGrid, Resend, etc.)
- Update `components/contact-form.tsx` with your API call

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

## 🐛 Troubleshooting

**Images not showing?**
- Ensure images are in `public/` folder
- Check image paths in components
- Use full paths starting with `/`

**Styles not applying?**
- Clear `.next` folder and restart dev server
- Rebuild Tailwind CSS: `npm run build`

**Form not working?**
- Form currently simulates submission
- To make it functional, add backend endpoint in `contact-form.tsx`

## 📞 Support

For help with:
- Customization: Review component files and comments
- Deployment: Check Vercel documentation
- Design changes: Modify Tailwind classes directly in components

## Next Steps

1. ✅ Customize all contact information
2. ✅ Update services list
3. ✅ Add your actual pricing
4. ✅ Replace hero and property images
5. ✅ Update testimonials with real client feedback
6. ✅ Test on mobile devices
7. ✅ Deploy to Vercel

**Happy property managing! 🏢**

---

Last updated: 2024
