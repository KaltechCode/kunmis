import ChooseUs from "@/components/large/about/Choose";
import OurStory from "@/components/large/about/OurStory";
import AboutServices from "@/components/large/about/Services";
import StaticSection from "@/components/large/about/StaticSection";
import Team from "@/components/large/about/Team";
import First from "@/components/large/services/First";
import Iconstars from "@/components/small/icons/Icon_stars";
import React from "react";

function Page() {
  return (
    <main>
      <First
        image="/images/about-1.webp"
        text="Trusted Experts in Home Cleaning Services"
        tag="About us"
      />
      <OurStory />
      <AboutServices />
      <ChooseUs />
      <StaticSection />
      <Team />
      <section className="px-4 py-10">
        <div
          className="
          relative mx-auto max-w-4xl overflow-hidden
          rounded-[28px]
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

              <span className="text-sm font-bold uppercase tracking-wide text-white">
                Let's Make It Shine!
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready for a Spotless Home?
            </h2>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

              <button
                className="
                flex items-center gap-2 rounded-full
                bg-white px-8 py-4
                text-lg font-medium text-[#0F172A]
                transition hover:opacity-90
              "
              >
                Book Now
                {/* <ArrowUpRight size={20} /> */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
