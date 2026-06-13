import Image from "next/image";
import Second from "../components/large/Home/Second";
import ThirdServices from "@/components/large/Home/Third_services";
import FouthWhy from "@/components/large/Home/Fouth_Why";
import Portfolio from "@/components/large/Home/Portfolio";
import Blog from "@/components/large/Home/Blog";
import Home_contact from "@/components/large/Home/Home_contact";
import Herosection from "../components/large/Home/Herosection";
import ProcessSection from "@/components/large/Home/Test";

export default function Home() {
  return (
    <div className="">
      <main>
        <Herosection />
        <Second />
        <ThirdServices />
        <FouthWhy />
        <Portfolio />
        <Home_contact />
        <Blog />
        <ProcessSection />
      </main>
    </div>
  );
}
