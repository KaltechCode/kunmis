import PrimaryBtn from "@/components/small/buttons/PrimaryBtn";
import Iconstars from "@/components/small/icons/Icon_stars";
import Image from "next/image";
import React from "react";

function First() {
  return (
    <section className="h-auto py-[3em] md:py-[5em] lg:py-[4em] ">
      <div className="section-container  h-full">
        <div className="flex  flex-col justify-center items-center h-full">
          {/* section tittle*/}
          <div className="">
            <p className="subtitle">
              <span>
                <Iconstars />{" "}
              </span>
              SERVICES
            </p>
            <h2 className="banner-title text-center font-instrument lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
              Skilled Home Cleaning Experts
            </h2>
          </div>

          {/* boxes */}
          <div className="w-full mt-5 lg:max-w-[1200px] mx-auto  rounded-medium overflow-hidden">
            <Image
              src={"/images/service-1.jpg"}
              alt="kunmis services"
              width={600}
              height={300}
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
