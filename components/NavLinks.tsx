import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'

export  function Navlinks() {
  return (
    <ul className=" items-center gap-4 flex lg:text-bold lg:text-3xl dark:text-slate-950 antialiased">
        {navLinks.map((link) => (
            <li key={link.label} className="flex">
                <Link
                    href={link.href}
                    className=" transition leading-normal  duration-500 ease-in-out text-slate-950 hover:border-primary hover:text-primary"
                >
                    {link.label}
                </Link>
            </li>
        ))}
      </ul>
  )
}
