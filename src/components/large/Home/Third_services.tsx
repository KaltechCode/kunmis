"use client";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_services, IHomeService } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

function ThirdServices() {
  return (
    <section className="min-h-screen py-[6em] md:py-[5em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="flex  flex-col justify-center items-center h-full">
          {/* section tittle*/}
          <div className="">
            <motion.p
              className="subtitle font-openSans"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <span>
                <Iconstars />{" "}
              </span>
              HOW IT SERVICES
            </motion.p>
            <motion.h2
              className="section-title text-center font-instrument lg:w-[70%] mx-auto"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              Transform Your Space With Expert Cleaning
            </motion.h2>
          </div>

          {/* Boxes */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-10 lg:gap-7 mt-15 mx-auto lg:max-w-[1200px] mobile-landscape:min-h-[420px]">
              {home_services.map((item: IHomeService, key: number) => {
                const Icon = item.icon as IconType;
                return item.icon ? (
                  <motion.div
                    data-w-id=""
                    className="home-service-card group"
                    key={key}
                    whileHover={{
                      background: "linear-gradient(to bottom, #282b3459, #fff)",
                    }}
                    layout
                  >
                    <div className="w-layout-vflex home-service-top-wrap flex justify-between items-center ">
                      <Link
                        href="/service/carpet-treatment"
                        className="card-title link"
                      >
                        Carpet Treatment
                      </Link>
                      <div className="home-service-icon-wrap ">
                        <Icon size={24} color={"#fff"} className="#fff" />
                      </div>
                    </div>
                    <motion.div
                      className="flex flex-col mt-5 gap-2.5 home-service-card-content-area font-open leading-[160%]"
                      layout="y"
                    >
                      <p>
                        Deep shampooing effectively removes dirt, stains, and
                        odors, restoring carpets to original lasting beauty.
                      </p>
                      <Link
                        href="/service/carpet-treatment"
                        className="home-service-link border-b border-title w-inline-block hidden gap-2 items-center group-hover:flex transition-all duration-500 w-max group"
                      >
                        <span>View Details</span>
                        <span>
                          <IoArrowForward className="text-title -rotate-45 hover:rotate-0" />
                        </span>
                      </Link>
                    </motion.div>
                    {/* <div
                      data-w-id="b2ae6e53-7f47-9f98-f81b-d5f4b5ba4710"
                      className="home-service-card-overlay"
                    ></div> */}
                  </motion.div>
                ) : (
                  <div
                    className="rounded-medium overflow-hidden relative"
                    key={key}
                  >
                    <motion.img
                      src={item.image || ""}
                      height={500}
                      width={500}
                      className="w-full"
                      alt={item.title || ""}
                      initial={{ scale: 1.3 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                    />
                    <motion.div
                      className="h-full w-full bg-background-white top-0 left-0 absolute z-90"
                      initial={{ scaleY: 1 }}
                      whileInView={{ scaleY: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "bottom" }}
                    ></motion.div>
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

export default ThirdServices;
