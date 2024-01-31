import { fetchFeedbacks } from "admin/requests/fetchFeedbacks";

import FeedbackSlider from "@/components/FeedbackSlider";
import SectionHeading from "@/components/typography/SectionHeading";

import content from "@/data/feedback.json";

const Feedback = async () => {
  const { id, title } = content;
  const feedbacks = await fetchFeedbacks();

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading title={title} />
        <FeedbackSlider feedbacks={feedbacks} />
      </div>
    </section>
  );
};

export default Feedback;
