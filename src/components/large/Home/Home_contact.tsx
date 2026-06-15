"use client";
import Contact_form from "@/components/medium/Contact_form";
import Iconstars from "@/components/small/icons/Icon_stars";
import { motion } from "framer-motion";
function Home_contact() {
  return (
    <section className="py-[6em] md:py-[2em] lg:py-[6em] bg-background-grey">
      <div className="section-container  h-full">
        <div className="grid h-full gap-10 lg:grid-cols-2">
          {/* Form section*/}
          <motion.div
            className="bg-title rounded-medium lg:order-2 pb-10"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="md:w-[65%] py-10 px-5">
              <p className="subtitle font-openSans justify-start! text-white!">
                <span>
                  <Iconstars />{" "}
                </span>
                BOOK A APPOINTMENT
              </p>
              <h2 className="section-title text-left font-instrument text-white!">
                Stay Updated With Our Recent Posts
              </h2>
            </div>

            <Contact_form />
          </motion.div>

          {/* image */}

          <div className="w-full lg:h-full relative">
            <motion.img
              src={"/images/7.jpg"}
              height={500}
              width={300}
              className="w-full rounded-medium lg:h-full"
              alt="office cleaning"
            />
            <motion.div
              className="h-full w-full bg-background-grey left-0 top-0 absolute z-90"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ transformOrigin: "bottom" }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_contact;
