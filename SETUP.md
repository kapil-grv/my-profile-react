# Setup Instructions

## Quick Start Guide

Follow these steps to get your React portfolio up and running:

### 1. Copy Assets

You need to manually copy the following files from the `v1` directory:

#### Copy Images
```bash
# From the profile root directory
cp -r v1/images/* react_app/public/images/
```

Or manually copy all files from `v1/images/` to `react_app/public/images/`

#### Copy Icon Fonts
```bash
# From the profile root directory
cp -r v1/fonts/icomoon/* react_app/public/fonts/icomoon/
```

Or manually copy all files from `v1/fonts/icomoon/` to `react_app/public/fonts/icomoon/`

### 2. Install Dependencies

```bash
cd react_app
npm install
```

This will install:
- React & React DOM
- react-scroll (for smooth scrolling)
- react-intersection-observer (for scroll animations)

### 3. Start Development Server

```bash
npm start
```

Your portfolio will open at `http://localhost:3000`

## Directory Structure After Setup

```
react_app/
├── public/
│   ├── images/
│   │   ├── about.jpg
│   │   ├── img_bg_1.jpg
│   │   ├── cover_bg_1.jpg
│   │   ├── awesome-lake.jpg
│   │   ├── Sentinel-2_H1.jpg
│   │   ├── groundwater.jpg
│   │   ├── Webmap.png
│   │   ├── Webgis.png
│   │   └── logo-small.6eef541e.svg
│   └── fonts/
│       └── icomoon/
│           ├── icomoon.eot
│           ├── icomoon.svg
│           ├── icomoon.ttf
│           └── icomoon.woff
```

## Troubleshooting

### Icons not showing
- Make sure you've copied the icomoon fonts to `public/fonts/icomoon/`
- Check browser console for 404 errors

### Images not loading
- Verify images are in `public/images/`
- Check image paths in components (should be `/images/filename.jpg`)

### Module not found errors
- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Port 3000 already in use
- Kill the process using port 3000, or
- Use a different port: `PORT=3001 npm start`

## Windows Users

If you're on Windows and commands don't work:

1. **Manually copy folders:**
   - Copy `v1\images` folder contents to `react_app\public\images\`
   - Copy `v1\fonts\icomoon` folder contents to `react_app\public\fonts\icomoon\`

2. **Or use PowerShell:**
   ```powershell
   # Copy images
   Copy-Item -Path "v1\images\*" -Destination "react_app\public\images\" -Recurse
   
   # Copy fonts
   Copy-Item -Path "v1\fonts\icomoon\*" -Destination "react_app\public\fonts\icomoon\" -Recurse
   ```

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Next Steps

1. **Customize content**: Update personal info in components
2. **Add your images**: Replace images in `public/images/`
3. **Update colors**: Modify color variables in `src/App.css`
4. **Test responsiveness**: Check on different screen sizes
5. **Deploy**: Use Netlify, Vercel, or GitHub Pages

Enjoy your new React portfolio! 🎉
