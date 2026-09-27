# Yogeswar Reddy — Modern Frontend Portfolio

An interactive, responsive portfolio website for **Yogeswar Reddy** (Frontend Software Engineer & UI/UX Designer). Built with **React 19**, **Framer Motion (Motion v12)**, **Tailwind CSS v4**, and **Vite 6**.

---

## 🚀 Live Demo & Highlights

- **Live URL**: [EduLearn AI](https://edu-learn-app.vercel.app/) • [Discover Chandigarh](https://discover-chandigarh.vercel.app/) • [Weather App](https://weather-forecast-yogi092503-gmailcoms-projects.vercel.app/)
- **10 Full-Stack & AI Projects Showcase**: Categorized into Web Apps, AI / Machine Learning, and Engineering Tools.
- **Fluid Micro-Interactions**: Powered by Motion v12 with 60fps hardware-accelerated animations and spring dynamics.
- **Zero-Layout-Shift Responsive Design**: Hand-tuned for mobile (320px+), tablet, and desktop viewports.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) with Functional Components & Hooks |
| **Animation Engine** | [Motion v12](https://motion.dev/) (`motion/react`) with springs & gestures |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` token definitions |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) with custom `ScrollManager` |
| **Bundler & Tooling** | [Vite 6](https://vite.dev/) with ESLint 9 Flat Config |
| **Interactivity** | Canvas Confetti & native Clipboard API |

---

## 📁 Project Directory Structure

```
├── public/                 # Static assets, logos, and project snapshots
│   └── projectImages/      # High-res project previews
├── src/
│   ├── components/
│   │   ├── About.jsx       # Biography, education, and credentials card
│   │   ├── Collaborate.jsx # Interactive contact section with 1-click email copy
│   │   ├── Footer.jsx      # Semantic footer with live IST time and quick links
│   │   ├── Landing.jsx     # Kinetic headline with inline responsive image reveal
│   │   ├── Marquee.jsx     # Seamless infinite ticker with hover pause
│   │   ├── Navbar.jsx      # Motion scroll header with animated mobile drawer
│   │   ├── ProjectCard.jsx # High-performance reusable card with live / github links
│   │   ├── Projects.jsx    # Homepage featured projects grid (top 4)
│   │   ├── ProjectsPage.jsx# Complete catalog with real-time search & category tabs
│   │   ├── Skills.jsx      # Interactive categorized skills accordion & badges
│   │   └── Video.jsx       # Cinematic parallax visual showcase banner
│   ├── data/
│   │   ├── projects.js     # Single-source-of-truth project repository
│   │   └── skills.js       # Structured technical competencies & proficiency tags
│   ├── App.jsx             # Top-level routes with automatic hash & scroll management
│   ├── index.css           # Tailwind v4 theme, Google fonts, custom scrollbars
│   └── main.jsx            # React root entry point
├── eslint.config.js        # Strict ESLint 9 configuration
├── index.html              # SEO metadata, Open Graph cards, Google Fonts (Oswald)
├── package.json            # Scripts & verified dependencies
└── vite.config.js          # Vite config with path aliases & Tailwind v4 plugin
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation
```bash
# 1. Clone repository
git clone https://github.com/Yogeswar03/Yogeswar-Portfolio.git

# 2. Enter project folder
cd Yogeswar-Portfolio-main

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

### Production Build & Linting
```bash
# Run ESLint validation
npm run lint

# Build optimized production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact & Connect

- **Email**: [yogi122502@gmail.com](mailto:yogi122502@gmail.com)
- **LinkedIn**: [linkedin.com/in/yogeswar-reddy](https://www.linkedin.com/in/yogeswar-reddy)
- **GitHub**: [github.com/Yogeswar03](https://www.github.com/Yogeswar03)
