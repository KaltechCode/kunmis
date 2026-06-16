import React from "react";
import Iconstars from "../small/icons/Icon_stars";
import Link from "next/link";

function Banner() {
  return (
    <section className="px-5 py-[3em] md:py-[4em] lg:py-[5em] ">
      <div
        className="
          relative mx-auto max-w-[1200px] overflow-hidden
          rounded-medium
          bg-[#051a12]
          px-6 py-12
          text-center
          md:px-12 md:py-16
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15),transparent_70%)]" />

        {/* Bubble Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-8 top-10 h-16 w-16 rounded-full border border-white/20" />
          <div className="absolute right-12 top-16 h-24 w-24 rounded-full border border-white/20" />
          <div className="absolute bottom-12 left-1/4 h-12 w-12 rounded-full border border-white/20" />
          <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border border-white/20" />
        </div>

        <div className="relative z-10">
          {/* Top Label */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Iconstars />

            <p className="font-semibold! uppercase tracking-wide text-white!">
              Let's Make It Shine!
            </p>
          </div>

          {/* Heading */}
          <h2 className="mx-auto banner-title w-[80%] lg:w-[65%]  font-bold leading-tight text-white! md:text-6xl">
            Ready for a <br /> Spotless Home?
          </h2>

          {/* Buttons */}
          <div className="mt-10 lg:mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="
                flex items-center gap-2 rounded-full
                border border-white px-8 py-4
                text-lg font-medium text-white
                transition hover:bg-white hover:text-black
              "
            >
              Get A Free Quote
              {/* <ArrowUpRight size={20} /> */}
            </button>

            <Link
              href={"/appointment"}
              className="
                flex items-center gap-2 rounded-full
                bg-white px-8 py-4
                text-lg font-medium text-[#0F172A]
                transition hover:opacity-90
              "
            >
              Book Now
              {/* <ArrowUpRight size={20} /> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
