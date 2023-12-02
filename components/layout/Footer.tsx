import Image from "next/image"

import logo from "@/public/charge-logo.png"

export default function Footer() {
  return (
    <footer className="rounded-lg shadow bg-primary-600">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt="Flowbite Logo" height={32} width={32} />
            <h1 className="prose self-center text-2xl text-accent-200 font-semibold whitespace-nowrap">
              Charged Energy
            </h1>
          </div>
          <ul className="flex flex-wrap items-end text-sm font-medium sm:mb-0 text-accent-700">
            <li>
              <a href="#" className="hover:text-secondary-300 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-300 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-300 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-primary-900 lg:my-8" />
        <span className="text-accent-700 block text-sm sm:text-center ">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Charged Energy
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
