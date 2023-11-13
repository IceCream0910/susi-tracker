import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '태인\'s 수시 트래커',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content="태인 @icecream" />
        <meta property="og:site_name" content="태인 @icecream" />
        <meta property="og:url" content="yuntae.in" />
        <meta property="og:description" content="새로움에 끊임없이 도전하는 개발자입니다" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/og_thumbnail.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
