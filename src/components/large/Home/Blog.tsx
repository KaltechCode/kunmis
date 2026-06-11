import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_blog, IHomePortfolio } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

import React from "react";

export default function Blog() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="grid h-full lg:max-w-[1200px] mx-auto">
          {/* section tittle*/}
          <div className="md:flex md:justify-between md:items-end">
            <div className="md:w-[65%]">
              <p className="subtitle font-openSans justify-start!">
                <span>
                  <Iconstars />{" "}
                </span>
                RECENT BLOGS
              </p>
              <h2 className="section-title text-left font-instrument">
                Stay Updated With Our Recent Posts
              </h2>
            </div>

            <PrimaryBtnBlack
              text="View All Portfolio"
              link="/portfolio"
              size="py-4 px-8 mt-3 "
            />
          </div>

          {/* boxes */}
          <div className="">
            <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-12">
              {home_blog.map((item: IHomePortfolio, key: number) => {
                return (
                  <div key={key} className="lg:col-span-4 hover:scale-100">
                    <Link rel="stylesheet" href={item.link}>
                      <div className="rounded-medium overflow-hidden">
                        <Image
                          src={item.image}
                          height={300}
                          width={300}
                          className="w-full h-auto"
                          alt={item.title}
                          priority
                        />
                      </div>
                      <div className="">
                        <p className="mt-2! subtitle justify-start! items-center text-title!">
                          <span>
                            <CiCalendar
                              className="text-liteBlue!"
                              size={24}
                            />{" "}
                          </span>
                          {item.label}
                        </p>
                        <h2 className="card-title mt-2!">{item.title}</h2>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
