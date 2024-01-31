"use client";

import React, { FC, useState } from "react";

import MobileBtn from "@/components/ui/MobileBtn";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";

import { TMobileMenu } from "./types";

import { cn } from "@/utils/cn";

const MobileMenu: FC<TMobileMenu> = ({ phoneNumber }) => {
  const [isMobileNavigationShown, setIsMobileNavigation] = useState(false);

  const toggleMenu = () => {
    setIsMobileNavigation(prevState => !prevState);

    if (!isMobileNavigationShown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  const mobileHiddenStyle = !isMobileNavigationShown
    ? "[transform:translateX(100%)]"
    : "";
  return (
    <>
      <MobileBtn
        handleClick={toggleMenu}
        isMobileMenuShown={isMobileNavigationShown}
      />
      <div
        className={cn(
          "fixed left-0 top-0 -z-10 flex h-full min-w-full flex-col items-center overflow-hidden bg-white pt-[100px] transition-all sm:px-5 md:px-[30px] md:pt-[136px] lg:hidden",
          mobileHiddenStyle,
        )}
      >
        <div className="pointer-events-auto flex w-full flex-col text-center sm:justify-between">
          <Navbar handleClick={toggleMenu} isMobile={true} />
          <PhoneLink
            phoneNumber={phoneNumber}
            customStyle={"md:hidden mx-auto mt-[58px]"}
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
