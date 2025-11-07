import './globals.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anshu Patel - Full Stack Developer',
  description: 'Full-stack developer specializing in modern web applications. Building scalable, user-centric digital solutions with React, Next.js, and TypeScript.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Node.js'],
  authors: [{ name: 'Anshu Patel' }],
  openGraph: {
    title: 'Anshu Patel - Full Stack Developer',
    description: 'Building modern web applications with React, Next.js, and TypeScript',
    type: 'website',
  }
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>

      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
