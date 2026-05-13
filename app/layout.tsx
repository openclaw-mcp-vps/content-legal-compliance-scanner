import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legal Compliance Scanner — Scan Content for Legal Issues Instantly',
  description: 'Automatically scan blog posts, marketing copy, and website content for medical claims, financial advice disclaimers, and GDPR compliance issues.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3cbb308f-120f-40de-a64c-60573a77561c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
