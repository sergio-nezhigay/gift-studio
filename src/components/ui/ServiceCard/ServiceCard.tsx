"use client";

import { FC } from "react";
import { PortableText } from "@portabletext/react";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";
import SanityImage from "@/components/ui/SanityImage";

import { cn } from "@/utils/cn";

const ServiceCard: FC<ServiceCardProps> = ({ data, wrapperCustomStyle }) => {
  return (
    <div className={cn("w-full text-center", wrapperCustomStyle)}>
      <a
        className="services-card group flex flex-col gap-3 transition-all hover:text-accent focus:text-accent lg:gap-6"
        href={data.serviceUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <div className="overflow-hidden rounded-3xl">
          <div className="relative h-[416px] w-full md:w-[295px] lg:transition-transform lg:group-hover:scale-110 lg:group-focus:scale-110">
            <SanityImage
              image={data.image}
              priority
              fill
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 295px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-xl leading-[27px] md:text-3xl md:leading-8">
          <PortableText value={data.serviceName} />
        </div>
      </a>
    </div>
  );
};

export default ServiceCard;
