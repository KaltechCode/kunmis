import { IHomeWhy } from "@/static/data";
import React from "react";

function HomeWhyBox({ item }: { item: IHomeWhy }) {
  const Icon = item.icon;
  return (
    <div
      // style={{ opacity: 0 }}
      className="expert-card "
    >
      <div className="expert-card-icon-wrap">
        <div className="">
          <Icon />
        </div>
        <h3 className="card-title mt-5!">{item.title}</h3>
        <p className=" mt-5">{item.text}</p>
      </div>
    </div>
  );
}

export default HomeWhyBox;
