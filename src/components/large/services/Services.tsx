import ServicesBox from "@/components/medium/Services_Box";
import Iconstars from "@/components/small/icons/Icon_stars";
import { IServiceBox, service_services } from "@/static/data";
import Image from "next/image";
import { HiPhone } from "react-icons/hi2";

function Services() {
  return (
    <section className="py-[2em] md:py-[2em] lg:py-[3em] ">
      <div className="section-container  h-full">
        {/* boxes */}
        <div className="w-full mt-5 lg:max-w-[1200px] mx-auto  rounded-medium overflow-hidden grid grid-cols-1 gap-5  mobile-landscape:grid-cols-2 mobile-landscape:gap-7 md:grid-cols-2 md:gap-7 md-landscape:grid-cols-3 lg:grid-cols-3">
          {service_services.map((item: IServiceBox, key: number) => {
            return (
              <ServicesBox
                key={key}
                Icon={item.Icon}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
