import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phone Authentication App',
  description: 'Modern phone-based OTP authentication with Next.js 14+',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  )
}
