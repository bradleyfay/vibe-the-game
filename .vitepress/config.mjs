import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vibe the Game",
  description: "Parent-child game development journey - learning together!",
  base: '/vibe-the-game/',

  vite: {
    // Override root vite config for docs build
    build: {
      rollupOptions: {
        output: {
          // Don't configure manualChunks for docs
        }
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/SETUP' },
      { text: 'Vision', link: '/specs/GAME_VISION' },
      { text: 'Prototypes', link: '/prototypes/' },
      { text: 'Parent Guide', link: '/docs/PARENT_GUIDE' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Setup Guide', link: '/docs/SETUP' },
            { text: 'Parent Facilitation Guide', link: '/docs/PARENT_GUIDE' },
            { text: 'Resources & Tutorials', link: '/docs/RESOURCES' }
          ]
        },
        {
          text: 'Tracking Progress',
          items: [
            { text: 'Learning Log', link: '/docs/LEARNING_LOG' },
          ]
        }
      ],
      '/specs/': [
        {
          text: 'Game Design',
          items: [
            { text: 'Game Vision', link: '/specs/GAME_VISION' },
            { text: 'Mechanics Library', link: '/specs/MECHANICS_LIBRARY' }
          ]
        },
        {
          text: 'Templates',
          items: [
            { text: 'Feature Spec Template', link: '/specs/templates/feature-spec' },
            { text: 'Retrospective Template', link: '/specs/templates/retrospective' }
          ]
        }
      ],
      '/prototypes/': [
        {
          text: 'Prototypes',
          items: [
            { text: 'Overview', link: '/prototypes/' },
            {
              text: '01 - Hello World',
              collapsed: false,
              items: [
                { text: 'Specification', link: '/prototypes/01-hello-world/spec' },
                { text: 'Retrospective', link: '/prototypes/01-hello-world/README' }
              ]
            },
            { text: '02 - Obstacles (Planned)', link: '/prototypes/02-obstacles/' },
            { text: '03 - World Exploration (Planned)', link: '/prototypes/03-world-exploration/' }
          ]
        }
      ],
      '/plan/': [
        {
          text: 'Planning Documents',
          items: [
            { text: 'Implementation Plan', link: '/plan/IMPLEMENTATION_PLAN' },
            { text: 'Technical Research', link: '/plan/TECHNICAL_RESEARCH' },
            { text: 'Scaffold Summary', link: '/plan/SCAFFOLD_SUMMARY' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bradleyfay/vibe-the-game' }
    ],

    footer: {
      message: 'Built with love by Dad and Son 🎮',
      copyright: 'Learning together, one prototype at a time'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/bradleyfay/vibe-the-game/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
