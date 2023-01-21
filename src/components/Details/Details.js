import React from "react";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <div className="details__header">
        <div className="details__trait"></div>
        <h2 className="details__title">Детали</h2>
      </div>
      <div className="details__figure"></div>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу для нашей семейной библиотеки</p>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!"
и сохранить атмосферу уютного семейного праздника.</p>
    </section>
  );
}

export default Details;