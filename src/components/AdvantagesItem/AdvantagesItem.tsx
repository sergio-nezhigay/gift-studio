import { FC } from "react";

import { AdvantagesItemProps, IComponentsIcons } from "./types";

import IconWideSet from "@/public/assets/icons/icon-choice-1.svg";
import IconBouquetEveryone from "@/public/assets/icons/icon-choice-2.svg";
import IconAlwaysNearby from "@/public/assets/icons/icon-choice-3.svg";
import IconAlwaysReady from "@/public/assets/icons/icon-choice-4.svg";

const AdvantagesItem: FC<AdvantagesItemProps> = ({ data }) => {
  const iconComponents: IComponentsIcons = {
    wideSet: IconWideSet,
    bouquetEveryone: IconBouquetEveryone,
    alwaysNearby: IconAlwaysNearby,
    alwaysReady: IconAlwaysReady,
  };
  const SelectedIcon = iconComponents[data.imageName] || null;

  return (
    <>
      {SelectedIcon && (
        <SelectedIcon
          width={128}
          height={128}
          className="mx-auto mb-3 lg:mb-6"
        />
      )}
      <h3 className="mb-2 whitespace-pre text-center font-montserrat text-xl font-bold leading-26">
        {data.title}
      </h3>
      <p className="mx-auto max-w-[235px] text-center text-base font-normal leading-16 md:whitespace-pre">
        {data.description}
      </p>
    </>
  );
};

export default AdvantagesItem;
