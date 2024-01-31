import { ReactNode } from "react";

export interface SocialLinkProps {
  username: string;
  className?: string;
  socialLink?: string;
  isIcon?: boolean;
  children?: ReactNode;
  ariaLabel?: string;
  tabIndex?: number;
}
