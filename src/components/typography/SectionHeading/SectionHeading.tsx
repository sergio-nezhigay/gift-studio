import { FC } from "react";

import { SectionHeadingProps } from "./types";

import { cn } from "@/utils/cn";

const SectionHeading: FC<SectionHeadingProps> = ({ className, title }) => {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl lg:text-7xl text-accent text-center font-caveat font-normal mb-6",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
