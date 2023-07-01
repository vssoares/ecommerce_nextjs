'use client'

import Image from 'next/image'
import { useEcommerceContext } from './context/ecommerce'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const { toggleCarrinho, setToggleCarrinho } = useEcommerceContext()

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <Link href={'produtos'}>
        {String(toggleCarrinho)}
      </Link>
    </main>
  )
}
