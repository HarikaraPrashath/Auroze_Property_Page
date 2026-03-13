# ProManage - Deployment Guide

Complete guide to deploying your property management website to production.

## 🎯 Deployment Options

### Option 1: Vercel (Recommended - 5 minutes)
Vercel is the easiest and best option for Next.js apps.

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up/Login

3. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo
   - Click "Import"

4. **Configure Project**
   - Project name: promanage (or your preferred name)
   - Framework: Next.js
   - Environment: Leave default

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Get your live URL!

6. **Add Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 2: Netlify (Alternative - 5 minutes)

1. **Connect GitHub**
   - Go to https://netlify.com
   - Sign up/Login
   - Connect GitHub account

2. **Import Site**
   - Click "New site from Git"
   - Select your GitHub repo
   - Choose main branch

3. **Build Settings**
   ```
   Build Command: npm run build
   Publish Directory: .next/standalone
   ```

4. **Environment**
   - Set Node version: 18+

5. **Deploy**
   - Click "Deploy site"
   - Get live URL!

---

### Option 3: Self-Hosted (Advanced)

#### Requirements:
- Node.js 18+
- PM2 or similar process manager
- Nginx/Apache web server
- SSL certificate

#### Steps:
1. **Build**
   ```bash
   npm run build
   ```

2. **Start Server**
   ```bash
   npm start
   ```

3. **Configure Reverse Proxy**
   - Point your domain to the app
   - Set up SSL

---

## 📋 Pre-Deployment Checklist

### Configuration
- [ ] Phone number updated
- [ ] Email configured
- [ ] WhatsApp link set
- [ ] Business hours correct
- [ ] Address updated
- [ ] Services listed correctly
- [ ] Pricing accurate
- [ ] Images added to public/

### Testing
- [ ] Local development works (`npm run dev`)
- [ ] All links working
- [ ] Mobile responsive checked
- [ ] Form submission tested
- [ ] Contact methods functional
- [ ] No console errors

### Content
- [ ] No placeholder text remaining
- [ ] All "XXXXXXXXX" replaced with real data
- [ ] Real property images added
- [ ] Real testimonials included
- [ ] Logo/branding updated

### SEO
- [ ] Metadata updated in layout.tsx
- [ ] Keywords relevant
- [ ] Description compelling
- [ ] OG tags ready

---

## 🚀 Deploying with Vercel (Step-by-Step)

### Step 1: Prepare Repository

```bash
# Initialize git if needed
git init

# Add all files
git add .

# Commit
git commit -m "ProManage - Initial commit"

# Push to GitHub (assuming remote is set)
git push origin main
```

### Step 2: Create Vercel Account
- Go to https://vercel.com
- Click "Sign Up"
- Choose "GitHub" login
- Authorize Vercel

### Step 3: Import Project
- After login, click "Add New..."
- Select "Project"
- Click "Continue with GitHub"
- Find your repository
- Click "Import"

### Step 4: Configure Build Settings
Keep defaults:
- Framework: Next.js (auto-detected)
- Root Directory: . (current)
- Environment: Production

### Step 5: Deploy
- Click "Deploy"
- Wait for build to complete (1-2 min)
- Get your URL: `https://projectname.vercel.app`

### Step 6: Add Custom Domain
- Go to Project Settings
- Click "Domains"
- Add your domain: `promanage.lk`
- Update DNS records at your registrar
- Wait for DNS propagation (can take 24-48 hours)

---

## 📊 Environment Variables

Currently, no environment variables are required. If you add features that need them:

1. Go to Vercel Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

---

## 🔄 Post-Deployment

### Verify Deployment
1. Visit your live URL
2. Check all pages load
3. Test contact form
4. Verify images display
5. Test on mobile

### Monitor Performance
- Vercel provides analytics dashboard
- Check performance metrics
- Monitor error rates
- Track page load times

### Enable Analytics
Analytics from Vercel are already integrated. Check Vercel dashboard for:
- Page views
- User countries
- Device types
- Performance metrics

---

## 🔐 Security & Best Practices

### HTTPS
✅ Automatic with Vercel  
✅ SSL certificate included  
✅ Auto-renewal  

### Headers
Add security headers in `next.config.mjs`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
      ],
    },
  ]
}
```

---

## 🔄 Continuous Deployment

### Automatic Updates
Every push to main branch automatically deploys:
1. Push code to GitHub
2. Vercel detects changes
3. Builds automatically
4. Deploys to production
5. Updates live instantly

### Rollback
If something breaks:
1. Go to Vercel Deployments
2. Find previous working deployment
3. Click "Promote to Production"
4. Instant rollback!

---

## 📱 Testing Production

### Desktop
- Chrome, Firefox, Safari, Edge
- Full page screenshot
- Test all interactions

### Mobile
- iPhone (iOS)
- Android device
- iPad/tablet
- Test touch interactions

### Tablets
- iPad
- Android tablets
- Landscape/portrait

### Network
- Fast 4G
- Slow 3G
- Offline fallback

---

## 📈 Performance Optimization

### Current Settings (Pre-optimized)
✅ Image optimization ready  
✅ Code splitting enabled  
✅ CSS minification  
✅ JavaScript minification  
✅ Font optimization  

### Monitor with Lighthouse
1. Open DevTools
2. Go to Lighthouse
3. Run audit
4. Fix issues

### Target Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🐛 Troubleshooting Deployment

### Build Fails
**Check:**
- Node version compatibility
- Dependencies installed
- No TypeScript errors
- Build log for specific error

**Fix:**
```bash
npm install
npm run build
# Check output
```

### Site Not Loading
**Check:**
- Deployment completed
- DNS propagated (if custom domain)
- Browser cache clear
- CORS settings

### Contact Form Not Working
Currently simulates submission. To make functional:
1. Set up backend API
2. Configure email service
3. Update contact-form.tsx

### Images Not Showing
**Check:**
- Image files in public/
- Correct image paths
- Image format support
- File permissions

---

## 📞 Support Resources

### For Deployment Issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs/deployment
- GitHub Pages: https://pages.github.com

### For Content Issues:
- Refer to CONFIG_TEMPLATE.md
- Check component files
- Review README.md

---

## 🎯 Go-Live Checklist

### Day Before Launch
- [ ] All configurations complete
- [ ] Test site thoroughly
- [ ] Backup current site (if migrating)
- [ ] Notify team

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages work
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Update DNS (if custom domain)

### After Launch
- [ ] Monitor error rates
- [ ] Check analytics
- [ ] Respond to inquiries quickly
- [ ] Collect feedback

---

## 📊 Maintenance After Launch

### Weekly
- Check error logs
- Monitor performance
- Respond to inquiries

### Monthly
- Update content as needed
- Review analytics
- Check for updates

### Quarterly
- Major feature additions
- Content refresh
- Performance review

---

## 🎉 Congratulations!

Your property management website is now live and ready to serve your customers!

### What's Next?
1. Share your site with people
2. Start collecting inquiries
3. Monitor performance
4. Gather feedback
5. Iterate and improve

---

## 📝 Deployment Summary

Your website is deployed at:
```
Production URL: [Will be provided after deployment]
Domain: [Your custom domain here]
Status: Live and running
Uptime: 99.95% guaranteed (Vercel)
```

---

## 🚀 Ready to Deploy?

```bash
# Final steps:
git add .
git commit -m "Ready for production"
git push origin main

# Then go to Vercel and watch it deploy!
```

**Your website will be live in minutes! 🎊**

---

Built with ❤️ for Sri Lanka's Property Management Industry  
Ready to help you grow your business online!
