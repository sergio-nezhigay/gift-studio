import { TSections } from "@/src/types";

import { SCREENS } from "@/src/constants";

export const getSliderOptions = (section: TSections) => {
  switch (section) {
    case "services": {
      return {
        [SCREENS.XS]: {
          loop: false,
        },
        [SCREENS.LG]: {
          slidesPerView: 4,
          spaceBetween: 12,
          loopedSlides: 4,
          loop: true,
        },
      };
    }
    case "advantages": {
      return {
        [SCREENS.XS]: {
          slidesPerView: 1,
          loopedSlides: 4,
        },
        [SCREENS.MD]: {
          loop: false,
        },
      };
    }
    case "feedback": {
      return {
        [SCREENS.XS]: {
          slidesPerView: 1,
          loopedSlides: 3,
        },
        [SCREENS.MD]: {
          slidesPerView: 1,
        },
        [SCREENS.LG]: {
          slidesPerView: 2,
          spaceBetween: 16,
          watchSlidesProgress: true,
        },
      };
    }
    case "gallery": {
      return {
        [SCREENS.XS]: {
          slidesPerView: 1,
          loopedSlides: 2,
        },
        [SCREENS.MD]: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          spaceBetween: 80,
          slidesPerView: 3,
          loopedSlides: 3,
          centeredSlides: true,
          roundLengths: true,
          centeredSlidesBounds: true,
        },
      };
    }
    default: {
      return {
        [SCREENS.XS]: {
          slidesPerView: 1,
        },
        [SCREENS.MD]: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        [SCREENS.LG]: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      };
    }
  }
};
