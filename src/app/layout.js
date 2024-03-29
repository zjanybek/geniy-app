import { Geologica, Montserrat, Roboto } from 'next/font/google'
import localFont from 'next/font/local'

import Providers from '@/components/Providers'
import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'

import '@/styles/globals.scss'

const helveticaneuecyr = localFont({
  src: [
    {
      path: '../fonts/new-test/HelveticaNeueCyr-Medium.woff2',
      style: 'normal',
      weight: '400'
    },
    {
      path: '../fonts/new-test/HelveticaNeueCyr-Medium.woff2',
      style: 'normal',
      weight: '500'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Black.woff2',
      style: 'normal',
      weight: '900'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-BlackItalic.woff2',
      style: 'italic',
      weight: '900'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Bold.woff2',
      style: 'normal',
      weight: '700'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-BoldItalic.woff2',
      style: 'italic',
      weight: '700'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Italic.woff2',
      style: 'italic',
      weight: '400'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Light.woff2',
      style: 'normal',
      weight: '300'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-LightItalic.woff2',
      style: 'italic',
      weight: '300'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Thin.woff2',
      style: 'normal',
      weight: '100'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-ThinItalic.woff2',
      style: 'italic',
      weight: '100'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-UltraLight.woff2',
      style: 'normal',
      weight: '200'
    },
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-UltraLightItalic.woff2',
      style: 'italic',
      weight: '200'
    }
  ],
  // fallback: [
  //   'Neue Montreal',
  //   'Helvetica Neue',
  //   '-apple-system',
  //   'Helvetica',
  //   'Arial',
  //   'sans-serif',
  //   'Apple Color Emoji',
  //   'Segoe UI Emoji',
  //   'Segoe UI Symbol',
  //   'Noto Color Emoji'
  // ],
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

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-family',
  preload: true
})

export const metadata = {
  title: 'Next.js 13.5',
  description: 'React server components (SSR, SSG, ISR, CSR)'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} ${baskervillecyrltstd.variable}`}>
        <Providers>
          <div className='wrapper'>
            <TheHeader />
            {children}
            <TheFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}
