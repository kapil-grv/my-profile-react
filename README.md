# Portfolio React App

A modern React portfolio website converted from the original HTML/CSS/JS template. This is a professional portfolio showcasing GIS engineering and development expertise.

## Features

- ✨ Modern React implementation with hooks
- 🎨 Responsive design for all devices
- 📱 Mobile-friendly sidebar navigation  
- 🖼️ Smooth scroll navigation
- 💫 Intersection Observer animations
- 🎯 Organized component structure
- 🚀 Fast and optimized

## Tech Stack

- **React 18** - UI library
- **React Scroll** - Smooth scroll navigation
- **React Intersection Observer** - Scroll animations
- **Custom CSS** - Styling (ported from original)

## Project Structure

```
react_app/
├── public/
│   ├── images/          # All portfolio images
│   ├── fonts/           # Icon fonts
│   └── index.html       # HTML template
├── src/
│   ├── components/      # React components
│   │   ├── Sidebar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Counter.js
│   │   ├── Skills.js
│   │   ├── Demos.js
│   │   ├── ToolsPackages.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── App.js          # Main app component
│   ├── App.css         # Main styles
│   ├── icomoon.css     # Icon font styles
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Installation

1. **Clone or navigate to the react_app directory**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Copy assets** (if not already done)
   
   You need to copy the following from the v1 directory:
   - `v1/images/*` → `react_app/public/images/`
   - `v1/fonts/icomoon/*` → `react_app/public/fonts/icomoon/`

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production to the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## Customization

### Update Personal Information

1. **Sidebar** (`src/components/Sidebar.js`)
   - Update profile image path
   - Change name and title
   - Update social media links

2. **About** (`src/components/About.js`)
   - Modify bio text
   - Update service cards

3. **Experience** (`src/components/Experience.js`)
   - Add/remove work experiences
   - Update company names, dates, descriptions

4. **Education** (`src/components/Education.js`)
   - Update educational background

5. **Skills** (`src/components/Skills.js`)
   - Add/remove skill icons
   - Update technology list

6. **Blog/Papers** (`src/components/Blog.js`)
   - Add research papers or blog posts

7. **Contact** (`src/components/Contact.js`)
   - Update email and phone number

### Styling

The main styles are in `src/App.css`. Key color variables:
- Primary: `#2c98f0` (blue)
- Accent colors: `#ec5453`, `#f9bf3f`, `#a84cb8`, `#2fa499`, `#4054b2`

### Images

Place your images in `public/images/` and reference them as:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

Or for background images:
```jsx
style={{ backgroundImage: 'url(/images/your-image.jpg)' }}
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload `build` folder contents

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lazy loading with Intersection Observer
- Optimized images
- Component-based architecture
- Minimal bundle size

## Credits

Original template design converted to React.
Fonts: Google Fonts (Quicksand, Playfair Display)
Icons: Icomoon

## License

This project is for personal portfolio use.

## Support

For issues or questions, please refer to the React documentation:
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://create-react-app.dev/)

---

**Happy Coding! 🚀**
