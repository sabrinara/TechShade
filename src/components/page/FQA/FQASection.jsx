import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const FQASection = ({ faqs }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="faq-section max-w-5xl mx-auto p-4 overflow-hidden" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center my-8 lg:my-12 text-cyan-800 font-bold" data-aos="fade-right">Frequently Asked Questions <br /> Answers</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index} className="my-8-4 border-box rounded-md p-4" data-aos="fade-left">
            <h3 className="bg-emerald-100 text-lg md:text-xl lg:text-2xl p-2 my-1">{faq.id}. {faq.question}</h3>
            <p className="bg-amber-100 text-lg md:text-xl lg:text-2xl p-2">--{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FQASection;
