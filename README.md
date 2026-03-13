# ProManage - Professional Property Management Website

A modern, professional property management and rental services website built with Next.js, TypeScript, and Tailwind CSS. Designed for Sri Lanka's property management market with a green and dark yellow color theme.

## Features

### Pages
- **Home Page**: Hero carousel with animations, about section, trust statistics, featured properties, rental features, service overview, testimonials, pricing plans, and CTA
- **Services Page**: Comprehensive service listings with detailed information for each service category
- **Contact Page**: Contact form with validation, multiple contact methods (phone, email, WhatsApp), business hours, and location information

### Service Categories
1. **Rent & Payment Management** - Online payment collection, automated reminders, secure gateway
2. **Property Maintenance & Cleaning** - Regular inspections, emergency repairs, cleaning services
3. **Tenant Management** - Background checks, lease management, dispute resolution
4. **Housekeeping & Daily Operations** - Weekly cleaning, security patrols, utility monitoring
5. **Legal & Compliance Services** - Legal documentation, compliance support, tax assistance
6. **Pickup & Dropoff Services** - Key management, property inspections, document courier
7. **Additional Services** - Electrical maintenance, CCTV systems, gas equipment, equipment maintenance

### Subscription Plans
- **Monthly**: Rs. 300/month
- **6 Months**: Rs. 16,000 (save 11%)
- **Yearly**: Rs. 32,000 (save 12%)

### Design Features
- **Color Scheme**: Green (#10b981) primary, Dark Yellow (#ca8a04) secondary
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Modern Animations**: Smooth transitions, hover effects, scroll animations
- **Component-Based**: Fully modular component architecture
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form (for contact form)
- **Image Processing**: Native HTML image elements

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd promanage
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
promanage/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles with theme variables
│   ├── services/
│   │   └── page.tsx         # Services page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── navbar.tsx           # Navigation component
│   ├── footer.tsx           # Footer component
│   ├── hero-carousel.tsx    # Hero section with slideshow
│   ├── about-section.tsx    # About/company info
│   ├── trust-section.tsx    # Stats and trust indicators
│   ├── properties-section.tsx # Featured properties
│   ├── rental-features-section.tsx # Rental features
│   ├── service-overview-section.tsx # Service preview
│   ├── testimonials-section.tsx # Client testimonials
│   ├── pricing-section.tsx  # Subscription plans
│   ├── cta-section.tsx      # Call to action
│   ├── service-card.tsx     # Service detail card
│   ├── contact-form.tsx     # Contact form component
│   └── ui/                  # shadcn/ui components
├── public/                  # Static assets and images
├── lib/
│   └── utils.ts            # Utility functions (cn for class merging)
└── package.json
```

## Customization

### Update Contact Information
Edit these files to add your actual contact details:
- `components/navbar.tsx` - WhatsApp link
- `components/footer.tsx` - Phone, email, WhatsApp
- `app/contact/page.tsx` - All contact methods and business hours

### Update Pricing Plans
Modify `components/pricing-section.tsx` to adjust:
- Plan names and prices
- Features included in each plan
- Pricing currency (currently Rs. for Sri Lankan Rupees)

### Modify Services
Edit `app/services/page.tsx` to add/remove service categories and details

### Change Theme Colors
Update the CSS variables in `app/globals.css`:
- `--primary`: Green color (currently #10b981)
- `--secondary`: Dark Yellow color (currently #ca8a04)

### Update Images
Replace hero and property images in the `public/` folder:
- `hero-1.jpg` through `hero-4.jpg` - Hero carousel images
- `property-1.jpg` through `property-4.jpg` - Property listing images
- `about.jpg` - About section image

## Key Components

### Hero Carousel
- Auto-rotating slides with 5-second intervals
- Navigation buttons and dot indicators
- Smooth fade transitions
- Responsive design with mobile-first approach

### Service Cards
- Icon-based visual representation
- Detailed feature lists with checkmarks
- Hover effects and animations
- Responsive grid layout

### Pricing Section
- Three-tier subscription model
- "Most Popular" highlight for recommended plan
- Feature comparison
- Responsive card layout

### Contact Form
- Form validation with error handling
- Multiple input types (text, email, select, textarea)
- Success/error alerts
- Accessibility features

## Performance Optimizations

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Component code splitting
- Responsive images for mobile devices
- Semantic HTML for better SEO

## SEO Features

- Optimized metadata in `layout.tsx`
- Semantic HTML structure
- Open Graph tags ready
- Mobile-responsive design
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development Tips

1. **Hot Module Replacement**: Changes are reflected immediately during development
2. **Tailwind Utilities**: Use Tailwind classes directly in JSX
3. **Component Composition**: Break large sections into smaller reusable components
4. **Type Safety**: Full TypeScript support for enhanced development experience

## Future Enhancements

- Property image gallery
- Online booking system
- Client dashboard
- Property management portal
- Blog section
- FAQ section
- Live chat support
- Multi-language support

## Support & Contact

For questions or issues:
- Email: info@promanage.lk
- Phone: +94 XXXXXXXXX
- WhatsApp: +94 XXXXXXXXX

## License

All rights reserved © 2024 ProManage

---

Built with ❤️ for Sri Lanka's Property Management Industry
