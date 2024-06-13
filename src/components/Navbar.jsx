// import React from 'react'

import { FaCarrot } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="absolute top-3 left-0 w-full text-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-3">
        <FaCarrot className="h-8 w-8 "/>
        <h1 className="text-2xl font-bold">Carrotar</h1>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <div className="flex items-center text-xl gap-8 mr-28 text-white">
            <li>
              <a className=" transition " href="#"> Features </a>
            </li>

            <li>
              <a className=" transition " href="#"> Plans </a>
            </li>

            <li>
              <a className=" transition " href="#"> FAQs </a>
            </li>
            </div>
          

            

            <li>
              <a className="text-white text-xl transition " href="#"> Home </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-8 ml-5">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-3xl bg-orange-500 px-8 py-2.5 text-lg font-medium text-white"
              href="#"
            >
              For Restaurant
            </a>
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar