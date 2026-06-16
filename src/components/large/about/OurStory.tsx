"use client";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { motion } from "framer-motion";
import Image from "next/image";

function OurStory() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-grey">
      <div className="section-container h-full max-w-[1200px]!">
        <div className="grid h-full md:grid-cols-12 lg:gap-7 md:gap-10 lg:gap-20 w-full mx-auto">
          {/* image */}
          <div className="relative mt-16 md:mt-0 w-full md:col-span-6 h-full">
            <Image
              src={"/images/about-2.webp"}
              height={500}
              width={300}
              className="w-full rounded-medium md:h-full"
              alt="office cleaning"
            />
            <motion.div
              className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ transformOrigin: "bottom" }}
            ></motion.div>
          </div>

          {/* section tittle*/}
          <div className="md:col-span-6">
            <motion.p
              className="subtitle font-openSans justify-start!"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <span>
                <Iconstars />{" "}
              </span>
              Our Story
            </motion.p>
            <motion.h2
              className="section-title text-left font-instrument"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              How It’s Started From Vision to Reality
            </motion.h2>

            <motion.div
              className="mt-7"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <p>
                Founded in 1998, CleanupFlow has been dedicated to providing
                top-quality cleaning solutions for homes and businesses. We
                believe in creating healthier environments with expert care and
                eco-friendly products.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-10 mt-10"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <div className=" ">
                <p className="section-title !text-[#778d2e] font-extrabold ">
                  22+
                </p>
                <p>Years of Experience</p>
              </div>
              <div className="">
                <p className="section-title !text-[#778d2e] font-extrabold ">
                  489+
                </p>
                <p>Expert Cleaners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
