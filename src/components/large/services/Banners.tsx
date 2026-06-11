import PrimaryBtn from "@/components/small/buttons/PrimaryBtn";
import PrimaryBtnBlack from "@/components/small/buttons/PrimaryBtnBlack";
import OverlarpedImages from "@/components/small/overlarpedImages";
import React from "react";

function Banners() {
  return (
    <section className="py-[2em] md:py-[5em] lg:py-[6em] ">
      <div className="section-container ">
        <div className="grid  grid-rows-2 lg:max-w-[1200px] mx-auto gap-10 mobile-landscape:grid-rows-1 mobile-landscape:grid-cols-3 mobile-landscape:gap-7 md:grid-rows-1 md:grid-cols-3 md:gap-7">
          <div className="min-h-[200px] bg-background-primary rounded-medium p-5 mobile-landscape:col-span-2 md:col-span-2">
            <div className="mt-7">
              <p className={`mg-0 text-white! how-it-works-title `}>
                Book your cleaning service quickly and easily online or by phone
                anytime.
              </p>
            </div>

            <div className="mt-7">
              <PrimaryBtnBlack
                size="bg-background-white! py-4 px-8 text-content!"
                text="Book Now"
                link="/appointment"
                iconStyle="text-content!"
              />
            </div>
          </div>

          <div className="min-h-[200px] bg-background-black rounded-medium p-5 flex items-center">
            <div className="">
              <OverlarpedImages large={true} />
              <p className={`mg-0 text-white! how-it-works-title mt-[88px]`}>
                Serving 50K+ homes with exceptional cleaning!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banners;
