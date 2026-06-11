import Iconstars from "@/components/small/icons/Icon_stars";
import { home_services, IHomeService } from "@/static/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ThirdServices() {
  return (
    <section className="min-h-screen py-[6em] md:py-[5em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="flex  flex-col justify-center items-center h-full">
          {/* section tittle*/}
          <div className="">
            <p className="subtitle font-openSans">
              <span>
                <Iconstars />{" "}
              </span>
              HOW IT SERVICES
            </p>
            <h2 className="section-title text-center font-instrument lg:w-[70%] mx-auto">
              Transform Your Space With Expert Cleaning
            </h2>
          </div>

          {/* Boxes */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-4 md:gap-10 lg:gap-7 mt-15 mx-auto lg:max-w-[1200px] mobile-landscape:min-h-[420px]">
              {home_services.map((item: IHomeService) => {
                const Icon = item.icon && item.icon;
                return item.icon ? (
                  <div
                    data-w-id="b2ae6e53-7f47-9f98-f81b-d5f4b5ba4704"
                    className="home-service-card"
                  >
                    <div className="w-layout-vflex home-service-top-wrap flex justify-between items-center ">
                      <Link
                        href="/service/carpet-treatment"
                        className="card-title link"
                      >
                        Carpet Treatment
                      </Link>
                      <div className="home-service-icon-wrap ">
                        <Icon size={24} color={"#fff"} className="#fff" />
                      </div>
                    </div>
                    <div className="w-layout-v mt-5 flex home-service-card-content-area font-open leading-[160%]">
                      <p>
                        Deep shampooing effectively removes dirt, stains, and
                        odors, restoring carpets to original lasting beauty.
                      </p>
                      {/* <a
                        data-w-id="b2ae6e53-7f47-9f98-f81b-d5f4b5ba470b"
                        href="/service/carpet-treatment"
                        className="home-service-link w-inline-block"
                      >
                        <div>View Details</div>
                        <div className="button-icon"></div>
                      </a> */}
                    </div>
                    {/* <div
                      data-w-id="b2ae6e53-7f47-9f98-f81b-d5f4b5ba4710"
                      className="home-service-card-overlay"
                    ></div> */}
                  </div>
                ) : (
                  <div className="rounded-medium overflow-hidden">
                    <Image
                      src={item.image || ""}
                      height={500}
                      width={500}
                      className="w-full"
                      alt={item.title || ""}
                    />
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

export default ThirdServices;
