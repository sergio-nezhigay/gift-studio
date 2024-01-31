import { FC } from "react";

import PhoneLink from "@/components/ui/PhoneLink";

import { ContactsListType } from "./types";

import { fetchContacts } from "@/admin/requests/fetchContacts";
import { cn } from "@/utils/cn";

import EmailIcon from "@/public/assets/icons/icon-mail.svg";

const ContactsList: FC<ContactsListType> = async ({ customListStyle }) => {
  const contacts = await fetchContacts();

  return (
    <ul
      className={cn(
        "inline-flex flex-col items-center justify-center gap-3 md:flex-row md:gap-12",
        customListStyle,
      )}
    >
      <li className="flex">
        <PhoneLink
          phoneNumber={contacts.phone}
          customStyle="lg:text-xl leading-6"
        />
      </li>
      <li className="flex">
        <a
          className="group flex items-center gap-2 stroke-black stroke-[1.5px] text-xl transition hover:text-accent focus:text-accent"
          href={`mailto:${contacts.email}`}
        >
          <EmailIcon className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
          {contacts.email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
