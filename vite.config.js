import { defineConfig } from 'vite'

// Vite configuration for multiple prototype dev servers
// Each prototype can be run independently with: npm run dev:01, npm run dev:02, etc.

export default defineConfig({
  // Base public path when served in development
  base: './',

  // Development server configuration
  server: {
    port: 3000,
    open: true, // Automatically open browser
    host: true, // Listen on all addresses
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimize for game assets
    assetsInlineLimit: 0, // Don't inline assets (keep images/sounds as separate files)
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep Phaser as a separate chunk for better caching
          phaser: ['phaser']
        }
      }
    }
  },

  // Handle module resolution
  resolve: {
    alias: {
      // Can add path aliases here later if needed
      // '@shared': path.resolve(__dirname, './shared')
    }
  }
})
