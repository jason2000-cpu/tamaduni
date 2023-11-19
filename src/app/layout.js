
import { Inter } from 'next/font/google'
import './globals.css'

import SearchBar from '@/Components/SearchBar/SearchBar'
import Home from './home'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'utamaduni',
  description: 'Preserving The African Culture',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         
        { children }
      </body>
    </html>
  )
}
