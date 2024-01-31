import { TGalleryResponse } from "@/src/types";

import { client } from "admin/client";
import { galleryQuery } from "./queries/gallery";

export const fetchGallery = async (): Promise<TGalleryResponse> => {
  const images = await client.fetch(galleryQuery);
  return images;
};
