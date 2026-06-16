"use client";
import StaticBox from "@/components/small/StaticBox";
import { about_static } from "@/static/data";

import { motion } from "framer-motion";
import Image from "next/image";

function StaticSection() {
  return (
    <section className="py-[3em] md:py-[5em] lg:py-[4em] bg-title">
      <div className="section-container  h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-10 md:gap-7 lg:gap-16 mt-16 mx-auto lg:max-w-[1200px] mobile-landscape:min-h-[420px]">
          <div className="bg-transparent col-span-1 md:col-span-2 lg:col-span-7">
            <Image
              src={"/images/about-4.jpg"}
              height={500}
              width={500}
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
          <div className="col-span-1 grid grid-cols-1 lg:col-span-3 gap-5 rounded-medium">
            {about_static.map(
              (item: { text: string; label: string }, key: number) => {
                return <StaticBox key={key} {...item} />;
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StaticSection;
