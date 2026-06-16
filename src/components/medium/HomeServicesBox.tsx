"use client";
import { IHomeService } from "@/static/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { IoArrowForward } from "react-icons/io5";

function HomeServicesBox({ item, key }: { item: IHomeService; key: number }) {
  const Icon = item.icon as IconType;
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
      <div className="w-layout-vflex home-service-top-wrap flex justify-between items-center ">
        <Link href={`/services/${item.link}`} className="card-title link">
          {item.title}
        </Link>
        <div className="home-service-icon-wrap ">
          <Icon size={24} color={"#fff"} className="#fff" />
        </div>
      </div>
      <motion.div
        className="flex flex-col mt-5 gap-2.5 home-service-card-content-area font-open leading-[160%]"
        layout="y"
      >
        <p>{item.text}</p>
        <Link
          href={`/services/${item.link}`}
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
  );
}

export default HomeServicesBox;
