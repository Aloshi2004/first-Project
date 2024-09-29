// src/Services.js
import React from 'react';

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      description: "Building responsive and functional websites using the latest technologies.",
      icon: "🖥️", 
    },
    {
      title: "Mobile App Development",
      description: "Creating mobile applications for iOS and Android platforms.",
      icon: "📱", 
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with a focus on user experience.",
      icon: "🎨",
    },
    {
      title: "SEO Services",
      description: "Optimizing websites to rank higher on search engines and attract more traffic.",
      icon: "🔍", 
    },
  ];

  return (
    <div>
      <h1>My Services</h1>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.icon} {service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
