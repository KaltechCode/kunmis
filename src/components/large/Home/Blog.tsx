"use client";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_blog, IHomePortfolio } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { motion } from "framer-motion";

import React from "react";

export default function Blog() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="grid h-full lg:max-w-[1200px] mx-auto">
          {/* section tittle*/}
          <div className="md:flex md:justify-between md:items-end">
            <div className="md:w-[65%]">
              <motion.p
                className="subtitle font-openSans justify-start!"
                initial={{ scaleY: 0, opacity: 0.5 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "bottom" }}
              >
                <span>
                  <Iconstars />{" "}
                </span>
                RECENT BLOGS
              </motion.p>
              <motion.h2
                className="section-title text-left font-instrument"
                initial={{ scaleY: 0, opacity: 0.5 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "bottom" }}
              >
                Stay Updated With Our Recent Posts
              </motion.h2>
            </div>

            <PrimaryBtnBlack
              text="View All Portfolio"
              link="/portfolio"
              size="py-4 px-8 mt-3 "
            />
          </div>

          {/* boxes */}
          <div className="">
            <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-12">
              {home_blog.map((item: IHomePortfolio, key: number) => {
                return (
                  <div key={key} className="lg:col-span-4 hover:scale-100">
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
                          transition={{ delay: 0.5, duration: 0.35 }}
                        />
                        <motion.div
                          className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
                          initial={{ scaleY: 1 }}
                          whileInView={{ scaleY: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          style={{ transformOrigin: "bottom" }}
                        ></motion.div>
                      </div>
                      <div className="">
                        <p className="mt-2! subtitle justify-start! items-center text-title!">
                          <span>
                            <CiCalendar
                              className="text-liteBlue!"
                              size={24}
                            />{" "}
                          </span>
                          {item.label}
                        </p>
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
