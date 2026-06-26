"use client";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_why, IHomeWhy } from "@/static/data";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 1 } },
};
const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
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
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-7 "
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              {home_why.map((item: IHomeWhy, key: number) => {
                const Icon = item.icon;
                return (
                  <motion.div className="expert-card" variants={items}>
                    <div className="expert-card-icon-wrap">
                      <div className="">
                        <Icon />
                      </div>
                      <h3 className="card-title mt-5!">{item.title}</h3>
                      <p className=" mt-5">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FouthWhy;
