"use client";

import { FC, ReactNode, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

import { cn } from "@/utils/cn";
import { getSliderOptions } from "@/utils/getSliderOptions";

import SliderNavigation from "@/components/SliderNavigation";
import { SliderProps } from "./types";

import "swiper/css";

const Slider: FC<SliderProps> = ({ slides, section }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <Swiper
        wrapperTag="ul"
        onSwiper={setSwiperRef}
        id={`swiper-${section}`}
        slidesPerView={1}
        loop={true}
        speed={500}
        spaceBetween={24}
        breakpoints={getSliderOptions(section)}
        className={cn(`${section}-slider`)}
      >
        {slides.map((slide: ReactNode, idx: number) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={cn(
              "overflow-hidden rounded-3xl relative cursor-grab",
              `${section}-slide`,
            )}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigation onNext={handleNext} onPrev={handlePrev} />
    </>
  );
};

export default Slider;
