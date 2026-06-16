import { IAbouChoose } from "@/static/data";
import React from "react";

function ChooseBox({ Icon, text, title }: IAbouChoose) {
  return (
    <div className="flex gap-5 lg:gap-7 border-b border-slate-300 py-5 px-2 ">
      <Icon />

      <div className="">
        <h2 className="card-title !mt-1">{title}</h2>
        <p className="mt-4">{text}</p>
      </div>
    </div>
  );
}

export default ChooseBox;
