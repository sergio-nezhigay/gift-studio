export interface NavDataType {
  text: string;
  textRef: string;
  id: number;
}

export type NavPropsType = {
  isMobile: boolean;
  handleClick?: () => void;
  className?: string;
};
