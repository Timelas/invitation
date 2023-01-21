import React from "react";
import "./Questions.css";

function Questions() {
  return (
    <section className="question" id="questions">
      <div className="question__header">
        <div className="question__trait"></div>
        <h2 className="question__title">Опрос</h2>
      </div>
      <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста,
        ответьте на несколько вопросов
      </p>
      <form className="question__form">
        <fieldset className="question__string">Понадобится ли вам трансфер:
          <label  htmlFor="name" className="question__label">
            <input type="radio" name="browser" value="ie" id="ie"></input>
            <span className="question__visible-radio"></span>
            Да
          </label>
          <label className="question__label">
            <input type="radio" name="browser" value="opera" id="opera"></input>
            <span className="question__visible-radio"></span>
            Нет
          </label>
        </fieldset>
        <fieldset className="question__string">Предпочтения по еде:
          <label  htmlFor="name" className="question__label">
            <input type="checkbox" name="browser" value="ie" id="ie"></input>
            Курица
          </label>
          <label className="question__label">
            <input type="checkbox" name="browser" value="opera" id="opera"></input>
            Рыба
          </label>
          <label className="question__label">
            <input type="checkbox" name="browser" value="opera" id="opera"></input>
            Мясо
          </label>
        </fieldset>
        <p className="question__string">
          <label htmlFor="person" className="question__label">Пожелания по алкоголю:</label>
          <input type="text" name="person" id="person" required className="question__input"></input>
        </p>
        <button type="submit" className="question__button">Подтвердить</button>
      </form>
    </section>
  );
}

export default Questions;