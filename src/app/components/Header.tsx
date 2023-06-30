import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="bg-white fixed right-0 left-0 top-0 z-20">
                <header className="relative bg-white">


                    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="border-b border-gray-200">
                            <div className="flex h-16 items-center">
                                <button
                                    type="button"
                                    className="rounded-md bg-white p-2 text-gray-400 lg:hidden">
                                    <span className="sr-only">Open menu</span>
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
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>

                                <div className="ml-4 flex lg:ml-0">
                                    <a>
                                        <span className="sr-only">Your Company</span>
                                        <Image width={50} height={50} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=''/>
                                    </a>
                                </div>

                                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                                    <div className="flex h-full space-x-8">
                                        <div className="flex">
                                            <div className="relative flex">
                                                <button
                                                    type="button"
                                                    className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                                    aria-expanded="false">
                                                    Women
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex">
                                            <div className="relative flex">
                                                <button
                                                    type="button"
                                                    className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                                    aria-expanded="false">
                                                    Men
                                                </button>
                                            </div>

                                            <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                <div
                                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                                    aria-hidden="true"></div>

                                                <div className="relative bg-white">
                                                    <div className="mx-auto max-w-7xl px-8"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <a
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >Company</a
                                        >

                                        <a
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >Stores</a
                                        >
                                    </div>
                                </div>

                                <div className="ml-auto flex items-center">
                                    <div className="ml-auto flex items-center">
                                        <a
                                            className="group cursor-pointer flex items-center p-2">

                                        </a>
                                    </div>

                                    <div
                                        className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <a
                                            className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >Login</a
                                        >
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                        <a
                                            className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                        >Cadastre-se</a
                                        >
                                    </div>

                                    <div className="flex lg:ml-6">
                                        <a className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
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
                                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <a
                                            className="group -m-2 cursor-pointer flex items-center p-2">
                                            <svg
                                                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            <span
                                                className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                                            ></span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}
