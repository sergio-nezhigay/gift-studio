"use client";

import { FC, useState, useEffect } from "react";
import { Link } from "react-scroll";

import { ButtonLinkProps } from "./types";

import { cn } from "@/utils/cn";
import { SCREENS } from "@/src/constants";

const ButtonLink: FC<ButtonLinkProps> = ({
  label,
  targetName,
  variant,
  className,
  handleClick,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= SCREENS.LG) {
        setOffset(40);
      } else if (window.innerWidth >= SCREENS.MD) {
        setOffset(20);
      } else {
        setOffset(0);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    primary:
      "text-white text-base font-bold bg-accent py-4 px-6 rounded-[10px] hover:bg-lava focus:bg-lava",
    outline:
      "text-accent text-base font-bold bg-white py-4 px-6 border-accent border-[1px] rounded-[10px] hover:bg-accent hover:text-white focus:bg-accent focus:text-white",
    ghost:
      "font-montserrat text-3xl font-normal text-black hover:text-accent focus-visible:text-accent lg:text-base",
  };

  return (
    <Link
      onClick={handleClick}
      className={cn(
        "cursor-pointer transition block w-fit",
        styles[variant],
        className,
      )}
      to={targetName}
      href="/"
      spy
      smooth
      duration={500}
      offset={offset}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
