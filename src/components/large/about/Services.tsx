"use client";
import Iconstars from "@/components/small/icons/Icon_stars";
import {
  about_services,
  home_services,
  IAboutService,
  IHomeService,
} from "@/static/data";
import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

function AboutServices() {
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
              core value
            </motion.p>
            <motion.h2
              className="section-title text-center font-instrument lg:w-[70%] mx-auto"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              What Makes Our Cleaning Services the Best?
            </motion.h2>
          </div>

          {/* Boxes */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-10 lg:gap-7 mt-15 mx-auto lg:max-w-[1200px] mobile-landscape:min-h-[420px]">
              {about_services.map((item: IAboutService, key: number) => {
                const Icon = item.Icon as IconType;
                return (
                  <motion.div
                    data-w-id=""
                    className="home-service-card group"
                    key={key}
                    whileHover={{
                      background: "linear-gradient(to bottom, #282b3459, #fff)",
                    }}
                    layout
                  >
                    <div className="w-layout-vflex home-service-top-wrap">
                      <div className="home-service-icon-wrap ">
                        <Icon size={24} color={"#fff"} className="#fff" />
                      </div>
                    </div>
                    <motion.div
                      className="flex flex-col mt-5 gap-2.5 home-service-card-content-area font-open leading-[160%]"
                      layout="y"
                    >
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </motion.div>
                    {/* <div
                      data-w-id="b2ae6e53-7f47-9f98-f81b-d5f4b5ba4710"
                      className="home-service-card-overlay"
                    ></div> */}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutServices;
