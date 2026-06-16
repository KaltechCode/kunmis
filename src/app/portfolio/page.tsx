"use client";
import Iconstars from "@/components/small/icons/Icon_stars";
import { IHomePortfolio, portfolio } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Banner from "@/components/medium/Banner";

function Portfolio() {
  const [category, setCategory] = useState<string>("all");

  const filteredPortfolio =
    category === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === category);

  console.log("cat", category, filteredPortfolio);
  const tab = [
    {
      label: "All",
      data: "all",
    },
    {
      label: "Deep Cleaning",
      data: "deep",
    },
    {
      label: "Hygiene Care",
      data: "hygiene",
    },
    {
      label: "Organized Living",
      data: "organize",
    },
  ];
  return (
    <main>
      <section className="py-[6em] md:py-[2em] lg:py-[6em] bg-background-grey">
        <div className="section-container  h-full">
          <div className="grid h-full lg:max-w-[1200px] mx-auto">
            {/* section tittle*/}
            <div className="md:flex md:justify-between md:items-end">
              <div className="">
                <motion.p
                  className="subtitle font-openSans"
                  initial={{ scaleY: 0, opacity: 0.5 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom" }}
                >
                  <span>
                    <Iconstars />{" "}
                  </span>
                  PORTFOLIO
                </motion.p>
                <motion.h2
                  className="banner-title text-center font-instrument"
                  initial={{ scaleY: 0, opacity: 0.5 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "bottom" }}
                >
                  Check Out Our Sparkling Clean Transformations
                </motion.h2>
              </div>
            </div>

            {/* boxes */}
            <div className="">
              <div className="mt-16 flex gap-5 w-full justify-center md:w-max mx-auto flex-wrap">
                {tab.map(
                  (item: { label: string; data: string }, key: number) => {
                    return (
                      <motion.button
                        onClick={() => setCategory(item.data)}
                        className={`border-1 border-slate-300 py-3 px-6 rounded-full cursor-pointer ${category == item.data && "bg-title! text-white!"}`}
                        whileHover={{ background: "#131b33", color: "#fff" }}
                        transition={{ duration: 0.5 }}
                      >
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  },
                )}
              </div>
              <div className="grid gap-10 mt-16 md:grid-cols-2 ">
                {filteredPortfolio?.map((item: IHomePortfolio, key: number) => {
                  return (
                    <div key={key}>
                      <Link rel="stylesheet" href={item.link}>
                        <div className="rounded-medium overflow-hidden relative">
                          <motion.img
                            src={item.image}
                            height={300}
                            width={300}
                            className="w-full h-auto"
                            alt={item.title}
                            initial={{ scale: 1.3 }}
                            whileInView={{ scale: 1 }}
                            whileHover={{ scale: 1.5 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9, duration: 0.35 }}
                          />
                          <motion.div
                            className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
                            initial={{ scaleY: 1 }}
                            whileInView={{ scaleY: 0 }}
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            style={{ transformOrigin: "bottom" }}
                          ></motion.div>
                        </div>
                        <div className="">
                          <p className="mt-2! subtitle block!">{item.label}</p>
                          <h2 className="card-title mt-2!">{item.title}</h2>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </main>
  );
}

export default Portfolio;
