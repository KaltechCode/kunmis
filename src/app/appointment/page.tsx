import Contact_form from "@/components/medium/Contact_form";
import Iconstars from "@/components/small/icons/Icon_stars";
import React from "react";

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
                Appointment
              </p>
              <h2 className="banner-title text-center font-instrument md:w-[80%] lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
                Schedule a Cleaning Service at Your Convenience
              </h2>
            </div>

            {/* boxes */}
            <div className="w-full mt-5  md:mt-16 lg:max-w-[1200px] mx-auto  overflow-hidden">
              <div className="grid grid-cols-1 gap-7 md-landscape:grid-cols-3 lg:grid-cols-3">
                <div className="bg-title py-10 rounded-medium  md-landscape:col-span-2 md-landscape:order-1 lg:col-span-2">
                  <Contact_form />
                </div>

                <div className="rounded-medium  md-landscape:order-3 overflow-hidden ">
                  <img
                    src={"/images/4.jpg"}
                    className="h-full object-cover"
                    alt="Kunmis cleaning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
