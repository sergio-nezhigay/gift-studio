import { groq } from "next-sanity";

export const galleryQuery = groq`
     *[_type == "photoGallery"] { images[]
    {
      "image": {
        "src":image.asset->url,
        "alt":alt,
        "lqip":image.asset->metadata.lqip,
      },
      "id": _key
    }
  }[0].images
`;
