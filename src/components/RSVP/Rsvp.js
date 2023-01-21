import React from "react";
import "./Rsvp.css";

function Rsvp() {
  return (
    <section className="rsvp" id="rsvp">
      <div className="rsvp__header">
        <div className="rsvp__trait"></div>
        <h2 className="rsvp__title">RSVP</h2>
      </div>
      <p className="rsvp__text">Пожалуйста, подтвердите ваше присутствие на нашем празднике до
      01 июня 2023 года любым удобным для вас способом или заполните форму ниже:
      </p>
      <form className="rsvp__form">
        <p className="rsvp__string">
          <label htmlFor="name" className="rsvp__label">имя</label>
          <input type="text" name="name" id="name" required className="rsvp__input"></input>
        </p>
        <p className="rsvp__string">
          <label htmlFor="person" className="rsvp__label">количество персон</label>
          <input type="number" min="0" max="10" name="person" id="person" required className="rsvp__input"></input>
        </p>
        <div className="rsvp__buttons">
        <button type="submit" className="rsvp__button">приду</button>
        <button type="submit" className="rsvp__button">не смогу</button>
        </div>
      </form>
    </section>
  );
}

export default Rsvp;