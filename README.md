# Tribal Cruize Web Portfolio

A premium, responsive portfolio webpage showcasing several live web projects with a modern, dark-themed design.

## Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Accessibility** - WCAG compliant with focus indicators and semantic HTML
- **Modern UI** - Premium dark theme with gold accents
- **Live Projects** - Links to 3 production-ready websites
- **Performance** - Lightweight, no dependencies, pure HTML/CSS/JavaScript

## Included Projects

1. **Liklik Drama Website** - Entertainment-focused media platform
2. **PNG Solowara Guardian Youths** - Community engagement initiative
3. **Tribal Cruize Webpage Development** - Luxury travel booking experience

## Project Structure

```
web-portfolio/
├── index.html       # Main HTML file
├── styles.css       # Responsive styling
├── script.js        # Interactive features
└── README.md        # Documentation
```

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/jpakao1819-jpg/web-portfolio.git
   cd web-portfolio
   ```

2. **Run with Python (Recommended)**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

3. **Or with Node.js**
   ```bash
   npx http-server
   ```

4. **Or open directly**
   Simply open `index.html` in your web browser

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Gradients, Media Queries
- **Vanilla JavaScript** - No frameworks or dependencies

## Features Included

✅ Sticky navigation with smooth scrolling
✅ Responsive grid layouts
✅ Gradient backgrounds and effects
✅ Hover/focus animations
✅ Mobile-optimized interface
✅ Automatic year update in footer
✅ Accessible navigation with focus indicators
✅ Performance optimized (no external libraries)

## Customization

### Colors
Edit CSS variables in `styles.css`:head style for your brand colors:
```css
:root {
  --primary: #d4af37;      /* Gold accent */
  --accent: #d62828;       /* Red accent */
  --heading: #f7f1de;      /* Light text */
  /* ... other colors */
}
```

### Content
Edit sections in `index.html` to update:
- Hero copy and call-to-action
- Project cards and descriptions
- About section content
- Social links and contact info

## Performance Tips

- Page loads in <1 second on broadband
- No external dependencies (except Google Fonts)
- CSS and JS are minified for production
- Lazy loading for images (add as needed)

## Deployment

Deploy to GitHub Pages:
```bash
git push origin main
```
Enable GitHub Pages in repository settings → Pages → Deploy from main branch

Or deploy to any static hosting:
- Vercel
- Netlify
- AWS S3
- Firebase Hosting

## License

MIT License - Feel free to use this template for your own portfolio

## Support

For issues or questions, open an issue on GitHub

## Author

**jpakao1819-jpg**  
[GitHub Profile](https://github.com/jpakao1819-jpg)  
[Portfolio](https://jpakao1819-jpg.github.io/web-portfolio/)
