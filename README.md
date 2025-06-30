# 🌟 WellNest.AI - Your Personal Wellness Companion

A comprehensive AI-powered wellness platform that provides personalized health and wellness guidance through specialized AI agents.

![WellNest.AI](https://img.shields.io/badge/WellNest.AI-Wellness%20Platform-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.x-yellow?style=flat-square)

## 🎯 Overview

WellNest.AI is a modern, responsive web application that combines multiple AI agents to provide comprehensive wellness support. Each agent specializes in different aspects of health and wellness, working together to create a personalized experience for users.

## 🤖 AI Agents

### 🎭 MoodMate
- **Purpose**: Mood tracking and emotional wellness
- **Features**: Sentiment analysis, mood-based music recommendations, emotional support
- **APIs**: Spotify, HuggingFace

### 🍎 NutriCoach  
- **Purpose**: Nutrition guidance and meal planning
- **Features**: Personalized meal recommendations, nutrition tracking, dietary advice
- **APIs**: Edamam

### 💪 FlexGenie
- **Purpose**: Fitness and exercise guidance
- **Features**: Workout recommendations, exercise videos, fitness tracking
- **APIs**: YouTube Data API

### 🧠 MindPal
- **Purpose**: Mental wellness and mindfulness
- **Features**: Meditation guidance, stress management, mental health support
- **APIs**: Groq AI

### 📊 InsightBot
- **Purpose**: Health analytics and insights
- **Features**: Progress tracking, health insights, data visualization
- **APIs**: Internal analytics

## 🚀 Features

- ✨ **Modern UI/UX**: Clean, responsive design with dark/light mode support
- 🤖 **AI-Powered Conversations**: Natural language interactions with specialized agents
- 📱 **Mobile-First Design**: Optimized for mobile devices with PWA capabilities
- 🔐 **Secure Authentication**: User authentication and session management
- 🎨 **Customizable Themes**: Light and dark mode with smooth transitions
- 📊 **Real-time Analytics**: Live insights and progress tracking
- 🔄 **Agent Collaboration**: Agents work together for comprehensive wellness support

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Wouter** for routing
- **TanStack Query** for data fetching

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **Groq AI** for language processing
- **Multiple API integrations** for specialized features

### Database
- **In-memory storage** (default)
- **Supabase** support (optional)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wellnest-ai.git
   cd wellnest-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys (see [API Setup](#-api-setup) section)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 API Setup

### Required APIs

#### 🤖 Groq AI (Required)
1. Visit [Groq Console](https://console.groq.com)
2. Sign up and create an API key
3. Add to `.env`:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

### Optional APIs (for enhanced features)

#### 🎵 Spotify (MoodMate)
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create an app and get credentials
3. Add to `.env`:
   ```
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

#### 🍽️ Edamam (NutriCoach)
1. Visit [Edamam Developer](https://developer.edamam.com)
2. Create an account and application
3. Add to `.env`:
   ```
   EDAMAM_APP_ID=your_edamam_app_id
   EDAMAM_APP_KEY=your_edamam_app_key
   ```

#### 📺 YouTube (FlexGenie)
1. Go to [Google Cloud Console](https://console.developers.google.com)
2. Enable YouTube Data API v3
3. Create API key and add to `.env`:
   ```
   YOUTUBE_API_KEY=your_youtube_api_key
   ```

#### 🤗 HuggingFace (MoodMate)
1. Visit [HuggingFace](https://huggingface.co)
2. Create account and generate access token
3. Add to `.env`:
   ```
   HUGGINGFACE_API_KEY=your_huggingface_token
   VITE_HUGGINGFACE_API_KEY=your_huggingface_token
   ```

## 📁 Project Structure

```
wellnest-ai/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── contexts/      # React contexts
├── server/                # Backend Node.js application
│   ├── agents/           # AI agent implementations
│   ├── services/         # External API services
│   └── routes.ts         # API routes
├── shared/               # Shared types and schemas
└── docs/                # Documentation files
```

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:auth    # Test authentication system
npm run test:api     # Test API endpoints

# Linting & Formatting
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Set up environment variables on your server

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@wellnest.ai
- 💬 Discord: [Join our community](https://discord.gg/wellnest-ai)
- 📖 Documentation: [Full docs](https://docs.wellnest.ai)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/wellnest-ai/issues)

## 🙏 Acknowledgments

- [Groq](https://groq.com) for AI language processing
- [Spotify](https://developer.spotify.com) for music integration
- [Edamam](https://developer.edamam.com) for nutrition data
- [YouTube](https://developers.google.com/youtube) for fitness content
- [HuggingFace](https://huggingface.co) for ML models

## 📊 Project Status

- ✅ Core AI agents implemented
- ✅ Modern UI/UX with dark mode
- ✅ Mobile-responsive design
- ✅ Authentication system
- ✅ Real-time chat interface
- 🔄 Advanced analytics (in progress)
- 🔄 PWA features (planned)
- 🔄 Multi-language support (planned)

---

<div align="center">
  <strong>Built with ❤️ for better wellness</strong>
  <br>
  <sub>WellNest.AI - Your Personal Wellness Companion</sub>
</div>
