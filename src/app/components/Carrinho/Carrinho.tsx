'use client'

import { useEcommerceContext } from "@/app/context/ecommerce"
import { useEffect } from "react"

export default function Carrinho() {
   const { toggleCarrinho, setToggleCarrinho } = useEcommerceContext()

   return (
      <div className={toggleCarrinho ? '' : 'hidden'}>
         <div className="fundo fixed inset-0 z-30 bg-gray-500 bg-opacity-75 transition-opacity" ></div >
         <div
            className="lista pointer-events-none z-40 fixed inset-y-0 right-0 flex max-w-full pl-10" >
            <div className="pointer-events-auto w-screen max-w-md">
               <div className="flex h-full flex-col bg-white shadow-xl">
                  <div className="flex items-start justify-between pt-6 px-6">
                     <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                        Carrinho
                     </h2>
                     <div className="ml-3 flex h-7 items-center">
                        <button
                           onClick={() => { setToggleCarrinho(false) }}
                           type="button"
                           className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                           <span className="sr-only">Close panel</span>
                           <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M6 18L18 6M6 6l12 12" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="flex-1 overflow-y-auto py-0 px-4 sm:px-6">
                     <div
                        className="mt-8">
                        <div className="PageCart-styles__EmptyCart-sc-d6480e32-3 bbLDQe">
                           <p className="text-lg">O seu carrinho está vazio.</p>
                        </div>
                     </div>
                     <div >
                        <div className="flow-root">
                           <ul role="list" className="divide-y divide-gray-200">
                              <li className="flex py-6">
                                 <div
                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                       className="h-full w-full object-cover object-center" />
                                 </div>
                                 <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                       <div
                                          className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                             <a
                                                href="#">
                                                <p className="limite-texto"></p></a>
                                          </h3>
                                          <p className="ml-4">
                                          </p>
                                       </div>
                                       <p className="mt-1 text-sm text-gray-500">
                                       </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                       <div className="custom-number-input h-10 w-24">
                                          <div
                                             className="flex flex-row h-7 w-full rounded-lg relative bg-transparent mt-1">
                                             <button
                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span className="text-1xl font-thin">−</span>
                                             </button>
                                             <input
                                                type="number"
                                                disabled
                                                className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-1xl hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700"
                                                name="custom-input-number"
                                             />
                                             <button
                                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                <span className="text-1xl font-thin">+</span>
                                             </button>
                                          </div>
                                       </div >
                                       <div className="flex">
                                          <button
                                             type="button"
                                             className="font-medium text-indigo-600 hover:text-indigo-500">
                                             Remover
                                          </button>
                                       </div >
                                    </div >
                                 </div >
                              </li >
                           </ul >
                        </div >
                     </div >
                  </div >

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                     <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p></p>
                     </div>
                     <div className="mt-6">
                        <a
                           href="#"
                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >Checkout</a
                        >
                     </div>
                     <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                           or
                           <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500">
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                           </button>
                        </p>
                     </div>
                  </div>
               </div >
            </div >
         </div >
      </div>
   )
}