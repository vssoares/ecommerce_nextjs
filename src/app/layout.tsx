
import Carrinho from './components/Carrinho/Carrinho'
import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Ecommerce Vaqueiro</title>
        <meta
          name="description"
          content="Ecommerce Vaqueiro - O melhor do sertão"
        />
      </head>
      <body className={inter.className + 'flex min-h-full flex-col p-24'}>
        <Header />
        <Carrinho />
        {children}
      </body>
    </html>
  )
}
