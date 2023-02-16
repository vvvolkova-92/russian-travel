import * as React from "react";
import './Intro.scss';
export const Intro: React.FC<{  }> = () => {
  return (
    <section className="intro page__block page__block_size_small">
      <h2 className="intro__title">Чего мы&nbsp;там не&nbsp;видели?</h2>
      <p className="intro__text">По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.</p>
      <ul className="intro__list">
        <li className="intro__list-item"><span className="intro__list-item-value">Часовых поясов </span>11</li>
        <li className="intro__list-item"><span className="intro__list-item-value">Объектов природного наследия ЮНЕСКО </span>12</li>
        <li className="intro__list-item"><span className="intro__list-item-value">Объектов культурного наследия ЮНЕСКО </span>16</li>
        <li className="intro__list-item"><span className="intro__list-item-value">Природных заповедников </span>105</li>
        <li className="intro__list-item"><span className="intro__list-item-value">Аэропортов </span>241</li>
      </ul>
    </section>
  );
};