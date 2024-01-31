"use client";

import { FC, useState } from "react";
import FaqListItem from "@/components/FaqListItem";
import { FaqListProps } from "./types";

const FaqList: FC<FaqListProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (idx: number) => {
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  };

  return (
    <ul className="flex flex-col gap-4 lg:mx-auto lg:max-w-[922px]">
      {data.map(({ question, answer }, idx) => (
        <FaqListItem
          key={question}
          question={question}
          answer={answer}
          isActive={idx === activeIndex}
          setActive={() => handleAccordionClick(idx)}
        />
      ))}
    </ul>
  );
};

export default FaqList;
