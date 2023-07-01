
import Carrinho from './components/Carrinho/Carrinho'
import Header from './components/Header/Header'
import { EcommerceContextProvider } from './context/ecommerce'
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
      <body className={inter.className}>
        <EcommerceContextProvider>
          <Header />
          <Carrinho />
          {children}
        </EcommerceContextProvider>
      </body>
    </html>
  )
}
