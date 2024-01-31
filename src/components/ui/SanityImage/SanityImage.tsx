import { FC } from "react";
import Image from "next/image";

import { SanityImageProps } from "./types";

const SanityImage: FC<SanityImageProps> = ({ image, ...imageProps }) => {
  return (
    <Image
      {...imageProps}
      src={image.src}
      alt={image.alt}
      placeholder="blur"
      blurDataURL={image.lqip}
    />
  );
};

export default SanityImage;
