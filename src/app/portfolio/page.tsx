"use client";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import {
  home_portfolio,
  IHomePortfolio,
  portfolio,
  IPortfolio,
} from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function Portfolio() {
  const [category, setCategory] = useState("all");

  const filteredPortfolio =
    category === "all"
      ? portfolio
      : portfolio.filter((item) => item.category === category);
  return (
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
            <div className="">
              <button onClick={() => setCategory("all")}>
                <span>All</span>
              </button>
              <button onClick={() => setCategory("deep")}>
                <span>Deep Cleaning</span>
              </button>
              <button onClick={() => setCategory("hygiene")}>
                <span>Hygiene Care</span>
              </button>
              <button onClick={() => setCategory("organize")}>
                <span>Organized Living</span>
              </button>
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
  );
}

export default Portfolio;
