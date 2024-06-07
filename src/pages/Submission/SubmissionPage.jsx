import React, { useState } from 'react';
import './SubmissionPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const SubmissionPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqData = [
    {
      question: 'How often should I wash my hair?',
      answer: 'It depends on your hair type and scalp condition. Typically, washing your hair 2-3 times a week is sufficient for most people.',
    },
    {
      question: 'What hair products should I use?',
      answer: 'The best hair products for you depend on your hair type, concerns, and styling preferences. It\'s recommended to consult with a hair specialist to determine the most suitable products for your hair.',
    },
    {
      question: 'How can I prevent hair breakage?',
      answer: 'To prevent hair breakage, avoid using heat styling tools excessively, use a wide-tooth comb to detangle wet hair, and minimize chemical treatments such as bleaching or coloring.',
    },
    {
      question: 'What causes dandruff?',
      answer: 'Dandruff can be caused by various factors, including dry scalp, oily skin, fungal infections, or sensitivity to hair care products. Maintaining good scalp hygiene and using anti-dandruff shampoos can help manage dandruff.',
    },
    {
      question: 'How can I improve hair growth?',
      answer: 'To promote hair growth, maintain a balanced diet rich in vitamins and minerals, avoid excessive heat styling and tight hairstyles, and use hair care products specifically designed to support hair growth.',
    },
    {
      question: 'Is it normal to lose hair every day?',
      answer: 'Yes, it is normal to lose some hair every day as part of the hair growth cycle. However, excessive hair loss or sudden changes in hair density may indicate an underlying health issue and should be evaluated by a healthcare professional.',
    },
    {
      question: 'How can I protect my hair from heat damage?',
      answer: 'To protect your hair from heat damage, use a heat protectant spray or serum before using hot styling tools, avoid excessive heat exposure, and use lower heat settings whenever possible. Additionally, consider air-drying your hair or using heatless styling methods.',
    },
    {
      question: 'What is the best way to detangle hair?',
      answer: 'To detangle hair effectively, start by using a wide-tooth comb or a detangling brush, and work from the ends of the hair towards the roots. Use a detangling spray or conditioner to soften the hair and reduce friction while combing.',
    },
    {
      question: 'Can I color my hair at home?',
      answer: "While coloring your hair at home is possible, it's generally recommended to seek professional help, especially for complex color treatments or if you're unsure about the process. Professional hairstylists can provide personalized advice and ensure the best results while minimizing the risk of damage.",
    },
    {
      question: 'How can I reduce frizz in my hair?',
      answer: 'To reduce frizz in your hair, use moisturizing hair care products, avoid harsh chemical treatments, minimize heat styling, and consider using anti-frizz serums or oils. Additionally, protecting your hair from humidity and wearing hairstyles that minimize friction can help control frizz.',
    },
  ];

  const toggleActiveIndex = (index) => {
    if (activeIndex === index) {
        setActiveIndex(null);
    } else {
        setActiveIndex(index);
      }
    };

  return (
    <div className="submission-page">
      <Header />
      <div className="submission-page__confirmation">
        <h2>Thank you for submitting the consultation request form!</h2>
        <p>One of our specialists will be in touch with you soon.</p>
      </div>
      <div className="faq">
        <h2 className="faq__title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq__item">
        <div
            className={`faq__question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleActiveIndex(index)}
        >
            {item.question}
        </div>
        {activeIndex === index && (
            <div className="faq__answer">{item.answer}</div>
           )}
        </div>
    ))}
    </div>
      <Footer />
    </div>
  );
};

export default SubmissionPage;
