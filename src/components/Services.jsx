import React from "react";
import "./../styles/services.scss";
import showImg from "./../assets/show.jpeg";
import swimImg from "./../assets/swim.jpeg";
import photoImg from "./../assets/photo.jpeg";

const Services = () => {
  const services = [
    { title: "Шоу", description: "Захватывающие трюки и интерактивное общение.", image: showImg },
    { title: "Купание", description: "Плавание с дельфинами под наблюдением тренеров.", image: swimImg },
    { title: "Фотосессия", description: "Снимки, которые вы будете пересматривать снова и снова.", image: photoImg },
  ];

  return (
    <section className="services" id="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          {/* <a href="#contacts" className="btn">Записаться</a> */}
        </div>
      ))}
    </section>
  );
};

export default Services;
