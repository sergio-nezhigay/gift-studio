import { FC } from "react";

import ButtonLink from "@/components/ui/ButtonLink";

import { NavDataType, NavPropsType } from "./types";

import data from "@/data/navbar.json";

const Navbar: FC<NavPropsType> = ({ isMobile, handleClick }) => {
  const desktopStyles = "max-lg:hidden w-fit h-fit shrink-0";
  const mobileStyles = "lg:hidden block w-fit h-fit mx-auto";

  return (
    <nav className={!isMobile ? desktopStyles : mobileStyles}>
      <ul className="mx-auto flex list-none flex-col justify-center gap-6 text-center max-lg:items-center lg:flex-row ">
        {data.map(({ text, textRef, id }: NavDataType) => (
          <li key={id}>
            <ButtonLink
              handleClick={handleClick}
              label={text}
              targetName={textRef}
              variant="ghost"
              className="text-[24px] leading-[29px]"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
