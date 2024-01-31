import { FC } from "react";

import { cn } from "@/utils/cn";

import content from "@/data/gallery.json";

import { SliderNavButtonProps } from "./types";

import ArrowIcon from "@/public/assets/icons/icon-arrow-left.svg";

const SliderNavButton: FC<SliderNavButtonProps> = ({
  direction = "left",
  onClick,
}) => {
  const { navButtonsAria } = content;
  const ariaNav =
    direction === "left" ? navButtonsAria.left : navButtonsAria.right;

  return (
    <button
      className={cn(
        "max-lg:h-10 max-lg:w-10 h-6 w-6 cursor-pointer text-gray transition hover:text-accent focus-visible:text-accent flex-center",
        { "rotate-180": direction === "right" },
      )}
      type="button"
      aria-label={ariaNav}
      onClick={onClick}
    >
      <ArrowIcon className="h-6 w-6 [&>path]:stroke-current" />
    </button>
  );
};

export default SliderNavButton;
