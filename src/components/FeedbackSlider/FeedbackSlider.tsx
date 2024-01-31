"use client";
import { FC, useState } from "react";

import Slider from "@/components/Slider";
import FeedbackCard from "@/components/ui/FeedbackCard";

import { TFeedback } from "@/src/types";
import { FeedbackSliderProps } from "./types";

const FeedbackSlider: FC<FeedbackSliderProps> = ({ feedbacks }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const handleFlip = (id: string) => {
    if (id === activeCard) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  const feedbackSlides = feedbacks.map((feedback: TFeedback) => (
    <FeedbackCard
      key={feedback.id}
      content={feedback}
      isActiveCard={feedback.id === activeCard}
      setActiveCard={() => handleFlip(feedback.id)}
    />
  ));
  return <Slider slides={feedbackSlides} section="feedback" />;
};

export default FeedbackSlider;
