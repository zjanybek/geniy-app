import { Geologica, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'

import '@/styles/globals.scss'

const helveticaneuecyr = localFont({
  src: [
    {
      path: '../fonts/helveticaneuecyr/helveticaneuecyr-roman.woff2',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../fonts/helveticaneuecyr/helveticaneuecyr-medium.woff2',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../fonts/helveticaneuecyr/helveticaneuecyr-italic.woff2',
      style: 'italic',
      weight: '500'
    },
    {
      path: '../fonts/helveticaneuecyr/helveticaneuecyr-bold.woff2',
      style: 'normal',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-family',
  preload: true
})

const baskervillecyrltstd = localFont({
  src: [
    {
      path: '../fonts/baskervillecyrltstd/baskerville-cyr-ltstd-bold.woff2',
      style: 'normal',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--second-family',
  preload: true
})

const geologica = localFont({
  src: [
    {
      path: '../fonts/geologica/geologicaa-regular.woff2',
      style: 'normal',
      weight: '400'
    }
  ],
  display: 'swap',
  variable: '--font5',
  preload: true
})

// const geologica = Geologica({
//   subsets: ['latin'],
//   variable: '--font5',
//   display: 'swap'
// })

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font6',
  display: 'swap'
})

export const metadata = {
  title: 'Гении',
  description: 'Гении тысячи профессионалов со всего мира готовы помочь тебе'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${baskervillecyrltstd.variable} ${helveticaneuecyr.variable} ${geologica.variable} ${montserrat.variable}`}
    >
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
