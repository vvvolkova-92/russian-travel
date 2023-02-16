import * as React from "react";
import {useState} from "react";
// функции
import axios from 'axios';
import {getRandomArray} from "../../utils/math";
// стили
import './Random.scss';
// константны
import {KEY, URL} from "../../utils/constants";
// компоненты
import {Link} from "../../ui/Link/Link";
import {ThreeDots} from 'react-loader-spinner';

export const ParkCard:React.FC<{data: any, index: number}> = ({data, index}) => {
  const { CommonName, ParkWebSite, Location, District, HasWater, HasPlayground, HasSportground } = data;

  return (<li className={"park-card"}>
    <p className={"park-card__title"}>{index+1}. {CommonName}</p>
    {ParkWebSite && <a className={"park-card__link-title"} href={ParkWebSite}>{ParkWebSite}</a> }
    <p className={"park-card__location"}>Где найти: {District}. {Location}.</p>
    <ul className="park-card__activity-list">
      <li className="park-card__activity-list-item">Водоем: {HasWater === 'да' ? '✔' : '✘'}</li>
      <li className="park-card__activity-list-item">Детские площадки: {HasPlayground === 'да' ? '✔' : '✘'}</li>
      <li className="park-card__activity-list-item">Cпортивные площадки: {HasSportground === 'да' ? '✔' : '✘'}</li>
    </ul>
  </li>)
}
export const Random: React.FC = () => {
  const [parks, setParks] = useState<any>();
  const [loader, setLoader] = useState(false);
  const [button, setButton] = useState(false);
  const getAPI = () => {
    axios.get(`${URL}/datasets/1465/features?&api_key=${KEY}`,
      { 'headers': {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then((resp) => {
        resp = resp.data.features;
        setParks(resp);
        setLoader(false);
        setButton(false);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const random = () => {
    let randomPark = [];
    const array = getRandomArray();
    for(let arr in array) {
      const { properties } = parks[array[arr]];
      const { Attributes } = properties;
      randomPark.push(Attributes);
    }
    return <ul className={"random__cards"}>{randomPark.map((park, index) => <ParkCard data={park} index={index} />)}</ul>
  };

  const onClickButton = async () => {
    setButton(true);
    if(parks) {
      setParks(undefined);
      setButton(false);
    }
    else {
      setLoader(true);
      getAPI();
    }
  };
  return (
    <section className="random page__block page__block_size_small">
      <h2 className="random__title">Узнать что-то новое... хотите?</h2>
      <p className="random__text">В век огромного информационного потока не всю информацию нужно знать, но почему бы и нет? Хотите получить список 9 рандомных парков Москвы?
        Предупреждаем, придется немного подождать =)
      </p>
      <Link type={"buttonWithBorder"} text={!parks ? 'Узнать' : 'Скрыть'} onClickButton={onClickButton} disabled={button}/>
      {loader && <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fff"
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperClass={"random__loader"}
      />}
      { parks && random() }
    </section>
  );
};