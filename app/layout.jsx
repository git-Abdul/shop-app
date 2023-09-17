import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/navBar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kicks • Dev',
  description: 'An E-commerce app made in React using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png" type='png' sizes="any" />
      <body className={inter.className}><NavBar />{children}<Footer /></body>
    </html>
  )
}
