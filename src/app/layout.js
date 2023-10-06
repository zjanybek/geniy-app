import { getServerSession } from 'next-auth'
import { Geologica, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

import Providers from '@/components/Providers'
import TheFooter from '@/components/TheFooter/TheFooter'
import TheHeader from '@/components/TheHeader/TheHeader'

import '@/styles/globals.scss'

const helveticaneuecyr = localFont({
  src: [
    {
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Roman.woff2',
      style: 'normal',
      weight: '400'
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
      path: '../fonts/helveticaneuecyr-2/HelveticaNeueCyr-Medium.woff2',
      style: 'normal',
      weight: '500'
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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font6',
  display: 'swap'
})

export const metadata = {
  title: 'Next.js 13.5',
  description: 'React server components (SSR, SSG, ISR, CSR)'
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${baskervillecyrltstd.variable} ${helveticaneuecyr.variable} ${geologica.variable} ${montserrat.variable}`}
    >
      <body>
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
