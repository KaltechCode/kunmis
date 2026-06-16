"use client";

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

import { useState } from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamBox({ image, name, role }: TeamCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group w-full max-w-[380px] mx-auto">
      <div className="relative overflow-hidden rounded-medium">
        <Image
          src={image}
          alt={name}
          width={380}
          height={420}
          className="h-auto w-full object-cover"
        />

        {/* Social Menu */}
        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C163F] text-white transition hover:scale-105"
          >
            {open ? <IoIosClose size={24} /> : <FiPlus size={24} />}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 rounded-xl bg-[#0C163F] p-3">
              <a href="#" className="text-white transition hover:scale-110">
                <FaFacebook size={20} />
              </a>

              <a href="#" className="text-white transition hover:scale-110">
                <FaInstagram size={20} />
              </a>

              <a href="#" className="text-white transition hover:scale-110">
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="card-title">{name}</h3>

        <p className="">{role}</p>
      </div>
    </div>
  );
}
