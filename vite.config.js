import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/detach/', // ⚠️ Change 'detach' to YOUR repo name
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'detach',
        short_name: 'detach',
        description: 'Spin a quick quest. Feel better fast.',
        theme_color: '#7cffd1',
        background_color: '#0f121a',
        start_url: '/detach/',
        display: 'standalone',
        icons: [
          {
            src: '/detach/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/detach/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['*/.{js,css,html,ico,png,svg}']
      }
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})