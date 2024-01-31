import { TServicesResponse } from "@/src/types";

import { client } from "admin/client";
import { servicesQuery } from "./queries/services";

export const fetchServices = async (): Promise<TServicesResponse> => {
  const services = await client.fetch(servicesQuery);
  return services;
};
