import * as React from "react";
import {Link} from "../../ui/Link/Link";
import './Card.scss';
interface ICard {
  link: string;
  name: string;
  description: string;
  image: string;
}
export const Card: React.FC<ICard> = ({link, name, description, image}) => {

  return (
    <article className="card">
      <h2 className="card__title">{name}</h2>
      <div className="card__website">
        <h3 className="card__link-title">URL</h3>
        <Link type={"a"} text={link} link={link}/>
      </div>
      <img src={image} alt={name} className="card__image" />
        <div className="card__description">
          <p className="card__text">{description}</p>
        </div>
    </article>
  );
};