import { useState } from "react";
import "./FAQ.css";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is GDG RBU?",
      answer:
        "GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.",
    },
    {
      question: "How to join GDG?",
      answer:
        "We conduct an annual recruitment process for 2nd year students. An orientation is held beforehand to brief students about the club. The process includes task submission and a personal interview.",
    },
    {
      question: "What does a GDG Lead do?",
      answer:
        "A GDG Lead works with the university to build the community, organize events and workshops, and collaborate with industry and local partners.",
    },
    {
      question: "How is GDG related to Google?",
      answer:
        "GDG chapters are independent community groups supported by Google Developers. While GDGs operate independently, they receive guidance, resources, and opportunities from Google to help developers grow and connect.",
    },
    {
      question: "How to reach us?",
      answer: "Mail us at gdsc@rknec.edu",
    },
  ];

  function toggleFAQ(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="faq" id="faq">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;