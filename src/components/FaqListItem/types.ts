export interface FaqListItemProps {
  question: string;
  answer: string;
  isActive: boolean;
  setActive: () => void;
}
