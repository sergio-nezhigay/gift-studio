"use client";

import ContactsList from "@/components/ui/ContactsList";
import NavBar from "@/components/ui/NavBar";
import Logo from "@/components/ui/Logo";
import SocialMediaList from "@/components/ui/SocialMediaList";

import data from "@/data/footer.json";

const Footer = () => {
  const { madeBy } = data;

  return (
    <footer className="pb-6 md:pb-9 ">
      <div className="container flex flex-col gap-6 md:gap-9">
        <div className="relative flex items-center justify-between pt-9 before:absolute before:bottom-full before:block before:h-[1px] before:w-full before:bg-accent md:pt-9 lg:pt-6">
          <Logo className="shrink-0 lg:mr-[171px]" />
          <NavBar isMobile={false} />
          <SocialMediaList customListStyle="lg:ml-[288px]" />
        </div>
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between">
          <ContactsList />
          <a
            className="text-sm transition-colors hover:text-accent focus:text-accent"
            href="https://softryzen.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
