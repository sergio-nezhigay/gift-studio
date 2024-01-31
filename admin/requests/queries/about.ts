import { groq } from "next-sanity";

export const aboutQuery = groq`
    *[_type == "about" && _id == "about"] {
      "src":image.image.asset->url,
      "alt":image.alt,
      "lqip":image.image.asset->metadata.lqip,
    }[0]
`;
