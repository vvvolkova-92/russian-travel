import * as React from "react";
import "./Gallery.scss";
export const Gallery: React.FC<{  }> = props => {
  return (
    <section className="gallery page__block page__block_size_max" aria-label="Галерея">
      <img src={image} alt="Вид из окна поезда" className="gallery__item" />
      <img src={image} alt="Облака и горы" className="gallery__item" />
      <img src={image} alt="Потрясающее поле" className="gallery__item" />
      <img src={image} alt="Лес в дымке" className="gallery__item" />
      <img src={image} alt="Колеса машины на льду" className="gallery__item" />
      <img src={image} alt="Побережье" className="gallery__item" />
      <img src={image} alt="Горы" className="gallery__item" />
      <img src={image} alt="Знак пешеходный переход" className="gallery__item" />
      <img src={image} alt="Горы и облака" className="gallery__item" />
      <img src={image} alt="Вид на горы" className="gallery__item" />
      <img src={image} alt="Побережье" className="gallery__item" />
      <img src={image} alt="Горы в дымке" className="gallery__item" />
    </section>
  );
};