import Contact_form from "@/components/medium/Contact_form";
import Iconstars from "@/components/small/icons/Icon_stars";
import Image from "next/image";
import React from "react";

function Home_contact() {
  return (
    <section className="py-[6em] md:py-[2em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="grid h-full gap-10 lg:grid-cols-2">
          {/* Form section*/}
          <div className="bg-title rounded-medium lg:order-2">
            <div className="md:w-[65%] py-10 px-5">
              <p className="subtitle font-openSans justify-start! text-white!">
                <span>
                  <Iconstars />{" "}
                </span>
                RECENT BLOGS
              </p>
              <h2 className="section-title text-left font-instrument text-white!">
                Stay Updated With Our Recent Posts
              </h2>
            </div>

            <Contact_form />
          </div>

          {/* image */}

          <Image
            src={"/images/7.jpg"}
            height={500}
            width={300}
            className="w-full rounded-medium lg:h-full"
            alt="office cleaning"
          />
        </div>
      </div>
    </section>
  );
}

export default Home_contact;
