import * as React from "react"
import {Link} from "../../ui/Link/Link";
import {useState} from "react";
import { ThreeDots } from  'react-loader-spinner';
import axios from 'axios';
import {KEY, URL} from "../../utils/constants";
import './Random.scss';
export const Random: React.FC<{  }> = props => {
  const getAPI = () => {
    axios.get(`${URL}/datasets/1465/features?&api_key=${KEY}`,
      { 'headers': {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then((resp) => {
        const allPersons = resp.data.features;
        console.log(allPersons);
        setLoader(false);
      });
  }
  const [loader, setLoader] = useState(false);
  const onClickButton = async () => {
    setLoader(true);
    getAPI();
  }
  return (
    <section className="random page__block page__block_size_small">
      <h2 className="random__title">Узнать что-то новое... хотите?</h2>
      <p className="random__text">В век огромного информационного потока не всю информацию нужно знать, но почему бы и нет? Хотите получить список 10 рандомных парков Москвы?
        Предупреждаем, придется немного подождать =)
      </p>
      <Link type={"buttonWithBorder"} text={"Жми сюда"} onClickButton={onClickButton}/>
      {loader && <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fff"
        ariaLabel="three-dots-loading"
        visible={true}
      />}
    </section>
  );
};