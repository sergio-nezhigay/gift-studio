import { TFeedback } from "@/src/types";

export interface FeedbackCardProps {
  content: TFeedback;
  isActiveCard: boolean;
  setActiveCard: () => void;
}
