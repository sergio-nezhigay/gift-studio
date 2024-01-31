import ServicesList from "@/components/ServicesList";
import SectionHeading from "@/components/typography/SectionHeading";

import content from "@/data/services.json";

const Services = () => {
  const { title, id } = content;

  return (
    <section id={id} className="section relative">
      <div className="container">
        <SectionHeading title={title} />
        <ServicesList />
      </div>
    </section>
  );
};

export default Services;
