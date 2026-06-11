import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

function ServicesBox({
  image,
  Icon,
  title,
  text,
}: {
  image: string;
  Icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-background-grey p-2 rounded-medium">
      <div className="relative  left-0 top-0 w-full rounded-medium overflow-hidden">
        <div className="w-full  left-0 top-0">
          <Image
            src={image}
            alt={title}
            height={400}
            width={400}
            className="w-full"
          />
        </div>
        <div className="z-10 absolute top-4 left-4 bg-background-white rounded-medium flex justify-center items-center h-15 w-15">
          <Icon className="text-liteBlue" size={24} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="card-title mt-5!">{title}</h3>
        <p className=" mt-5">{text}</p>
      </div>
    </div>
  );
}

export default ServicesBox;
