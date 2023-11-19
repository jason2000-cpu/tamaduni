import { Inter } from 'next/font/google'
import SearchBar from '@/Components/SearchBar/SearchBar'

const inter = Inter({ subsets: ['latin'] })

function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <SearchBar />
        { children }
      </body>
    </html>
  )
}

export default HomeLayout