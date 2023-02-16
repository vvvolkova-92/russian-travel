import * as React from "react";
import {Card} from "../Card/Card";
import './Places.scss';
import {places} from "../../utils/constants";
export const Places: React.FC = () => {
  places
  return (
    <section className="places page__block page__block_size_middle" aria-label="Карточки мест">
      {places.map( (place, index) => <Card key={`${index}-${place.name}`} name={place.name} link={place.link} description={place.description} image={place.img}/>)}
    </section>
  );
};