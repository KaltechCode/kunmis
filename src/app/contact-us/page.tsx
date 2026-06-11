import FAQ from "@/components/large/services/FAQ";
import Contact_form from "@/components/medium/Contact_form";
import Iconstars from "@/components/small/icons/Icon_stars";
import Image from "next/image";
import React from "react";
import { HiPhone } from "react-icons/hi2";
import { IoMail } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";

function Page() {
  return (
    <main>
      <section className="h-auto py-[3em] md:py-[5em] lg:py-[4em] ">
        <div className="section-container  h-full">
          <div className="flex  flex-col justify-center items-center h-full">
            {/* section tittle*/}
            <div className="">
              <p className="subtitle">
                <span>
                  <Iconstars />{" "}
                </span>
                CONTACT US
              </p>
              <h2 className="banner-title text-center font-instrument md:w-[80%] lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
                Your Spotless Home Awaits! Contact Us Now
              </h2>
            </div>

            {/* boxes */}
            <div className="w-full mt-5  md:mt-16 lg:max-w-[1200px] mx-auto  overflow-hidden">
              <div className="grid grid-cols-1 gap-7 md-landscape:grid-cols-3 lg:grid-cols-3">
                <div className="bg-title py-10 rounded-medium  md-landscape:col-span-2 md-landscape:order-1 lg:col-span-2">
                  <Contact_form />
                </div>

                <div className="rounded-[20px] border border-gray-300 bg-[#f5f5f5] p-6 md:p-8 md-landscape:order-3 ">
                  <h3 className="card-title">Quick Contacts</h3>

                  <p className="">
                    Drop us a message, our team usually replies within a few
                    hours.
                  </p>

                  <div className="mt-10 flex flex-col gap-8">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <HiPhone
                        size={32}
                        className="fill-blue-600 text-blue-600"
                      />

                      <p className="">Mobile: +(1)629-217-5852</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <IoMail
                        size={32}
                        className="fill-blue-600 text-blue-600"
                      />

                      <p className="">info@kumiscleaners.com</p>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                      <RiMapPin2Fill
                        size={32}
                        className="fill-blue-600 text-blue-600"
                      />

                      <p className="">102 Some Address Road</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}

export default Page;
