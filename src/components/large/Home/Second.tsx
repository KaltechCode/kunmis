"use client";
import PrimaryBtn from "@/components/small/buttons/PrimaryBtn";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_steps, IHomeSteps } from "@/static/data";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import EasyStepsSection from "./Test";

function Second() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);

  // Spread positions
  const card1X = useTransform(scrollYProgress, [0, 0.6], [450, 0]);

  const card2X = useTransform(scrollYProgress, [0, 0.6], [150, 0]);

  const card3X = useTransform(scrollYProgress, [0, 0.6], [-150, 0]);

  const card4X = useTransform(scrollYProgress, [0, 0.6], [-550, 0]);

  // Unfold animation
  const card1Rotate = useTransform(scrollYProgress, [0, 0.6], [-18, 0]);

  const card2Rotate = useTransform(scrollYProgress, [0, 0.6], [-8, 0]);

  const card3Rotate = useTransform(scrollYProgress, [0, 0.6], [8, 0]);

  const card4Rotate = useTransform(scrollYProgress, [0, 0.6], [18, 0]);

  const cardBaseClass =
    "absolute top-0 h-[370px] w-[240px] xl:h-[340px] xl:w-[280px]  rounded-[28px] bg-[#f4f4f4] p-5 shadow-sm";
  return (
    <>
      <section className="min-h-screen md:min-h-auto lg:h-[100vh] py-[6em] md:py-[5em] lg:py-[6em] xl:hidden">
        <div className="section-container  h-full">
          <div className="flex  flex-col justify-center items-center h-full">
            {/* section tittle*/}
            <div className="">
              <p className="subtitle">
                <span>
                  <Iconstars />{" "}
                </span>
                HOW IT WORKS
              </p>
              <h2 className="section-title text-center font-instrument lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
                Effortless Cleaning in 3 Easy Steps!
              </h2>
            </div>

            {/* boxes */}
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-10 lg:gap-7 mt-15 lg:max-w-[1200px] mx-auto">
                {home_steps.map((item: IHomeSteps) => {
                  return (
                    <div
                      className={`how-it-works-card flex flex-col justify-between py-5  px-5  rounded-medium mobile-landscape:min-h-[290px] ${item.link ? "bg-background-black" : "bg-background-grey"}`}
                    >
                      <div className="how-it-works-icon-wrap">
                        <div className="big-number">
                          {item.id == "04" ? <Iconstars /> : item.id}
                        </div>
                      </div>
                      <div className=" mt-7">
                        {item.title && (
                          <h3 className="how-it-works-title font-instrument">
                            {item.title}
                          </h3>
                        )}
                        <div className="mt-7">
                          <p
                            className={`mg-0 ${item.link ? "text-white! how-it-works-title" : "text-black"}`}
                          >
                            Book your cleaning service quickly and easily online
                            or by phone anytime.
                          </p>
                        </div>

                        {item.link && item.label && (
                          <div className="mt-7">
                            <PrimaryBtn
                              text={item.label || ""}
                              link={item.link}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EasyStepsSection />
    </>
  );
}

export default Second;
