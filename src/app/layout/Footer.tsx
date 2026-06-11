import Link from "next/link";

import { RiMapPin2Fill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07143d] text-white">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/4.jpg')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-10">
        {/* Newsletter */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="section-title text-white!">
            Stay Updated With Expert Cleaning
            <br />
            Tips, Subscribe Now!
          </h2>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="bg-background-white min-h-[60px] py-4 h-14 flex-1 rounded-full border-0 px-6 text-black outline-none"
            />

            <button
              type="submit"
              className="h-14 rounded-full bg-[#86a12f] px-8 font-semibold transition hover:opacity-90"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Footer Content */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {/* Company */}
          <div className="col-span-2 mobile-landscape:col-span-3 md:col-span-3 lg:col-span-2">
            <Image
              src="/images/logo-white.png"
              alt="Kumis Cleaners"
              width={180}
              height={60}
              className="mb-4"
            />

            <p className=" text-white!">
              We offer top-quality & eco-friendly cleaning solutions tailored to
              your needs.
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="mb-4 text-xl font-semibold">Working Hours</h3>

              <div className="flex gap-3 text-sm text-white!">
                <FaClock size={18} className="mt-1 shrink-0 text-blue-500" />

                <p className="text-white!">
                  Monday to Saturday: 9 am - 7 pm
                  <br />
                  Sunday is closed
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/pricing">Pricing</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">Services</h3>

            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/style-guide">Style Guide</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="mb-5 text-xl font-semibold">Contact Links</h3>

            <div className="space-y-5 text-white/80">
              <div className="flex gap-3">
                <HiPhone size={18} className="mt-1 shrink-0" />
                <span>+(1)629 - 217 - 5852</span>
              </div>

              <div className="flex gap-3">
                {/* <RiMapPin2Fill size={18} className="mt-1 shrink-0" /> */}
                <span>info@kumiscleaners.com</span>
              </div>

              <div className="flex gap-3">
                <RiMapPin2Fill
                  size={18}
                  className="mt-1 shrink-0 text-blue-500"
                />

                <span>
                  104 Some Address Here
                  <br />
                  Some place in Antoch
                  <br />
                  TN 37013
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          Copyright © Kumis Cleaners 2026
        </div>
      </div>
    </footer>
  );
}
