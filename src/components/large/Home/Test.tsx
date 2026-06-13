"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoStar } from "react-icons/io5";
import Iconstars from "@/components/small/icons/Icon_stars";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Book / Schedule",
    description:
      "Easily book your cleaning service online or by phone at your convenience.",
  },
  {
    id: 2,
    number: "02",
    title: "Make Appointment",
    description:
      "Book your cleaning service quickly and easily online or by phone anytime.",
  },
  {
    id: 3,
    number: "03",
    title: "Lets Clean Home",
    description:
      "Our trained staff use safe and effective methods to deliver spotless results.",
  },
];

export default function EasyStepsSection() {
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

  const card4X = useTransform(scrollYProgress, [0, 0.6], [-450, 0]);

  // Unfold animation
  const card1Rotate = useTransform(scrollYProgress, [0, 0.6], [-18, 0]);

  const card2Rotate = useTransform(scrollYProgress, [0, 0.6], [-8, 0]);

  const card3Rotate = useTransform(scrollYProgress, [0, 0.6], [8, 0]);

  const card4Rotate = useTransform(scrollYProgress, [0, 0.6], [18, 0]);

  const cardBaseClass =
    "absolute top-0 h-[370px] w-[240px]  xl:h-[350px] xl:w-[280px] bg-[#f4f4f4] p-5 shadow-sm rounded-medium";

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-white hidden xl:block mobile-landscape:hidden"
    >
      <div className="sticky top-0 flex h-auto py-5  lg:h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
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

          {/* Desktop */}
          <div className="relative hidden h-[480px] lg:grid grid-cols-4 gap-4 mt-40 ">
            {/* Card 1 */}
            <motion.div
              style={{
                x: card1X,
                rotate: card1Rotate,
                scale,
              }}
              className={`${cardBaseClass} left-0 z-10 rounded-medium`}
            >
              <span className="text-6xl text-gray-400">01</span>

              <h3 className="mt-24 text-[20px] font-semibold text-[#17213F]">
                Book / Schedule
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Easily book your cleaning service online or by phone at your
                convenience.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              style={{
                x: card2X,
                rotate: card2Rotate,
                scale,
              }}
              className={`${cardBaseClass} left-[300px] z-20`}
            >
              <span className="text-6xl text-gray-400">02</span>

              <h3 className="mt-24 text-[20px] font-semibold text-[#17213F]">
                Make Appointment
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Book your cleaning service quickly and easily online or by phone
                anytime.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              style={{
                x: card3X,
                rotate: card3Rotate,
                scale,
              }}
              className={`${cardBaseClass} left-[600px] z-30`}
            >
              <span className="text-6xl text-gray-400">03</span>

              <h3 className="mt-24 text-[20px] font-semibold text-[#17213F]">
                Lets Clean Home
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Our trained staff use safe and effective methods to deliver
                spotless results.
              </p>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              style={{
                x: card4X,
                rotate: card4Rotate,
                scale,
              }}
              className="absolute left-[900px] top-0 z-40 h-[370px] w-[240px]  xl:h-[350px] xl:w-[280px] bg-[#07143D] p-5 text-white shadow-lg rounded-medium"
            >
              <IoStar className="h-8 w-8 text-slate-400" />

              <h3 className="mt-24 text-[20px] font-semibold leading-tight">
                Ready for a Spotless Home Today and Always?
              </h3>

              <button className="mt-8 w-full rounded-full bg-[#8AA02C] py-4 text-lg font-semibold">
                Book Now ↗
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
