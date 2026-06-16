"use client";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_services, IHomeService } from "@/static/data";

import { motion } from "framer-motion";
import HomeServicesBox from "@/components/medium/HomeServicesBox";
import HomeServiceImage from "@/components/medium/HomeServiceImage";

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
                return item.icon ? (
                  <HomeServicesBox item={item} key={key} />
                ) : (
                  <HomeServiceImage key={key} item={item} />
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
