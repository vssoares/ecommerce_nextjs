'use client'

import { useEffect } from 'react'
import { useEcommerceContext } from '../context/ecommerce'
import Link from 'next/link'

export default function Produtos() {
  const { data, setData } = useEcommerceContext()

  useEffect(() => {

    setData([
      {
        firstName: 'Vinicius'
      }
    ])

  }, [])

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <Link href={'/'} className="text-4xl font-bold text-center">
            {item.firstName}
          </Link>
        </div>
      ))}
    </main>
  )
}
