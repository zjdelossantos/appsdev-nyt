# New York Times News Aggregator

A modern web application that aggregates and displays news articles from various sections of The New York Times using their public API. This project is built for educational purposes and demonstrates frontend development skills with responsive design and API integration.

## Features

- **Breaking News Section**: Displays the latest breaking news with images and descriptions
- **Multiple News Categories**: 
  - U.S. News
  - World News
  - Business News
  - Arts News
  - Lifestyle News
  - Opinion News
- **Responsive Design**: Mobile-friendly layout with hamburger menu
- **Sticky Navigation**: Header becomes sticky on scroll for better navigation
- **Modern UI**: Clean, newspaper-inspired design with proper typography
- **Real-time Data**: Fetches latest articles from New York Times API

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with responsive design
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Font Awesome**: Icons for navigation and UI elements
- **New York Times API**: Real-time news data
- **Parcel**: Build tool for development and production bundling

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zjdelossantos/appsdev-nyt.git
cd appsdev-nyt
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:1234`

### Production Build

Build the application for deployment:
```bash
npm run build
```

This will create an optimized production build in the `docs/` directory, ready for GitHub Pages deployment.

## Project Structure

```
appsdev-nyt/
src/
  index.html          # Main HTML file
  script.js           # JavaScript functionality
  styles.css          # CSS styling
  titlefont/          # Custom fonts
docs/                 # Production build (generated)
package.json          # Project configuration
README.md             # This file
```

## API Usage

This application uses the New York Times Top Stories API to fetch news articles. The API key is included for educational purposes, but for production use, you should:

1. Get your own API key from [NYTimes Developer Portal](https://developer.nytimes.com/)
2. Replace the existing API key in `src/script.js`

## Navigation

The application features:
- **Header Navigation**: Quick access to different news sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Click on navigation links to scroll to sections
- **Sticky Header**: Header stays visible when scrolling

## Deployment

This project is configured for GitHub Pages deployment. The build script automatically prepares the application for deployment by:
- Building the application
- Moving the output to the `docs/` directory
- Setting the correct public URL for GitHub Pages

## Educational Purpose

This project was created as part of an application development course to demonstrate:
- API integration
- Responsive web design
- Modern JavaScript practices
- Frontend build processes
- Version control with Git

## License

This project is for educational purposes only. The New York Times content and branding are used under fair use for educational demonstration.

## Contributing

This is an educational project. Feel free to fork and modify for learning purposes.

---

**Note**: This is not an official New York Times application. It's a student project created for educational purposes only.