import Banners from "@/components/large/services/Banners";
import FAQ from "@/components/large/services/FAQ";
import First from "@/components/large/services/First";
import Services from "@/components/large/services/Services";
import FAQAccordion from "@/components/medium/Accordion";

function Page() {
  return (
    <main>
      <First
        image="/images/service-1.jpg"
        tag="SERVICES"
        text="Skilled Home Cleaning Experts"
      />
      <Services />
      <Banners />
      <FAQ />
    </main>
  );
}

export default Page;
