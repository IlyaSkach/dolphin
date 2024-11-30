import React from "react";
import "./../styles/hero.scss";
import backgroundVideo from "./../assets/video.MOV";

const HeroSection = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div className="content">
        <h1>Волшебство океана рядом!</h1>
        <p>Шоу, купание, фотосессии — для всей семьи.</p>
        {/* <div className="cta">
          <a href="#services" className="btn">Записаться сейчас</a>
          <a href="https://wa.me/1234567890" className="btn secondary">WhatsApp</a>
          <a href="https://t.me/yourtelegram" className="btn secondary">Telegram</a>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
