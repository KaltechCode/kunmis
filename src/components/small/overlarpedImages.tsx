import Image from "next/image";
import React from "react";

function OverlarpedImages({ large }: { large?: boolean }) {
  const images = [
    { image: "/images/11.jpg", pos: 0 },
    { image: "/images/12.jpg", pos: 30 },
    { image: "/images/8.jpg", pos: 60 },
  ];
  return (
    <div className="relative left-0 top-0">
      {images.map(({ image, pos }: { image: string; pos: number }) => {
        return (
          <Image
            src={image}
            height={40}
            width={40}
            priority
            alt="overlapse"
            key={pos}
            className={`rounded-circle h absolute top-0 md:top-3 ${large ? "w-17 h-17 border-3 border-white" : "h-10 w-10"}`}
            style={{
              zIndex: pos,
              left: `${large ? pos * 1.5 : pos}px`,
            }}
          />
        );
      })}
    </div>
  );
}

export default OverlarpedImages;
