# Quick Start Guide ⚡

## What You Have

A complete, modern website for HRA Accountant with:
- ✅ 5 main pages (Home, About, Contact, Register, Services)
- ✅ 8 service detail pages
- ✅ Beautiful animations and interactions
- ✅ Responsive mobile design
- ✅ Contact & registration forms
- ✅ All code in one HTML file (easy to deploy)

## Publish to GitHub Pages (2 Minutes)

### 1. Create GitHub Account
- Go to https://github.com
- Sign up (free)

### 2. Create New Repository
- Click **+** icon → **New repository**
- Name: `hra-accountant-website`
- Select **Public**
- Click **Create repository**

### 3. Upload Files
- Click **Add file** → **Upload files**
- Drag & drop these files:
  - `index.html`
  - `README.md`
  - `LICENSE`
  - `.gitignore`
- Click **Commit changes**

### 4. Enable GitHub Pages
- Go to **Settings**
- Click **Pages**
- **Source**: Select `main` branch
- Click **Save**
- Wait 1-2 minutes
- Your site is now live at: `https://yourusername.github.io/hra-accountant-website`

**That's it! Your website is published! 🎉**

---

## Running Locally (Optional)

### Option A: Python
```bash
cd hra-accountant-website
python3 -m http.server 8000
# Open http://localhost:8000
```

### Option B: Node.js
```bash
npx serve .
# Follow the URL shown in terminal
```

### Option C: VS Code
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

---

## Customizing Your Website

### Change Company Details
1. Open `index.html` in a text editor
2. Search for:
   - `HRA Accountant` → Your company name
   - `089 989 3240` → Your phone number
   - `info@hraaccountant.ie` → Your email
   - Address → Your address
3. Save and reload

### Change Colors
1. Open `index.html`
2. Find `:root{` near the top of the `<style>` section
3. Change these colors:
   ```css
   --bg:#0a0d14;           /* Dark background */
   --accent:#22d3a0;       /* Green accent */
   --text:#f0f4ff;         /* Light text */
   ```
4. Save and reload

### Update Services/Pricing
Search for these sections in `index.html`:
- **Services**: Look for `<div class="feature-card">`
- **Pricing**: Look for `<div class="package-card">`
- **FAQ**: Look for `<div class="faq-item">`

Edit the text inside these sections.

---

## File Structure

```
hra-accountant-website/
├── index.html              ← Your website (all code here!)
├── README.md               ← Project documentation
├── LICENSE                 ← MIT License
├── .gitignore              ← Git ignore file
├── GITHUB_SETUP.md         ← Detailed GitHub guide
├── package.json            ← Optional npm configuration
└── QUICK_START.md          ← This file
```

---

## Making Updates

### Using GitHub Web Interface
1. Go to your repository
2. Click on `index.html`
3. Click the edit icon (pencil)
4. Make changes
5. Click **Commit changes**
6. GitHub automatically updates your site!

### Using Git (Command Line)
```bash
# Edit your files
nano index.html        # or use your editor

# Save changes to GitHub
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

---

## Features

### Home Page
- Hero with particle effects
- 8 services with descriptions
- 3 pricing packages
- How it works (3 steps)
- Why choose HRA (6 reasons)
- Comparison table
- Client testimonials
- FAQ accordion
- Multiple CTAs

### About Page
- Company story
- Team values
- Who we help (6 sectors)
- Local knowledge + international capability

### Contact Page
- Contact information
- Office hours
- Free consultation CTA
- Contact form

### Register Page
- Step-by-step process
- Comprehensive form
- File uploads (passport, documents)
- Additional services options

### Service Pages (8 Total)
- Accounts
- Accounting + Bookkeeping
- Taxation
- Medical Professionals
- Business Set-Up
- Individual Services
- Corporate Services
- Virtual Assistant Services

---

## Design Features

✨ **Animations**
- Particle canvas (mouse-reactive)
- Scroll reveal effects
- Smooth page transitions
- Shimmer button effects
- Floating orbs
- Rotating rings

📱 **Responsive**
- Mobile menu
- Touch-friendly
- Tablet optimized
- Desktop perfect

🎨 **Modern Design**
- Dark theme
- Emerald accents
- Professional typography
- Clean spacing

---

## SEO Tips

To improve search visibility:

1. **Add Meta Tags** - In `<head>`:
   ```html
   <meta name="description" content="Accounting & tax services in Ireland">
   <meta name="keywords" content="accountant, tax, ireland">
   ```

2. **Add Open Graph** - In `<head>`:
   ```html
   <meta property="og:title" content="HRA Accountant">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="your-image-url">
   ```

3. **Add Google Analytics**:
   ```html
   <!-- Add before </head> -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_ID');
   </script>
   ```

---

## Form Integration (Optional)

The contact and register forms show success messages but don't actually send emails by default.

To enable email functionality, use one of these services:

### Formspree (Recommended)
1. Go to https://formspree.io
2. Create account
3. In your HTML, change form `action`:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

### EmailJS
1. Go to https://emailjs.com
2. Create account
3. Add their script and configure

### Firebase
More complex but fully customizable. See Firebase documentation.

---

## Browser Support

✅ Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## Performance

- ⚡ **Fast** - Single file, no frameworks
- 📱 **Responsive** - Works everywhere
- 🔒 **Secure** - GitHub Pages HTTPS
- 🌍 **Global** - CDN delivery

---

## Troubleshooting

### Website not showing?
- Wait 1-2 minutes for GitHub to deploy
- Hard refresh (Ctrl+Shift+R)
- Check Settings → Pages

### Changes not updating?
- Wait for redeployment
- Hard refresh browser
- Check GitHub Actions for errors

### Forms not working?
- Normal - they show success messages but don't send emails
- To enable: integrate Formspree or similar service

### Links broken?
- All internal links should work automatically
- External links: make sure URLs are correct

---

## Next Steps

1. ✅ Customize with your details
2. ✅ Publish to GitHub Pages
3. ✅ Share your link with clients
4. ✅ Add analytics (Google Analytics)
5. ✅ Set up custom domain (optional)
6. ✅ Integrate email forms (optional)

---

## Resources

- **GitHub Pages**: https://pages.github.com
- **Git Guide**: https://git-scm.com/book/en/v2
- **HTML/CSS/JS**: https://developer.mozilla.org
- **GitHub Docs**: https://docs.github.com

---

## Support

For help:
1. Check **README.md** for detailed info
2. See **GITHUB_SETUP.md** for publishing details
3. Search GitHub Docs or Stack Overflow

---

**You've got this! 🚀 Your website is ready to go!**

Questions? Check the README.md or GITHUB_SETUP.md files.
