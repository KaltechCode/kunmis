import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function PrimaryBtn({
  size,
  text,
  link,
}: {
  size?: string;
  text: string;
  link: string;
}) {
  return (
    <div className="w-min-content flex">
      <Link
        href={link}
        className={`${size == "sm" ? `sm:px-8 sm:py-4` : "w-full py-3"} text-white border-none  text-center rounded-circle bg-background-primary group-[first]: flex items-center justify-center gap-3 font-medium text-default`}
      >
        {text}{" "}
        <span>
          <GoArrowUpRight className="text-white pt-px size-6" />
        </span>
      </Link>
    </div>
  );
}

export default PrimaryBtn;
