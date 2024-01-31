import { FC } from "react";

import SocialLink from "@/components/ui/SocialLink";

import {
  SocialMediaLinkProps,
  SocialMediaListType,
} from "@/components/ui/SocialMediaList/types";

import { cn } from "@/utils/cn";
import { fetchContacts } from "@/admin/requests/fetchContacts";

import FacebookIcon from "@/public/assets/icons/icon-facebook.svg";
import InstagramIcon from "@/public/assets/icons/icon-instagram.svg";

import data from "@/data/contacts.json";

const SocialMediaList: FC<SocialMediaListType> = async ({
  customListStyle,
}) => {
  const contacts = await fetchContacts();

  const icons = [
    <InstagramIcon
      key={1}
      className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
    <FacebookIcon
      key={2}
      className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
  ];

  const socialLinks = [contacts?.instagram, contacts?.facebook];

  function generateAriaLabel(link: string) {
    const domain = link.replace(/^https?:\/\/(www\.)?/, "");
    const name =
      domain.split(".")[0].charAt(0).toUpperCase() +
      domain.split(".")[0].slice(1);

    const socialLabel = `Відкрити сторінку на ${name}`;
    return socialLabel;
  }

  return (
    <ul className={cn("inline-flex items-start gap-2", customListStyle)}>
      {data.socialLinks.map(({ id, ariaLabel }: SocialMediaLinkProps) => (
        <li key={id}>
          <SocialLink
            username={ariaLabel}
            className="group stroke-black stroke-[1.5px] text-transparent transition"
            socialLink={socialLinks[id]}
            ariaLabel={generateAriaLabel(socialLinks[id])}
          >
            {icons[id]}
          </SocialLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
