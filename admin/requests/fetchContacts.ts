import { TContactsResponse } from "@/src/types";

import { client } from "admin/client";
import { contactsQuery } from "./queries/contacts";

export const fetchContacts = async (): Promise<TContactsResponse> => {
  const contacts: TContactsResponse = await client.fetch(contactsQuery);
  return contacts;
};
