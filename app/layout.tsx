import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Latency Geography Tracker',
  description: 'Track API performance by user location. Monitor response times across global regions, identify slow zones, and get CDN optimization strategies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="94ecc804-0895-4d2c-a6c5-aa45c33b7194"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
