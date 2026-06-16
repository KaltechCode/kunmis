import ChooseUs from "@/components/large/about/Choose";
import OurStory from "@/components/large/about/OurStory";
import AboutServices from "@/components/large/about/Services";
import StaticSection from "@/components/large/about/StaticSection";
import Team from "@/components/large/about/Team";
import First from "@/components/large/services/First";
import Banner from "@/components/medium/Banner";
import Iconstars from "@/components/small/icons/Icon_stars";
import React from "react";

function Page() {
  return (
    <main>
      <First
        image="/images/about-1.webp"
        text="Trusted Experts in Home Cleaning Services"
        tag="About us"
      />
      <OurStory />
      <AboutServices />
      <ChooseUs />
      <StaticSection />
      <Team />
      <Banner />
    </main>
  );
}

export default Page;
