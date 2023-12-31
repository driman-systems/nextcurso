import { cn } from '@/lib/utils'
import './globals.css'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({weight: ["400", "700"], subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={(cn(poppins.className), "dark")}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
