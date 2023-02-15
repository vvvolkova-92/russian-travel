import * as React from "react";
import './Lead.scss';
import image from '../../images/lead_plackart.jpeg';
export const Lead: React.FC<{  }> = () => {
  return (
    <section className="lead page__block page__block_size_middle">
      <h1 className="lead__title">Путешествия
        по&nbsp;России</h1>
      <p className="lead__subtitle">Настоящая страна не&nbsp;в&nbsp;выпусках новостей,&nbsp;а&nbsp;здесь.</p>
      <img src={image} alt="Вагон поезда" className="lead__image" />
      <p className="lead__caption">ваша полка — верхняя</p>
    </section>
  );
};