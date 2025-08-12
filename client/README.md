# UrbanMandaiGlobal Landing Page

A modern, responsive landing page for UrbanMandaiGlobal built with React.js and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean and professional design with gradient accents
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Vite for optimal development experience
- 🎯 **SEO Friendly**: Semantic HTML structure and proper meta tags
- 🔧 **Customizable**: Easy to modify content and styling
- 📝 **Contact Form**: Functional contact form for lead generation

## Sections

1. **Header**: Navigation menu with mobile responsiveness
2. **Hero**: Main headline and call-to-action
3. **Services**: Showcase of digital marketing and development services
4. **About Us**: Company information and working process
5. **Portfolio**: Featured services and projects
6. **Contact**: Contact form and office locations
7. **Footer**: Company links and social media

## Technologies Used

- **React.js 19** - Modern React with latest features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd urban/client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add the logo**:
   - Place your `logo.png` file in the `public/` folder
   - The logo should be high quality and preferably in PNG format

## Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

3. **Make changes** to the components in `src/components/` and see live updates

## Building for Production

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Preview the production build**:
   ```bash
   npm run preview
   ```

3. **Deploy** the `dist/` folder to your hosting provider

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services showcase
│   ├── About.jsx       # About us section
│   ├── Portfolio.jsx   # Portfolio section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer section
├── App.jsx             # Main app component
├── App.css             # Custom styles
├── index.css           # Global styles and Tailwind
└── main.jsx           # App entry point
```

## Customization

### Colors
The color scheme uses Tailwind's color palette. You can customize colors in the components by modifying the gradient classes like:
- `from-blue-500 to-purple-500`
- `from-orange-500 to-pink-500`

### Content
Update the content in each component file to match your business information:
- Company details in `About.jsx`
- Services in `Services.jsx`
- Contact information in `Contact.jsx`

### Styling
Modify the Tailwind classes in the components to adjust:
- Spacing (`py-20`, `px-4`, etc.)
- Typography (`text-3xl`, `font-bold`, etc.)
- Layout (`grid`, `flex`, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: Minimal bundle size with tree shaking
- **Loading Speed**: Fast initial load with optimized assets

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Traditional Hosting
1. Run `npm run build`
2. Upload the contents of `dist/` folder to your web server
3. Ensure your server is configured for single-page applications

## Support

For any questions or issues:
- Check the component files for implementation details
- Review Tailwind CSS documentation for styling options
- Ensure all dependencies are properly installed

## License

This project is created for UrbanMandaiGlobal. All rights reserved.

---

**Built with ❤️ using React.js and Tailwind CSS**
