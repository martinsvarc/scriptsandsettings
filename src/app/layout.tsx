import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600'],  // Add this line to specify weight 600
  display: 'swap',  // Add this for better font loading performance
})

export const metadata = {
  title: 'Script Uploader',
  description: 'Upload and manage your scripts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
