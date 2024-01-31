import { SVGProps, ReactElement } from "react";

type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;

export interface AdvantagesItemProps {
  data: {
    imageName: string;
    title: string;
    description: string;
  };
}

export interface IComponentsIcons {
  [key: string]: ReactComponent;
}
