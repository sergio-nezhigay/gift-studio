import { TAboutResponse } from "@/src/types";

import { client } from "admin/client";
import { aboutQuery } from "./queries/about";

export const fetchAbout = async (): Promise<TAboutResponse> => {
  const about = await client.fetch(aboutQuery);
  return about;
};
