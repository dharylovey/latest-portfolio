"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "@/components/DarkModeToggler";
import { Navlinks } from "@/components/NavLinks";
import Image from "next/image";
import close from '@/public/image/close.svg'
import menu from '@/public/image/hamburger.svg'
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClickMenu = (event: any) => {
    event.stopPropagation();
    setNav(false)
  }
  return (
    <nav className="w-full fixed flex items-center justify-between max-w-2xl md:max-w-7xl lg:max-w-full md:px-28 mx-auto px-4 py-5 border-b-2 shadow-sm bg-white backdrop-blur-lg dark:background">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-bold text-3xl dark:text-slate-950 antialiased">
          &lt;/&gt;
        </span>
        <h1 className="font-bold text-3xl text-primary antialiased">DharyL</h1>
      </Link>
      <div className="hidden lg:block">
        <Navlinks />
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <button className="hidden max-lg:block" onClick={handleClick}>
          {nav ? (
              <Image 
                src={close}
                alt="close"
                width={30}
                height={30}
              />
          ): (
              
            <Image 
            src={menu}
            alt="close"
            width={30}
            height={30}
          />
          )}

<div className={`${nav ? 'flex' : 'hidden'} absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className="flex flex-col justify-end flex-1 gap-2 p-5 bg-slate-100 rounded-2xl">
              {navLinks.map((link) => (
                <li 
                  className='mb-2'
                  key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleClickMenu}
                    className="py-4 text-2xl leading-normal transition duration-500 ease-in-out text-slate-950 hover:border-b-2 hover:border-primary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </nav>
  );
}
