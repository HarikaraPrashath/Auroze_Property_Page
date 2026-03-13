# ProManage - Configuration Template

Use this template to quickly configure all your contact information and business details.

## 📞 Contact Information

Replace these placeholders with your actual information:

```
Company Name: ProManage
Phone: +94 XXXXXXXXX
Email: info@promanage.lk
WhatsApp: +94 XXXXXXXXX
Address: Colombo 3, Sri Lanka
```

## 🔍 Find & Replace Locations

### Phone Numbers
**Current:** `+94XXXXXXXXX`

Find and replace in these files:
- `components/navbar.tsx` - Line 42
- `components/footer.tsx` - Lines 51, 75
- `app/contact/page.tsx` - Lines 31, 47, 64

### Email Address
**Current:** `info@promanage.lk`

Find and replace in these files:
- `components/footer.tsx` - Line 54
- `app/contact/page.tsx` - Line 38

### WhatsApp Link
**Current:** `https://wa.me/94XXXXXXXXX`

Find and replace in these files:
- `components/navbar.tsx` - Line 42
- `components/footer.tsx` - Line 75
- `app/contact/page.tsx` - Line 64

### Company Name
**Current:** `ProManage`

Find and replace in these files:
- `components/navbar.tsx` - Line 26
- `components/footer.tsx` - Line 17
- `app/layout.tsx` - Metadata (line 10-12)

### Business Hours
**Current:** 
- Monday-Friday: 8:30 AM - 5:30 PM
- Saturday: 9:00 AM - 2:00 PM
- Sunday: Closed

Update in:
- `app/contact/page.tsx` - Lines 117-129

### Location
**Current:** `Colombo 3, Sri Lanka`

Update in:
- `components/footer.tsx` - Line 61
- `app/contact/page.tsx` - Line 53

---

## 💰 Pricing Configuration

Edit `components/pricing-section.tsx`

Replace these values:
```
Monthly: Rs. 300/month
6 Months: Rs. 16,000 for 6 months
Yearly: Rs. 32,000 for 12 months
```

And update the features for each plan to match your actual offerings.

---

## 🏢 Services Configuration

Edit `app/services/page.tsx`

Update the `services` array to include:
- Your actual service titles
- Your service descriptions
- Features you provide (details array)

---

## 🏠 Property Listings

Edit `components/properties-section.tsx`

Update the `properties` array with:
- Property names
- Locations
- Number of bedrooms/bathrooms
- Square footage
- Monthly rental prices

---

## 👥 Testimonials

Edit `components/testimonials-section.tsx`

Update the `testimonials` array with:
- Real client names
- Their roles/titles
- Their feedback
- Rating (1-5 stars)

---

## 🖼️ Images

Replace these images in the `public/` folder:

### Hero Carousel Images
- `hero-1.jpg` - First slide
- `hero-2.jpg` - Second slide
- `hero-3.jpg` - Third slide
- `hero-4.jpg` - Fourth slide

### Property Images
- `property-1.jpg` - Luxury Colombo Apartment
- `property-2.jpg` - Modern Kandy Villa
- `property-3.jpg` - Beachfront Property
- `property-4.jpg` - Business Center

### About Section
- `about.jpg` - Team/company photo

---

## 🎨 Brand Customization

### Logo
Edit `components/navbar.tsx` - Replace "PM" with your logo (line 16)

### Colors
Edit `app/globals.css` - Update CSS variables:
```css
--primary: oklch(0.517 0.147 142.476);    /* Green */
--secondary: oklch(0.716 0.135 61.856);   /* Dark Yellow */
```

### Font
Currently using Geist (from next/font/google). To change:
1. Edit `app/layout.tsx` - Lines 2-3
2. Import new font from Google Fonts
3. Update `tailwind.config.ts`

---

## 📝 SEO Customization

Edit `app/layout.tsx` - Update metadata:
```
title: 'ProManage - Property Management & Rental Services Sri Lanka'
description: 'Professional property management...'
keywords: 'property management, rental services...'
```

---

## 🔄 Quick Configuration Checklist

### Phase 1: Basic Info (5 minutes)
- [ ] Phone number
- [ ] Email address
- [ ] WhatsApp link
- [ ] Business address

### Phase 2: Business Details (10 minutes)
- [ ] Company name
- [ ] Business hours
- [ ] Location details
- [ ] Services list

### Phase 3: Pricing & Content (15 minutes)
- [ ] Pricing plans
- [ ] Property listings
- [ ] Service descriptions
- [ ] Testimonials

### Phase 4: Branding (10 minutes)
- [ ] Logo/brand icon
- [ ] Color scheme (optional)
- [ ] Hero images
- [ ] Property images

### Phase 5: Testing (10 minutes)
- [ ] Test all links
- [ ] Mobile responsive check
- [ ] Form validation
- [ ] Contact methods

---

## 🚀 After Configuration

1. Test the website locally
2. Deploy to Vercel
3. Set up custom domain
4. Configure email notifications
5. Monitor analytics

---

## 📱 Contact Form Integration

The contact form currently simulates submission. To make it functional:

1. Set up an email service (Resend, SendGrid, etc.)
2. Create a backend API route
3. Update `components/contact-form.tsx` with actual API call

Example route: `/api/contact`

---

## 🎯 Additional Customizations

### Add More Services
Edit `app/services/page.tsx` - Add to the `services` array

### Add More Properties
Edit `components/properties-section.tsx` - Add to the `properties` array

### Modify Home Sections
Edit `app/page.tsx` - Add/remove sections as needed

### Custom Animations
Modify Tailwind animate classes in any component

### Change Breakpoints
Edit `tailwind.config.ts` for responsive design tweaks

---

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- TypeScript: https://www.typescriptlang.org/docs

---

## ✅ Final Checklist Before Launch

- [ ] All contact information updated
- [ ] Services accurately described
- [ ] Pricing correctly set
- [ ] Real property images added
- [ ] Testimonials from actual clients
- [ ] Business hours correct
- [ ] All links working
- [ ] Mobile tested
- [ ] SEO metadata updated
- [ ] Ready to deploy!

---

**Your website is ready to launch! 🚀**

For any questions, refer to README.md or QUICKSTART.md
