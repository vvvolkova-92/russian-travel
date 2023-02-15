import * as React from "react";
import {Link} from "../../ui/Link/Link";
import './Card.scss';
export const Card: React.FC<{  }> = props => {

  return (
    <article className="card">
      <h2 className="card__title">Куршская коса</h2>
      <div className="card__website">
        <h3 className="card__link-title">URL</h3>
        <Link type={"a"} text={"park-kosa.ru"} link={"http://park-kosa.ru"}/>
      </div>
      <img src="src/images/place_img/place_kosa.jpg" alt="Куршская коса" className="card__image" />
        <div className="card__description">
          <p className="card__text">Здесь, посреди лесов и&nbsp;песчаных дюн, вы&nbsp;сможете увидеть два водных
            горизонта&nbsp;&mdash; спокойного Куршского залива с&nbsp;одной стороны и&nbsp;подёрнутого рябью волн
            Балтийского моря с&nbsp;другой. Уникальная природная зона на&nbsp;краю российского анклава.</p>
        </div>
    </article>
  );
};