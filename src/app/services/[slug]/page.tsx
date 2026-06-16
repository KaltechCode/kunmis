import First from "@/components/large/services/First";
import { serviceDetails } from "@/static/data";
import Image from "next/image";
import React from "react";

function page() {
  const data = serviceDetails[0];
  return (
    <main className="pb-[3em] md:pb-[4em]">
      <First image={data.bannerImage} text={data.bannerText} small={true} />
      <div className="mt-0 lg:mt-10 lg:mt-7 px-4 md:px-10 max-w-300 mx-auto">
        {/* introductio */}
        <div className="">
          <p className="card-title font-open! font-bold! text-title">
            Introduction
          </p>

          <div className="flex flex-col gap-7 mt-7">
            {data.intro.map((item: string, key: number) => {
              return <p className="text-justify">{item}</p>;
            })}
          </div>
        </div>

        {/* Unmatch */}
        <div className="mt-7 lg:mt-16">
          <p className="card-title font-open! font-bold! text-title">
            Unmatched Service Quality
          </p>

          <p className="mt-5 text-justify">{data.unmatchText}</p>

          <div className="flex flex-col gap-4 mt-10 pl-5">
            {data.unmatchList.map((item: string, key: number) => {
              return (
                <li>
                  <p className="font-semibold!">{item}</p>
                </li>
              );
            })}
          </div>

          <div className="w-full mt-7 lg:mt-12 mx-auto  rounded-medium overflow-hidden">
            <Image
              src={data.unmatchImage}
              alt="kunmis services"
              width={1000}
              height={500}
              className="w-full md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>

        {/* how it works */}
        <div className="mt-7 lg:mt-20">
          <p className="card-title font-open! font-bold! text-title">
            How We Work
          </p>

          <p className="mt-5 text-justify">{data.howItWorkText}</p>

          <div className="w-full mt-7 lg:mt-20 mx-auto  rounded-medium overflow-hidden">
            <Image
              src={data.howItWorkImage}
              alt="kunmis services"
              width={1000}
              height={500}
              className="w-full md:h-[400px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
