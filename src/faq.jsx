import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: 'Who can participate?',
      answer: 'Anyone who is interested and meets the event criteria can participate.',
    },
    {
      question: 'What’s the focus of the hackathon’s project themes?',
      answer: 'The focus is on innovative solutions, technology advancements, and real-world problem-solving.',
    },
    {
      question: 'Is the hackathon virtual or in-person?',
      answer: 'The hackathon is a hybrid event, meaning participants can join either virtually or in person.',
    },
    {
      question: 'What should I bring?',
      answer: 'You should bring your laptop, charger, notepad, and any other personal essentials.',
    },
    {
      question: 'Will food and drinks be provided?',
      answer: 'Yes, food and drinks will be provided for all participants during the event.',
    },
    {
      question: 'How do I form or join a team?',
      answer: 'You can form or join a team by using the event\'s team-building platform or by connecting with participants during the event.',
    },
    {
      question: 'How do I register for the hackathon? Is there a fee?',
      answer: 'Registration is available on the official website. There is no fee for participating.',
    },
    {
      question: 'What if I can’t code?',
      answer: 'Even if you can’t code, you can still participate by contributing to other areas such as design, marketing, or problem-solving.',
    },
    {
      question: 'Is there a code of conduct?',
      answer: 'Yes, all participants are expected to adhere to the code of conduct, which can be found on the event\'s official website.',
    },
    {
      question: 'I have another question...',
      answer: 'If you have more questions, feel free to contact us at support@hackathon.com.',
    }
  ];

  return (
    <section id="faqs" className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{openFAQ === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
