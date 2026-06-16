"use client";
import React from "react";
import { motion } from "framer-motion";
import { IHomePortfolio } from "@/static/data";
import Link from "next/link";

function PortfolioBox({ item }: { item: IHomePortfolio }) {
  return (
    <div>
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
            transition={{ delay: 0.9, duration: 0.35 }}
          />
          <motion.div
            className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "bottom" }}
          ></motion.div>
        </div>
        <div className="">
          <p className="mt-2! subtitle block!">{item.label}</p>
          <h2 className="card-title mt-2!">{item.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default PortfolioBox;
