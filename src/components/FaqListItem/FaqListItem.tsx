import { FC, KeyboardEvent } from "react";

import SocialLink from "@/components/ui/SocialLink";

import { FaqListItemProps } from "./types";

import { cn, getSocialLink } from "@/src/utils";

const FaqListItem: FC<FaqListItemProps> = ({
  isActive,
  question,
  answer,
  setActive,
}) => {
  const answerWithSocialLink = getSocialLink(answer);
  const styles = {
    base: "flex flex-col gap-1 md:gap-2 cursor-pointer rounded-3xl text-left max-md:px-4 max-md:pt-6 max-md:pb-4 md:px-8 md:pt-8 md:pb-6 lg:pl-8 lg:pr-4 border-latte bg-latte transition border-[1px] border-solid",
    question:
      "text-lg font-bold lg:text-3xl lg:leading-32 transition-color transition",
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setActive();
    }
  };

  return (
    <li
      onClick={setActive}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(styles.base, {
        "flex flex-col gap-1 border-accent bg-white md:gap-2 max-md:pb-6 md:pb-8":
          isActive,
      })}
    >
      <p className={cn(styles.question, { "text-accent": isActive })}>
        {question}
      </p>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out grid",
          {
            "grid-rows-[1fr] opacity-100": isActive,
            "grid-rows-[0fr] opacity-0": !isActive,
          },
        )}
      >
        <div className="overflow-hidden">
          <p className="text-base font-normal leading-16 ">
            {answerWithSocialLink.map((text, index) => {
              if (index === 1) {
                return (
                  <SocialLink
                    key={index}
                    username={text}
                    tabIndex={isActive ? 0 : -1}
                  />
                );
              }
              return text;
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FaqListItem;
