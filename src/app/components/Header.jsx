'use client'

import Image from 'next/image'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
      {/* Left */}
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          layout="fill"
          className="object-contain"
          onClick={() => router.push("/")}
          alt='logo'
        />
      </div>
      <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
          onClick={() => router.push("/")}
          alt='logo'
        />
      </div>
      {/* Middle */}

      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <IoIosSearch className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 h-[34px] border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* Right */}

    </div>
  </div>
  )
}
