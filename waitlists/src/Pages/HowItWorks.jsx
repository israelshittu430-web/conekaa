import React from 'react';
import '../css/HowItWorks.css';
import { FaSearch, FaCreditCard, FaKey, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Discover",
      desc: "Browse thousands of verified properties that match your criteria."
    },
    {
      number: "02",
      icon: <FaCreditCard />,
      title: "Finance",
      desc: "Choose your perfect payment plan — monthly, BNPL, rent-to-own, or mortgage."
    },
    {
      number: "03",
      icon: <FaKey />,
      title: "Move In",
      desc: "Complete paperwork online and get your keys delivered."
    },
    {
      number: "04",
      icon: <FaCheckCircle />,
      title: "Thrive",
      desc: "Enjoy seamless property management and access to trusted artisans."
    }
  ];

  return (
    <section className="how-section reveal" id='finance'>
      <div className="how-header reveal">
        <h2>How <span className="green-text">Conekta</span> Works</h2>
        <p>Your entire housing journey, simplified into four seamless steps.</p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-card reveal" key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}>
            <div className="step-number">{step.number}</div>
            <div className="step-icon-wrapper">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {/* Connecting line for desktop, except last item */}
            {index !== steps.length - 1 && <div className="connector-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;