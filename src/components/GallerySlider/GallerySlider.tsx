import { fetchGallery } from "admin/requests/fetchGallery";

import SanityImage from "@/components/ui/SanityImage";
import Slider from "@/components/Slider";

const GallerySlider = async () => {
  const imagesGallery = await fetchGallery();

  const dataSlides = imagesGallery.map(image => (
    <SanityImage
      key={image.id}
      image={image.image}
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 346px, (min-width: 1280px) 480px"
      className="rounded-3xl object-cover"
      fill
    />
  ));

  return <Slider slides={dataSlides} section="gallery" />;
};

export default GallerySlider;
