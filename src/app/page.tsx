'use client'

import Image from 'next/image'
import { useEcommerceContext } from './context/ecommerce'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const { data, setData } = useEcommerceContext()

  useEffect(() => {
    setData([
      {
        firstName: 'Vaqueiro'
      }
    ])
  }, [])

  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <Link href={'produtos'} className="text-4xl font-bold text-center">
            {item.firstName}
          </Link>
        </div>
      ))}
    </main>
  )
}
