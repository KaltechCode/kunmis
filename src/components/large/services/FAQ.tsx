import FAQAccordion from "@/components/medium/Accordion";
import Iconstars from "@/components/small/icons/Icon_stars";
import React from "react";

function FAQ() {
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
              FAQ
            </p>
            <h2 className="section-title text-center font-instrument lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
              Got Questions? We've Got Answers!
            </h2>
          </div>

          {/* boxes */}
          <div className="w-full mt-5 md:mt-20 lg:max-w-[1200px] mx-auto  rounded-medium overflow-hidden">
            <div className="">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
