import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Roast a Profile - AI Instagram Roaster',
    short_name: 'RoastProfile',
    description: 'Get hilarious AI roasts of Instagram profiles',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['social', 'entertainment', 'utilities'],
    shortcuts: [
      {
        name: 'Generate Roast',
        short_name: 'Roast',
        description: 'Generate an AI roast of an Instagram profile',
        url: '/roast-generator',
        icons: [{ src: '/shortcut-roast.png', sizes: '96x96' }]
      },
      {
        name: 'Roast Styles',
        short_name: 'Styles',
        description: 'Browse different roasting styles',
        url: '/roast-styles',
        icons: [{ src: '/shortcut-styles.png', sizes: '96x96' }]
      }
    ]
  }
}