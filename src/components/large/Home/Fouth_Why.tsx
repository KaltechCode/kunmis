"use client";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_why, IHomeWhy } from "@/static/data";
import React from "react";
import { motion } from "framer-motion";
import HomeWhyBox from "@/components/medium/HomeWhyBox";

function FouthWhy() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-white">
      <div className="section-container h-full">
        <div className="grid h-full lg:grid-cols-10 lg:gap-7 lg:max-w-[1200px] mx-auto">
          {/* section tittle*/}
          <div className="lg:col-span-4">
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
              WHY KUMIS CLEANERS
            </motion.p>
            <motion.h2
              className="section-title text-left font-instrument"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              Superior Cleaning, Expert-Level Shine
            </motion.h2>

            <motion.div
              className=""
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <PrimaryBtnBlack
                text="About Us"
                link="/about"
                size="py-4 px-8 mt-3"
              />
            </motion.div>
          </div>

          {/* boses */}
          <div className="mt-16 lg:col-span-6 pt-">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 ">
              {home_why.map((item: IHomeWhy, key: number) => {
                return <HomeWhyBox key={key} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FouthWhy;
