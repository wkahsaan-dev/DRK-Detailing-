# DRK Detailing - DMV Area

Professional mobile car detailing services serving the DC, Maryland, and Virginia (DMV) area.

## Features

- **Premium Detailing:** Exterior and Interior services.
- **Mobile Service:** We come to you.
- **Modern Design:** Responsive, high-end aesthetic with smooth animations.
- **Contact Options:** Easy access via phone or email.

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (formerly Framer Motion)
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drk-detailing.git
   ```
2. Navigate to the project directory:
   ```bash
   cd drk-detailing
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Deployment to GitHub Pages

1. Update `vite.config.ts` to include the `base` path if you are deploying to a subpath:
   ```typescript
   // vite.config.ts
   export default defineConfig({
     base: '/your-repo-name/', // Change this to your repository name
     // ...
   });
   ```
2. Deploy using GitHub Actions (see `.github/workflows/deploy.yml`).

## License

This project is for demonstration purposes.
