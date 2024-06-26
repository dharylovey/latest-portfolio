'use client'
import Link from "next/link";
import React, { useState } from "react";
import { ModeToggle } from "@/components/DarkModeToggler";
import { navLinks } from "@/lib/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

interface Links {
  links: string[];
  activeSection: string;
}
export default function Navbar({ links, activeSection }: Links) {
  
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleClickMenu = (event: any) => {
    event.stopPropagation();
    setNav((prevNav) => !prevNav);
  };
  return (
    <nav className="w-full fixed flex items-center justify-between md:max-w-full  md:px-28 mx-auto px-4 py-5 border-b-2 shadow-sm  backdrop-blur-lg dark:background">
      <Link href="/" className="flex items-center gap-2">
        <span className="font-bold text-3xl dark:text-white antialiased">
          &lt;/&gt;
        </span>
        <h1 className="font-bold text-3xl text-primary antialiased">DharyL</h1>
      </Link>
      <div className="hidden lg:block">
        <ul className="items-center gap-6 flex lg:text-bold lg:text-3xl">
          {links.map((link) => {
            return (
              <li
                key={link}
                className={`${
                  activeSection === link
                    ? "text-primary cursor-pointer"
                    : "text-slate-950 cursor-pointer dark:text-white"
                }`}
              >
                <Link href={`#${link}`}>
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
        <button className="hidden max-lg:block" onClick={handleClick}>
          {nav ? (
            <RxCross1 className="dark:text-white h-[30px] w-[30px]" />
          ) : (
            <RxHamburgerMenu className="dark:text-white h-[30px] w-[30px]" />
          )}

          <div
            className={`${
              nav ? "flex" : "hidden"
            } absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="flex flex-col justify-end flex-1 gap-2 p-5 bg-slate-100 dark:bg-slate-900 rounded-2xl">
              {navLinks.map((link) => (
                <li className="mb-2" key={link.label}>
                  <Link
                    href={link.href}
                    onClick={handleClickMenu}
                    className="py-4 text-2xl leading-normal transition duration-500 ease-in-out text-slate-950 hover:border-b-2 hover:border-primary hover:text-primary dark:text-white dark:hover:text-primary"
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
