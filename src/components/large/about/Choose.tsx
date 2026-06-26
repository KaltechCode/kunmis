"use client";
import ChooseBox from "@/components/medium/Choose";
import Iconstars from "@/components/small/icons/Icon_stars";
import { about_choose, IAbouChoose } from "@/static/data";

import { motion } from "framer-motion";
import Image from "next/image";

function ChooseUs() {
  return (
    <section className="min-h-screen py-[3em] md:py-[4em] lg:py-[5em] bg-background-white">
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
              WHY CHOOSE US
            </motion.p>
            <motion.h2
              className="section-title text-center font-instrument lg:w-[70%] mx-auto"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              Experience the Ultimate Clean with Professional Care{" "}
            </motion.h2>
          </div>

          {/* Boxes */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-16 mt-16 mx-auto lg:max-w-[1200px] mobile-landscape:min-h-[420px]">
            <div className="bg-background-white col-span-1 bg-[url(/images/about-3.webp)] bg-no-repeat  w-full h-[250px] sm:h-[300px] bg-center md:h-full bg-cover rounded-lg">
              {/* <Image
                src={"/images/about-3.webp"}
                height={500}
                width={300}
                className="w-full rounded-medium md:h-full"
                alt="office cleaning"
              /> */}
              <motion.div
                className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                style={{ transformOrigin: "bottom" }}
              ></motion.div>
            </div>
            <div className="col-span-1 rounded-medium">
              {about_choose.map((item: IAbouChoose, key: number) => {
                return <ChooseBox key={key} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
