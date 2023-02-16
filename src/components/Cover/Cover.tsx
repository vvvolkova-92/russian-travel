import * as React from "react";
import './Cover.scss';
export const Cover: React.FC<{  }> = props => {
  return (
    <section className="cover">
      <a href="https://stampsy.com/na-elektrichkakh-do-baikala" className="cover__link">
        <h2 className="cover__title">До&nbsp;Байкала &laquo;на&nbsp;собаках&raquo;</h2>
        <p className="cover__subtitle">По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на
          электричках.</p>
      </a>
    </section>
  );
};