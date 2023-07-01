'use client'

import { useEffect } from 'react'
import { useEcommerceContext } from '../context/ecommerce'
import Link from 'next/link'

export default function Produtos() {
  const { toggleCarrinho, setToggleCarrinho } = useEcommerceContext()

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <Link href={'/'}>
        {String(toggleCarrinho)}
      </Link>

    </main>
  )
}
