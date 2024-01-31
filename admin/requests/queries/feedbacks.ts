import { groq } from "next-sanity";

export const feedbackQuery = groq`
  *[_type == "feedbacks"] {
    reviews[]{
      "image": {
        alt,
        "src":image.asset->url,
        "lqip":image.asset->metadata.lqip,
      },
      text,
      reviewName,
      "id": _key
    }
  }[0].reviews
`;
