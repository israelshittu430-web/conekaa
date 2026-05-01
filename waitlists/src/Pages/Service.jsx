import React from 'react';
import '../css/Service.css';
import { FaSearch, FaWallet, FaChartLine, FaWrench, FaBuilding, FaGlobe } from 'react-icons/fa';

const Service = () => {
  const serviceData = [
    {
      icon: <FaSearch />,
      title: "Search & Discover",
      desc: "Browse verified properties across Nigeria — apartments, houses, duplexes and commercial spaces."
    },
    {
      icon: <FaWallet />,
      title: "Flexible Payments",
      desc: "Rent small small (monthly, biannually), full rent, rent-now-pay-later, and mortgage financing."
    },
    {
      icon: <FaGlobe />,
      title: "Fractional Investments",
      desc: "Own a slice of high-value properties. Invest from any budget and earn returns as the market grows."
    },
    {
      icon: <FaWrench />,
      title: "Artisans Corner ",
      desc: "Access a network of vetted professionals for your home repairs, renovations, and maintenance."
    },
    {
      icon: <FaBuilding />,
      title: "Property Management",
      desc: "Seamless digital tools for landlords to manage tenants, collections, and maintenance requests."
    },
    {
      icon: <FaGlobe />,
      title: "Moving Services",
      desc: "Get connected with reliable logistics partners to make your transition to a new home stress-free."
    }
  ];

  return (
    <section className="services-section reveal"   id="services">
      <div className="services-header">
        <span className="badge">WHAT WE'RE BUILDING</span>
        <h2>One platform for your <span className="green-text">entire housing journey</span></h2>
      </div>

      <div className="services-grid">
       {serviceData.map((service, index) => (
  <div
    className="service-card reveal"
    key={index}
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="icon-box">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.desc}</p>
  </div>
))}
      </div>
    </section>
  );
};

export default Service;