import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'vite-host',
      remotes: {
        "remote": "http://localhost:4173/assets/index.js",
  },
      shared: ['react', 'react-dom'],
    }),
  ],
})
