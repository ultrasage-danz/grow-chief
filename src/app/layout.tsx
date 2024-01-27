import type { Metadata } from 'next'
import { Inter, Public_Sans, MuseoModerno, Amaranth, ADLaM_Display, Karla } from 'next/font/google'

import { ApolloWrapper } from '@/components/ApolloWrapper'

import './globals.css'

const inter = Karla({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: 'Grow Chief',
  description: 'We specialize in human-centered design where technology serves humanity, not the other way around. ',
}

type RootLayoutProps = {
  children: React.ReactNode
}



function RootLayout(props: RootLayoutProps ) {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
        
        </body>
    </html>
  )
}

export default RootLayout
