'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProdutoItem from './components/ProdutoItem/ProdutoItem'
import { env } from './env/env'

export default function Home() {
  const skeletons = [];
  for (let i = 0; i < 20; i++) skeletons.push({ skeleton: true })
  const [produtos, setProdutos] = useState([...skeletons])

  useEffect(() => {
    fetch(env.api + 'ecommerce/produtos')
      .then(response => response.json())
      .then(data => {
        setProdutos(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="mx-auto max-w-2xl mt-10 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="text-4xl font-bold tracking-tight text-gray-900">
        Produtos mais vendidos
      </p>
      <div
        className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {produtos?.map((produto: any) => (
          <ProdutoItem key={produto?.id} produto={produto} />
        ))}
      </div>
    </div >

  )
}
