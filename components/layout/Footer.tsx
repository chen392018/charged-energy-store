import Image from "next/image"

import logo from "@/public/logo.svg"

export default function Footer() {
  return (
    <footer className="rounded-lg shadow bg-background-600">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logo} alt="Flowbite Logo" height={32} width={32} />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-accent-900">
              Charged Energy
            </h1>
          </div>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 text-accent-800">
            <li>
              <a href="#" className="hover:text-primary-300 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-300 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-300 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-primary-900 lg:my-8" />
        <span className="block text-sm sm:text-center text-accent-700">
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
