import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'

import '@/styles/globals.scss'

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Гении',
  description: 'Гении тысячи профессионалов со всего мира готовы помочь тебе'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='wrapper'>
          <TheHeader />
          {children}
          <TheFooter />
        </div>
      </body>
    </html>
  )
}
