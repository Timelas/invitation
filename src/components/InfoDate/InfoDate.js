import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date" id="home">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text">Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем вас на знаменательный праздник - </p>
        <p className="info-date__our-wedding">Нашу свадьбу!</p>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__line1"></div>
        <div className="info-date__line2"></div>
        <div className="info-date__check-in">
          <p className="info-date__what">Торжественная регистрация</p>
          <p className="info-date__where">Дворец Бракосочетаяния 1 Английская набережная, 28 в 15.30</p>
        </div>
        <p className="info-date__day-week">Пятница</p>
        <div className="info-date__day">
          <p className="info-date__number">23</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">06</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">В 15.00</p>
        <div className="info-date__banquet">
          <p className="info-date__what">Празднчный банкет</p>
          <p className="info-date__where">Pесторан «весенний» <br /> Наб. Обводного канала 199 <br /> в 17.00</p>
        </div>
        <div className="info-date__figure-left"></div>
        <div className="info-date__figure-right"></div>
      </div>
    </section>
  );
}

export default InfoDate;