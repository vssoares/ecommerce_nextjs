'use client'

import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';

export default function ProdutoItem({ produto }: any) {
    useEffect(() => {
    }, [produto])

    return (
        <>
            <AnimatePresence>
                {!produto.skeleton && (
                    <motion.div
                        initial="hidden"
                        animate={!produto.skeleton ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut', }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="flex flex-col h-full min-h-80 aspect-w-1 aspect-h-1 w-full transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:shadow-lg"
                    >
                        <Image
                            className="h-48 w-full cursor-pointer object-cover object-center"
                            src={produto?.imagem}
                            alt="Product Image"
                            width={300} height={300} />
                        <div className="p-4 grow flex flex-col justify-between">
                            <div>
                                <Link className="text-sm text-gray-700" href={'produto/' + produto?.id}></Link>
                            </div>
                            <div className="flex flex-col align-middle">
                                <div className="flex items-center">
                                    <p className="mr-2 text-sm font-semibold text-gray-900">

                                    </p>
                                    <p className="text-sm font-medium text-gray-500 line-through">

                                    </p>
                                    <p className="ml-auto text-sm font-medium text-green-500">20% off</p>
                                </div>
                                <Link
                                    href={'produto/' + produto?.id}
                                    className="mb-2 flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
                                >Comprar
                                </Link>
                                <div
                                    className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700">
                                    <div >Adicionar no Carrinho</div>
                                    <div>
                                        <svg
                                            aria-hidden="true"
                                            className="w-6 h-6 text-gray-200 animate-spin fill-blue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor" />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill" />
                                        </svg>
                                    </div>
                                </div>
                            </div >
                        </div >

                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {produto.skeleton && (
                    <motion.div
                        initial="visible"
                        animate={!produto.skeleton ? 'visible' : 'hidden'}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut', }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="flex flex-col h-full min-h-80 aspect-w-1 aspect-h-1 w-full transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:shadow-lg"
                    >
                        <div className="" role="status">
                            <div className="flex flex-col roundedsmw-full animate-pulse h-96">
                                <div className="h-48 rounded-t dark:bg-gray-300 w-full"></div>
                                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8">
                                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                                    <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}
