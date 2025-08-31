# Monster Fitness - Gym Website

A modern, responsive gym website built with React, TypeScript, and Tailwind CSS.

## Features

- 🏋️ Modern gym website design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI with Tailwind CSS and custom animations
- 📞 Contact integration (Phone, WhatsApp, Instagram)
- 🖼️ Interactive gallery
- 💰 Pricing plans display
- 🕒 Gym timings information
- 📍 Location with Google Maps integration

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Express.js (for API routes)
- **Deployment**: Vercel
- **UI Components**: Radix UI, Lucide React
- **Styling**: Custom CSS with premium effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd sagar-fuul
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Start development server
```bash
npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the configuration and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── api/                 # Serverless API functions
├── client/             # React frontend
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   └── App.tsx        # Main app component
├── server/            # Express server (for development)
├── public/            # Static assets
└── vercel.json        # Vercel configuration
```

## Environment Variables

Create a `.env` file with:

```env
NODE_ENV=production
PING_MESSAGE=pong
```

## Contact Information

- **Phone**: +91 75670 04025
- **Instagram**: @monster_fitness_98
- **Owner**: Sagar Chauhan (@supreme_soul_4224)
- **Location**: Ankleshwar, Gujarat

## License

Private project for Monster Fitness gym.