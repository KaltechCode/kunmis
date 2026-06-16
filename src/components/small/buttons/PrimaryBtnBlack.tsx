import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function PrimaryBtnBlack({
  size,
  text,
  link,
  iconStyle,
}: {
  text: string;
  link: string;
  size: string;
  iconStyle?: string;
}) {
  return (
    <div className="w-min-content flex group">
      <Link
        href={link}
        className={` ${size} text-white  text-center rounded-circle bg-background-black group-[first]: hover:bg-background-primary duration-300 flex items-center justify-center gap-1 font-medium text-default`}
      >
        {text}{" "}
        <span>
          <GoArrowUpRight
            className={`${iconStyle} text-white pt-px size-6 group-hover:rotate-45 duration-300`}
          />
        </span>
      </Link>
    </div>
  );
}

export default PrimaryBtnBlack;
