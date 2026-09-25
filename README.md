# GitWrapped 2026

**GitWrapped** transforms a developer's public GitHub activity into an interactive, Spotify Wrapped-style "2026 Coding Era" story.

Discover your top languages, circadian commit rhythms (Day-of-Week focus), project highlights, and personalized developer archetype persona.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Runtime**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) *(upcoming)*
- **Export Engine**: `html-to-image` + Next.js `next/og` *(upcoming)*

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v22)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lavanyaaax/gitwrapped.git
   cd gitwrapped
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables:
   Copy `.env.example` to `.env.local` to add a GitHub Personal Access Token (`GITHUB_TOKEN`) for higher rate limits (5,000 req/hr vs 60 req/hr):
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
gitwrapped/
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, API routes)
│   │   ├── globals.css     # Global styles & design tokens
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/         # Reusable UI & slide components
│   ├── lib/                # Utilities, GitHub API clients, Persona engine
│   └── types/              # TypeScript domain types & data contracts
├── public/                 # Static assets
├── .env.example            # Documented environment variables
├── package.json
└── tsconfig.json
```

---

## 📜 License

MIT License. Built for the developer community.
