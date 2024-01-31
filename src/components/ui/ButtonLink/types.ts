export interface ButtonLinkProps {
  label: string;
  targetName: string;
  variant: "primary" | "outline" | "ghost";
  className?: string;
  handleClick?: () => void;
}
