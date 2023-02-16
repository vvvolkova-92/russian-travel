import * as React from "react";
import "./Gallery.scss";
import {images} from "../../utils/constants";
export const Gallery: React.FC = () => {
  return (
    <section className="gallery page__block page__block_size_max" aria-label="Галерея">
      { images.map((image, index) => <a key={`${index}-${image.name}`} className="gallery__link" href={image.link} data-name={image.name} target="_blank"><img src={image.img} alt={image.name} className="gallery__item" /></a>) }
    </section>
  );
};