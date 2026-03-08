# AcmeProduct - Landing Page

A static product/service landing page built with React, Vite, and Bootstrap. All content uses placeholders and is completely static with no API dependencies.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is in use).

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
testGPTUpdate/
├── src/
│   ├── App.jsx          # Main landing page component
│   ├── main.jsx         # React entry point
│   └── styles.css       # Custom styles
├── index.html           # HTML shell
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## Features

- **Responsive Design**: Works seamlessly on all devices using Bootstrap grid and utilities
- **Static Content**: No API calls or backend dependencies required
- **Placeholder Content**: All text, images, and links use ready-to-customize placeholders
- **Accessibility**: Semantic HTML, ARIA labels, and proper heading hierarchy
- **Modern Stack**: React 18, Vite for fast development, Bootstrap 5.3 for styling

## Landing Page Sections

1. **Navigation**: Fixed navbar with anchor links to all sections
2. **Hero**: Eye-catching headline with call-to-action buttons
3. **Social Proof**: Logo row of trusted companies
4. **Features**: 6 feature cards with icons and descriptions
5. **How It Works**: 3-step onboarding process
6. **Pricing**: 3-tier pricing plans (Starter, Pro, Team)
7. **Testimonials**: Customer reviews with avatars
8. **FAQ**: Accordion-style frequently asked questions
9. **CTA Section**: Final call-to-action banner
10. **Footer**: Links, contact info, and newsletter signup

## Customization

All content uses easy-to-find placeholders:
- Product name: `AcmeProduct`
- Email: `hello@example.com`
- Company names: `Company A`, `Company B`, etc.
- Testimonials and pricing: Static placeholder text

Simply search and replace these placeholders to customize with your own content.

## Technologies Used

- **React 18.2**: UI library
- **Vite 5.0**: Build tool and dev server
- **Bootstrap 5.3**: CSS framework for responsive design
- **React Router**: None required (single-page, anchor-link navigation)