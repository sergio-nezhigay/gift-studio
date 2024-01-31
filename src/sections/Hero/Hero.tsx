import React from "react";

import ButtonLink from "@/components/ui/ButtonLink";

import data from "@/data/hero.json";

import css from "@/sections/Hero/Hero.module.css";
const Hero = () => {
  const { title, btnLabel, accentWord } = data;

  return (
    <section
      className={
        css.hero +
        " bg-bottom bg-[length:480px] md:bg-[length:768px] xl:bg-cover xlg:bg-[length:1440px] bg-no-repeat"
      }
    >
      <div className="container pb-[258px] pt-[117px] text-center md:py-[160px] lg:pb-[182px] lg:pl-[56px] lg:pt-[184px]">
        <div className="md:w-fit">
          <h1
            className=" mb-[15px] flex flex-col text-center font-caveat text-[32px] font-bold leading-[28px] text-accent md:mb-[24px]
          md:text-[36px] md:leading-[36px] lg:text-7xl lg:leading-[52px]"
          >
            <span>{accentWord}</span>
            {title}
          </h1>
          <ButtonLink
            label={btnLabel}
            variant="primary"
            targetName="services"
            className="inline-block text-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
