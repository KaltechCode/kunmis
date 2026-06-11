import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_why, IHomeWhy } from "@/static/data";
import React from "react";

function FouthWhy() {
  return (
    <section className="py-[6em] md:py-[6em] lg:py-[6em] bg-background-white">
      <div className="section-container h-full">
        <div className="grid h-full lg:grid-cols-10 lg:gap-7 lg:max-w-[1200px] mx-auto">
          {/* section tittle*/}
          <div className="lg:col-span-4">
            <p className="subtitle font-openSans justify-start!">
              <span>
                <Iconstars />{" "}
              </span>
              WHY KUMIS CLEANERS
            </p>
            <h2 className="section-title text-left font-instrument">
              Superior Cleaning, Expert-Level Shine
            </h2>

            <PrimaryBtnBlack
              text="About Us"
              link="/about"
              size="py-4 px-8 mt-3"
            />
          </div>

          {/* boses */}
          <div className="mt-16 lg:col-span-6 pt-">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 ">
              {home_why.map((item: IHomeWhy, key: number) => {
                const Icon = item.icon;
                return (
                  <div
                    // style={{ opacity: 0 }}
                    className="expert-card "
                    key={key}
                  >
                    <div className="expert-card-icon-wrap">
                      <div className="">
                        <Icon />
                      </div>
                      <h3 className="card-title mt-5!">{item.title}</h3>
                      <p className=" mt-5">{item.text}</p>
                    </div>
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

export default FouthWhy;
