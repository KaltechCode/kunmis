"use client";

import { IoMenu } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { HiPhone } from "react-icons/hi2";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="lg:hidden flex items-center justify-between bg-white px-6 py-4">
        <Image
          src="/images/logo.png"
          alt="Kumis Cleaners"
          height={200}
          width={200}
          className="h-12 w-auto"
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-700 text-white"
        >
          {menuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white transition-all duration-300 ${
          menuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-6">
          <ul className="space-y-5 text-[15px] text-slate-700">
            <li>
              <Link
                href="/"
                className="text-lime-700 transition hover:text-lime-800"
              >
                Home
              </Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            {/* Pages Dropdown */}
            <li>
              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex w-full items-center  gap-4"
              >
                <span>Pages</span>

                <IoChevronDownSharp
                  size={16}
                  color="#111"
                  className={`transition-transform duration-300 ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  pagesOpen ? "mt-4 max-h-40" : "max-h-0"
                }`}
              >
                <ul className="ml-4 space-y-3 border-l border-gray-200 pl-4 text-sm text-slate-500">
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>

                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>

          {/* Contact Area */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-700 text-white">
                <HiPhone size={16} className="text-white" color="#fff" />
              </div>

              <span className="text-sm font-medium text-slate-800">
                +1(629) - 217 - 5852
              </span>
            </div>

            <PrimaryBtnBlack
              text="Appointment"
              link="/appointment"
              size="py-4 px-8"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
