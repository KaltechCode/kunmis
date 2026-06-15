import { IoChevronDownSharp } from "react-icons/io5";

import { HiPhone } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";

function Header() {
  return (
    <header className="hidden lg:block bg-white py-4">
      <div className="mx-auto flex h-[104px]  xl:w-[90%] 2xl:w-[80%] items-center justify-between px-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Kumis Cleaners"
            width={150}
            height={70}
            className="h-auto w-[150px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3 xl:gap-7">
          <Link
            href="/"
            className="text-lg font-medium text-lime-600 transition-colors hover:text-lime-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Portfolio
          </Link>

          <Link
            href="/contact-us"
            className="text-lg font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Contact */}
          <div className="flex items-center gap-4 border-l pl-2 xl:pl-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-600 text-white">
              <HiPhone className="h-5 w-5" />
            </div>

            <a
              href="tel:+16292175852"
              className="text-lg font-medium text-slate-900"
            >
              +1(629) - 217 - 5852
            </a>
          </div>

          {/* CTA */}
          <PrimaryBtnBlack
            text="Appointment"
            link="/appointment"
            size="py-3 px-4 xl:py-4 xl:px-8"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
