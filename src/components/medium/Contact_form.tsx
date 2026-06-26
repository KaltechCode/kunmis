import React from "react";
import Iconstars from "../small/icons/Icon_stars";

function Contact_form() {
  return (
    <form className="">
      <div className="grid grid-cols-1 px-5 gap-7 lg:grid-cols-2 mobile-landscape:grid-cols-2 md:grid-cols-2">
        <input
          type="text"
          placeholder="Your Name"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />

        <div className="relative">
          <select
            id="service"
            //   value={service}
            //   onChange={(e) => setService(e.target.value)}
            className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-4 bg-title w-[100%] outline-none transition focus:border-[#ffffff40] focus:ring-2 focus:ring-[#ffffff40] appearance-none"
          >
            <option value="" className="py-3">
              Choose a Service
            </option>
            <option value="Home Cleaning" className="py-3">
              Home Cleaning
            </option>
            <option value="Kitchen Cleaning" className="py-3">
              Kitchen Cleaning
            </option>
            <option value="Toilet Sanitation" className="py-3">
              Toilet Sanitation
            </option>
          </select>
          <svg
            className="
      pointer-events-none
      absolute
      right-6
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-white
    "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="relative">
          <select
            id="date"
            //   value={service}
            //   onChange={(e) => setService(e.target.value)}
            className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5 bg-title w-[100%] outline-none transition focus:border-[#ffffff40] focus:ring-2 focus:ring-[#ffffff40] appearance-none"
          >
            <option value="" className="py-3">
              Choose Date
            </option>
            <option value="1 Week Later" className="py-3">
              1 Week Later
            </option>
            <option value="1-2 Week Later" className="py-3">
              1-2 Week Later
            </option>
            <option value="2 Week Later" className="py-3">
              2 Week Later
            </option>
          </select>
          <svg
            className="
      pointer-events-none
      absolute
      right-6
      top-1/2
      h-5
      w-5
      -translate-y-1/2
      text-white
    "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Total Area (sft)"
          className="placeholder:text-white font-[15px] py-4 text-white  border-1 border-[#ffffff40] rounded-circle px-5"
        />
        <textarea
          name=""
          id=""
          rows={7}
          className="border-[#ffffff40] border rounded-medium placeholder:text-dull-text text-dull-text px-5 py-4 font-[15px] lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2"
          placeholder="Write Your Message Here..."
        ></textarea>

        <input
          type="submit"
          value={"Contact Now"}
          className={`w-full py-3 text-white border-none  text-center rounded-circle bg-background-primary group-[first]: flex items-center justify-center gap-3 font-medium text-default lg:col-span-2 mobile-landscape:col-span-2 md:col-span-2`}
        />
      </div>
    </form>
  );
}

export default Contact_form;
