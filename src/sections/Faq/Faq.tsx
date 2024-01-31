import FaqList from "@/components/FaqList";
import SectionHeading from "@/components/typography/SectionHeading";

import content from "@/data/faq.json";

const Faq = () => {
  const { title, id, answers } = content;

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading title={title} />

        <FaqList data={answers} />
      </div>
    </section>
  );
};

export default Faq;
