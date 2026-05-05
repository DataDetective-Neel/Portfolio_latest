# Data Detective Portfolio

A modern, interactive web application showcasing data detective case studies and investigations. Built with React and Vite for fast development and optimized production builds.

## Features

- **Case Card Display**: Browse through different case studies with detailed information
- **Case Files**: Access and manage case-specific files and documentation
- **Interactive Modal System**: View detailed case information with an elegant modal interface
- **Timeline Visualization**: Track the progression of investigations over time
- **Workflow Documentation**: Understand the investigation methodology and process
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Hero Section**: Engaging landing page with navigation

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Styling Support**: PostCSS
- **Linting**: ESLint
- **Development Server**: HMR (Hot Module Replacement) enabled

## Project Structure

```
src/
├── components/
│   ├── CaseCard.jsx      # Individual case card component
│   ├── CaseFiles.jsx     # Case files display
│   ├── CaseModal.jsx     # Modal for detailed case view
│   ├── Hero.jsx          # Landing page hero section
│   ├── Navbar.jsx        # Navigation bar
│   ├── Timeline.jsx      # Investigation timeline
│   └── WorkFlow.jsx      # Investigation workflow steps
├── data/
│   └── portfilioData.js  # Case data and portfolio information
├── pages/                # Page components
├── App.jsx               # Main App component
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production-ready build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Configuration Files

- **vite.config.js**: Vite build and development configuration
- **tailwind.config.js**: Tailwind CSS customization
- **postcss.config.js**: PostCSS plugin configuration
- **eslint.config.js**: ESLint rules and configuration

## Browser Support

This application works on all modern browsers with ES6+ support.

## License

This project is part of a portfolio showcase.

## Contributing

Contributions and suggestions are welcome. Please feel free to submit issues or pull requests.



**WORK IN PROGRESS** 
