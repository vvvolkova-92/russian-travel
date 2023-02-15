import * as React from "react";
import {Card} from "../Card/Card";
import './Places.scss';
export const Places: React.FC<{  }> = props => {
  return (
    <section className="places page__block page__block_size_middle" aria-label="Карточки мест">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};