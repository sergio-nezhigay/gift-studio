import { fetchServices } from "@/admin/requests/fetchServices";

import Slider from "@/components/Slider";
import ServiceCard from "@/components/ui/ServiceCard";

import { cn } from "@/utils/cn";

const ServicesList = async () => {
  const services = await fetchServices();

  const isShowSlider = services.length > 4;
  const serviceCards = !isShowSlider
    ? []
    : services.map(service => <ServiceCard key={service.id} data={service} />);

  return (
    <>
      <ul
        className={cn(
          "max-md:space-y-6 md:grid md:grid-cols-2 md:max-lg:gap-x-6 md:max-lg:gap-y-10 lg:hidden md:max-lg:px-[47px]",
          {
            "lg:flex lg:gap-3 lg:justify-center services-list": !isShowSlider,
          },
        )}
      >
        {services.map(service => (
          <li key={service.id}>
            <ServiceCard key={service.id} data={service} />
          </li>
        ))}
      </ul>
      {isShowSlider ? (
        <div className={cn("hidden", { "lg:block": isShowSlider })}>
          <Slider section="services" slides={serviceCards} />
        </div>
      ) : null}
    </>
  );
};

export default ServicesList;
