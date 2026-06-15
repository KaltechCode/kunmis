"use client";
import Image from "next/image";
import PrimaryBtn from "../../small/buttons/PrimaryBtn";
import PrimaryBtnBlack from "../../small/buttons/PrimaryBtnBlack";
import OverlarpedImages from "../../small/overlarpedImages";
import IconFirst from "../../small/icons/Icon_first";
import IconSecond from "../../small/icons/Icon_second";

import { motion } from "framer-motion";

export default function Herosection() {
  return (
    <section className="home-banner-area section-container">
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-5 items-center gap-7">
        {/* col one */}
        <div className="bg-background-grey px-5 py-7 lg:py-32  rounded-medium">
          <div className="bg-transparent  lg:py-7 ">
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="banner-title font-instrument flex justify-center font-extrabold lg:w-[80%] lg:mx-auto lg:pt-10"
            >
              Shiny Homes and Pristine Offices Cleaning Services
            </motion.h1>

            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="home-banner-text-wrap pt-5 pb-5 font-open font-medium lg:w-[80%] lg:mx-auto"
            >
              <p>
                Stop wasting your precious free time cleaning, relax while we
                make your home sparkle!
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="grid grid-cols-1 grid-rows-2 gap-3 mt-5 sm:grid-cols-2 sm:grid-rows-1 sm:max-w-[450px] lg:mt-10 lg:w-[80%] lg:max-w-[80%] lg:mx-auto lg:gap-[10%]"
            >
              <PrimaryBtn
                text="About Us"
                link="/about"
                size="w-full py-3 sm:px-7 sm:py-4"
              />
              <PrimaryBtnBlack
                text="Our Services"
                link="/services"
                size="w-full py-3 sm:px-7 sm:py-4 md:py-2 md:px-0"
              />
            </motion.div>
          </div>

          {/* col one images */}
          <div className="hidden lg:mt-16">
            <div className="home-banner-logo-area mt-10 md:flex md:gap-5 lg-gap-10 mb-5 lg:grid grid-cols-2 lg:w-[70%]">
              <div className="lg:border-r-1 border-gray-300">
                <Image
                  src="/images/review-1.png"
                  alt="Client Brand"
                  width={120}
                  height={100}
                  className="w-[229px]"
                />
              </div>

              <div>
                <Image
                  src={"/images/review-2.png"}
                  alt="star"
                  width={120}
                  height={100}
                  className="w-[229px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* col two */}
        <motion.div className="home-banner-image-wrap h-full relative top-0 left-0 rounded-medium overflow-hidden ">
          <motion.div
            className="h-full w-full bg-background-grey absolute z-90"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.9 }}
            style={{ transformOrigin: "bottom" }}
          ></motion.div>
          <motion.div
            className="flex gap-3 p-3"
            initial={{ x: -320, opacity: 0.5 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <motion.div
              className=" bg-[#131b33b5] flex justify-center px-4  gap-2 py-2 rounded-medium cursor-pointer"
              whileHover={{ background: "#131b33" }}
            >
              <IconFirst />
              <p className="text-white! -mt-1">Professional</p>
            </motion.div>
            <motion.div
              className=" bg-[#131b33b5] flex justify-center px-4 gap-2 py-2 rounded-medium  cursor-pointer"
              whileHover={{ background: "#131b33" }}
            >
              <IconSecond />
              <p className="text-white! -mt-1">Friendly</p>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-2 right-0  max-w-[400px] lg:max-w-[520px] px-3">
            <div className="grid grid-cols-2 gap-3">
              {/* second box */}
              <motion.div
                className="bg-background-grey p-3 col-span-1 rounded-medium"
                initial={{ y: 160 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.5 }}
              >
                <OverlarpedImages />

                <p className="banner-card-text mt-[60px] md:mt-[80px]">
                  <span className="text-dark">
                    <strong>300+</strong>
                  </span>{" "}
                  Satisfied Customers around the global
                </p>
              </motion.div>

              {/* second box */}
              <motion.div
                className="bg-background-grey rounded-medium p-3 md:py-3"
                initial={{ y: 160 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="home-banner-card">
                  <div className="home-banner-card-image-area">
                    <h2 className="big-number font-instrument">96%</h2>
                  </div>
                  <p className="banner-card-text mt-5">
                    From homes to offices spotless results every time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
