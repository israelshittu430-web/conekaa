import React from 'react';
import '../css/Service.css';
import { FaSearch, FaWallet, FaChartLine, FaWrench, FaBuilding, FaGlobe } from 'react-icons/fa';

const Service = () => {
  const serviceData = [
    {
      icon: <FaSearch />,
      title: "Find Your Home",
      desc: "Browse thousands of properties with advanced filters and virtual tours.",
      color: "green"
    },
    {
      icon: <FaWallet />,
      title: "Flexible Payments",
      desc: "Rent-to-own, rent now pay later, or pay in installments — you choose.",
      color: "blue"
    },
    {
      icon: <FaChartLine />,
      title: "Invest & Earn",
      desc: "Start fractional real estate investing from as low as ₦500,000.",
      color: "purple"
    },
    {
      icon: <FaWrench />,
      title: "Artisans Corner",
      desc: "Access trusted professionals for repairs and maintenance.",
      color: "orange"
    },
    {
      icon: <FaBuilding />,
      title: "Property Management",
      desc: "Manage tenants, rent, and maintenance digitally.",
      color: "pink"
    },
    {
      icon: <FaGlobe />,
      title: "Moving Services",
      desc: "Reliable logistics partners for stress-free relocation.",
      color: "cyan"
    }
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-header">
        <h2>Everything You Need in One Platform</h2>
        <p>
          From property discovery to management, we've built a complete ecosystem
          for your housing needs.
        </p>
      </div>

      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            
            <div className={`icon-box ${service.color}`}>
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            

          </div>
        ))}
      </div>

    </section>
  );
};

export default Service;