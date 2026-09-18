import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  // Vercel serves the app at the domain root; GitHub Pages serves it under /AirCanvas/.
  base: isGitHubPages ? '/AirCanvas/' : '/',
})
