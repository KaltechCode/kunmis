import React from "react";
import { motion } from "framer-motion";
import { IHomeService } from "@/static/data";

function HomeServiceImage({ item }: { item: IHomeService }) {
  return (
    <div className="rounded-medium overflow-hidden relative">
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
}

export default HomeServiceImage;
