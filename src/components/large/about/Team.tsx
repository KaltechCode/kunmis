"use client";
import TeamBox from "@/components/medium/TeamBox";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_why, IHomeWhy } from "@/static/data";
import { motion } from "framer-motion";

function Team() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-white">
      <div className="section-container h-full">
        <div className="grid grid-cols-1 h-full lg:grid-cols-12 lg:gap-7 lg:max-w-[1200px] mx-auto">
          <div className="lg:col-span-4">
            <motion.p
              className="subtitle font-openSans justify-center lg:justify-start! "
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              <span>
                <Iconstars />{" "}
              </span>
              Our Team
            </motion.p>
            <motion.h2
              className="section-title text-center lg:text-left font-instrument"
              initial={{ scaleY: 0, opacity: 0.5 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              style={{ transformOrigin: "bottom" }}
            >
              Our Expert Team Memberse
            </motion.h2>
          </div>

          {/* boses */}
          <div className="mt-16 lg:mt-0 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center justify-center">
              {home_why.map((item: IHomeWhy, key: number) => {
                return (
                  <TeamBox
                    name="Sophia Miller"
                    role="Home Organization Expert"
                    image="/images/about-5.jpg"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
