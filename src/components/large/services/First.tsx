import PrimaryBtn from "@/components/small/buttons/PrimaryBtn";
import Iconstars from "@/components/small/icons/Icon_stars";
import Image from "next/image";
import React from "react";

function First({
  image,
  tag,
  text,
  small,
}: {
  text: string;
  tag?: string;
  image: string;
  small?: boolean;
}) {
  return (
    <section className="h-auto py-[3em] md:py-[3em] lg:py-[4em] ">
      <div className="section-container  h-full">
        <div
          className={`flex  flex-col justify-center items-center h-full ${small && "max-w-[1200px] mx-auto"}`}
        >
          {/* section tittle*/}
          <div className="">
            {tag && (
              <p className="subtitle">
                <span>
                  <Iconstars />{" "}
                </span>
                {tag}
              </p>
            )}
            <h2 className="banner-title text-center font-instrument md:w-[100%] lg:w-[100%] xl:w-[70%] mobile-landscape:w-[100%] mx-auto">
              {text}
            </h2>
          </div>

          {/* boxes */}
          <div className="w-full mt-5 lg:max-w-[1200px] 2xl:max-w-[1800px] mx-auto  rounded-medium overflow-hidden">
            <Image
              src={image}
              alt="kunmis services"
              width={1000}
              height={1000}
              className="w-full h-[220px] md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default First;
