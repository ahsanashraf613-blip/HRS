# HRA Accountant Website 🎯

A modern, animated multi-page website for HRA Accountant — a leading accounting and tax services firm in Ireland. Built with **pure HTML, CSS, and JavaScript** (no frameworks or build tools required).

## ✨ Features

### 🎨 **Design & Animations**
- Modern dark SaaS theme with emerald green accents
- Interactive particle canvas (mouse-reactive) in hero section
- Scroll-triggered reveal animations (fade, slide, zoom)
- Smooth page transitions with fade effects
- Rotating ring borders and floating glow orbs
- Glass-morphism navigation that becomes frosted on scroll
- Auto-scrolling marquee trust bar
- Shimmer sweep effects on buttons
- Drag & drop file upload zones
- Smooth accordion FAQ with expand/collapse

### 📱 **Responsive & Accessible**
- Fully responsive design (mobile, tablet, desktop)
- Mobile hamburger navigation menu
- Accessible form inputs and interactive elements
- Smooth scrolling behavior

### 🌐 **Pages Included**
1. **Home** - Hero, services, pricing, how it works, testimonials, FAQ
2. **About Us** - Company story, values, who we help
3. **Contact Us** - Contact information and inquiry form
4. **Register a Company** - Comprehensive company registration form
5. **Service Pages** - 8 dynamic service detail pages:
   - Accounts
   - Accounting + Bookkeeping
   - Taxation
   - Accountants for Medical Professionals
   - Business Set-Up
   - Individual Services
   - Corporate Services
   - Virtual Assistant Services

### ⚙️ **Technical Features**
- Client-side routing (no server required for navigation)
- Form submission handling
- Scroll progress bar
- Counter animations for statistics
- Intersection Observer for scroll reveals
- Mobile-responsive hamburger menu
- Smooth page scroll to top on navigation
- All features work without external dependencies

## 🚀 How to Use

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Fork this repository
# 2. Go to Settings → Pages
# 3. Set Source to "main" branch
# 4. Your site will be live at: https://yourusername.github.io/hra-accountant-website
```

### Option 2: Local Development
```bash
# Using Python (Mac/Linux/Windows)
cd hra-accountant-website
python3 -m http.server 8000

# Then open: http://localhost:8000
```

Or use Node.js:
```bash
npx serve .
```

Or use VS Code Live Server extension:
- Right-click `index.html`
- Select "Open with Live Server"

## 📁 Project Structure

```
hra-accountant-website/
├── index.html          ← Main entry point (all code in one file)
├── README.md           ← This file
├── LICENSE             ← MIT License
└── .gitignore          ← Git ignore file
```

**Note:** This is a single-file website. All HTML, CSS, and JavaScript are contained in `index.html` for easy deployment.

## 🎨 Customization

### Change Company Details
Open `index.html` and search for:
- `HRA Accountant` → Replace with your company name
- `089 989 3240` → Replace with your phone number
- `info@hraaccountant.ie` → Replace with your email
- `Unit 8, Greenhills Business Centre, Dublin, Ireland, D24 H340` → Replace with your address

### Change Colors
Look for the `:root` CSS section at the top of the `<style>` tag:
```css
:root{
  --bg:#0a0d14;              /* Dark background */
  --accent:#22d3a0;          /* Emerald green */
  --accent2:#3b82f6;         /* Blue accent */
  --text:#f0f4ff;            /* Light text */
  --muted:#8896b0;           /* Muted gray */
  /* ... more variables */
}
```

### Modify Services
Edit the service data object in the JavaScript section (search for `const serviceData = {`) to add or remove services.

### Update Pricing
Search for the pricing grid in the HTML and update the package descriptions and features.

## 🔗 Navigation Structure

| Link | Page | File |
|------|------|------|
| Home | Home page | index.html |
| About Us | About the company | index.html |
| Our Services | 8 service detail pages | Dynamic (index.html) |
| Contact Us | Contact form | index.html |
| Register | Company registration form | index.html |

## 📊 Services Offered

1. **Accounts** - Statutory accounts, management reports, bookkeeping, audit
2. **Accounting + Bookkeeping** - Full-service accounting for contractors
3. **Taxation** - Tax returns, VAT, payroll, tax planning
4. **Medical Professionals** - Specialist accounting for doctors, GPs, locums
5. **Business Set-Up** - Company formation, planning, advisory
6. **Individual Services** - Personal tax support
7. **Corporate Services** - Incorporation, annual returns, structuring
8. **Virtual Assistant Services** - Remote bookkeeping and admin support

## 🎯 Key Pages & Sections

### Home Page
- Hero section with particle effects
- Trust marquee bar
- 8 service cards
- 3 pricing packages
- How it works (3-step process)
- 6 reasons to choose HRA
- Comparison table
- 3 client testimonials
- FAQ accordion
- CTA sections

### Forms Included
- Contact form (with validation feedback)
- Company registration form (comprehensive)
- Both forms show success messages on submission

## 🌟 Design System

**Colors:**
- Primary Background: `#0a0d14` (Dark)
- Secondary Background: `#0e1220` (Slightly lighter)
- Accent (Emerald): `#22d3a0`
- Secondary Accent (Blue): `#3b82f6`
- Text: `#f0f4ff` (Light)
- Muted: `#8896b0` (Gray)

**Typography:**
- Headings: DM Serif Display (serif)
- Body: Sora (sans-serif)
- All fonts loaded from Google Fonts

**Spacing:**
- Mobile: 5% horizontal padding
- Desktop: Max-width 1100px-1400px centered containers

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 About HRA Accountant

**HRA Accountant** is a trusted accounting and tax services firm in Ireland, specializing in:
- Medical professionals (doctors, GPs, locums)
- Small businesses and startups
- IT contractors and self-employed
- International business setup

**Contact:**
- 📍 Unit 8, Greenhills Business Centre, Dublin, Ireland, D24 H340
- 📞 089 989 3240
- 📧 info@hraaccountant.ie
- 🌐 https://hraaccountant.ie

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://yourusername.github.io/hra-accountant-website`

### Other Platforms
- **Netlify** - Drag and drop the `index.html` file
- **Vercel** - Connect your GitHub repo
- **Traditional Web Hosting** - Upload `index.html` via FTP
- **Any HTTP Server** - Works on Apache, Nginx, Node.js, Python, etc.

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile hamburger menu
- Touch-friendly buttons and links
- Optimized image sizes
- Fast loading on slow connections
- Works offline after first load

## ⚡ Performance

- **Single file** = Fast loading
- **No external dependencies** = No third-party CDN requests needed (except Google Fonts)
- **Minimal CSS** = Optimized styles
- **Vanilla JavaScript** = No framework overhead
- **Lightweight animations** = 60fps performance

## 🐛 Troubleshooting

### Forms not working?
Forms show success messages but don't actually send emails by default. To enable email functionality, integrate with services like:
- Formspree
- EmailJS
- Firebase
- Your own backend API

### Images not loading?
This template doesn't include images by default. Add your own images in the HTML where indicated.

### Animations not smooth?
Check browser DevTools to ensure hardware acceleration is enabled. Most modern browsers support all animations out of the box.

## 📚 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hra-accountant-website.git
   cd hra-accountant-website
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser, OR
   - Use a local server (Python/Node/Live Server)

3. **Customize:**
   - Edit company details in `index.html`
   - Update colors in the CSS `:root` section
   - Modify services, pricing, and content as needed

4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: HRA Accountant website"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select main branch as source
   - Your site is now live!

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## ❓ FAQ

**Q: Can I use this for my own business?**
A: Yes! This is a template. Customize it with your own company details.

**Q: Do I need a server?**
A: No. This works on GitHub Pages, any static hosting, or even locally.

**Q: Can I modify the design?**
A: Absolutely! All code is editable. Feel free to customize colors, fonts, layout, etc.

**Q: Is this SEO friendly?**
A: Yes, it has proper semantic HTML. Consider adding meta tags for better SEO.

**Q: Can I add a blog?**
A: This template focuses on business services. For a blog, consider a CMS like WordPress.

---

**Built with ❤️ for HRA Accountant | Made with HTML, CSS & JavaScript**

For questions or support, contact: info@hraaccountant.ie
