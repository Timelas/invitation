import React from "react";
import "./Questions.css";

function Questions() {
  return (
    <section className="question" id="questions">
      <div className="question__header">
        <div className="question__trait"></div>
        <h2 className="question__title">Опрос</h2>
      </div>
      <div className="question__figure"></div>
      <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста,
        ответьте на несколько вопросов
      </p>
      <form className="question__form">
        <fieldset className="question__string">Понадобится ли вам трансфер:
          <label  htmlFor="yes-transfer" className="question__label">
            <input className="question__unvisible" type="radio" name="transfer" value="yes-transfer" id="yes-transfer"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text">Да</span>
          </label>
          <label className="question__label" htmlFor="no-transfer">
            <input className="question__unvisible" type="radio" name="transfer" value="no-transfer" id="no-transfer"></input>
            <span className="question__visible-radio"></span>
            <span className="question__text">Нет</span>
          </label>
        </fieldset>
        <fieldset className="question__string">Предпочтения по еде:
          <label  htmlFor="chicken" className="question__label">
            <input className="question__unvisible" type="checkbox" name="eat" value="chicken" id="chicken"></input>
            <span className="question__visible-checkbox"></span>
            <span className="question__text">Курица</span>
          </label>
          <label htmlFor="fish" className="question__label">
            <input className="question__unvisible" type="checkbox" name="eat" value="fish" id="fish"></input>
            <span className="question__visible-checkbox"></span>
            <span className="question__text">Рыба</span>
          </label>
          <label htmlFor="meat" className="question__label">
            <input className="question__unvisible" type="checkbox" name="eat" value="meat" id="meat"></input>
            <span className="question__visible-checkbox"></span>
            <span className="question__text">Мясо</span>
          </label>
        </fieldset>
        <p className="question__string">
          <label htmlFor="alco" className="question__string">Пожелания по алкоголю:</label>
          <input type="text" name="alco" id="alco" required className="question__input"></input>
        </p>
        <button type="submit" className="question__button">Подтвердить</button>
      </form>
    </section>
  );
}

export default Questions;