import { groq } from "next-sanity";

export const servicesQuery = groq`
     *[_type == "serviceList"] { services[]
    {
      "image": {
        "src":image.asset->url,
        "alt":alt,
        "lqip":image.asset->metadata.lqip,
      },
      serviceUrl,
      serviceName,
      "id": _key
    }
  }[0].services
`;
