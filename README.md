# OnlineMenus

Marketing website for OnlineMenus - websites for takeaways in Birmingham.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Google Fonts (Fraunces + DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Platforms

Build for production:

```bash
npm run build
npm run start
```

## Customisation

### Update Contact Details

Edit `src/app/page.js`:
- Phone number in the Contact section
- Email address
- Any placeholder text

### Update Pricing

Edit the `packages` array in the `Packages` component in `src/app/page.js`.

### Update Colours

Edit `tailwind.config.js` to change the brand colour palette.

### Add Analytics

Add Google Analytics or other tracking in `src/app/layout.js`.

## Structure

```
src/app/
├── globals.css    # Global styles and Tailwind
├── layout.js      # Root layout with metadata
└── page.js        # Main landing page (all sections)
```

## Notes

- Mobile-first responsive design
- Smooth scroll enabled
- Contact form needs backend integration (currently just shows success state)
- Animations trigger on page load

## To Do

- [ ] Add real phone number
- [ ] Set up contact form backend (Formspree, Netlify Forms, or custom)
- [ ] Add demo site link
- [ ] Add testimonials once you have customers
- [ ] Set up domain and deploy
