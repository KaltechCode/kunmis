import PrimaryBtn from "@/components/small/buttons/PrimaryBtn";
import Iconstars from "@/components/small/icons/Icon_stars";
import { home_steps, IHomeSteps } from "@/static/data";
import React from "react";

function Second() {
  return (
    <section className="min-h-screen md:min-h-auto lg:h-[100vh] py-[6em] md:py-[5em] lg:py-[6em] ">
      <div className="section-container  h-full">
        <div className="flex  flex-col justify-center items-center h-full">
          {/* section tittle*/}
          <div className="">
            <p className="subtitle">
              <span>
                <Iconstars />{" "}
              </span>
              HOW IT WORKS
            </p>
            <h2 className="section-title text-center font-instrument lg:w-[70%] mobile-landscape:w-[60%] mx-auto">
              Effortless Cleaning in 3 Easy Steps!
            </h2>
          </div>

          {/* boxes */}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-10 lg:gap-7 mt-15 lg:max-w-[1200px] mx-auto">
              {home_steps.map((item: IHomeSteps) => {
                return (
                  <div
                    className={`how-it-works-card flex flex-col justify-between py-5  px-5  rounded-medium mobile-landscape:min-h-[290px] ${item.link ? "bg-background-black" : "bg-background-grey"}`}
                  >
                    <div className="how-it-works-icon-wrap">
                      <div className="big-number">
                        {item.id == "04" ? <Iconstars /> : item.id}
                      </div>
                    </div>
                    <div className=" mt-7">
                      {item.title && (
                        <h3 className="how-it-works-title font-instrument">
                          {item.title}
                        </h3>
                      )}
                      <div className="mt-7">
                        <p
                          className={`mg-0 ${item.link ? "text-white! how-it-works-title" : "text-black"}`}
                        >
                          Book your cleaning service quickly and easily online
                          or by phone anytime.
                        </p>
                      </div>

                      {item.link && item.label && (
                        <div className="mt-7">
                          <PrimaryBtn
                            text={item.label || ""}
                            link={item.link}
                          />
                        </div>
                      )}
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

export default Second;
