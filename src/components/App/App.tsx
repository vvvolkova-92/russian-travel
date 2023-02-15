import * as React from "react";
import {Header} from "../Header/Header";
import {Intro} from "../Intro/Intro";
import {Lead} from "../Lead/Lead";
import {Gallery} from "../Gallery/Gallery";
import {Places} from "../Places/Places";
import {Cover} from "../Cover/Cover";
import {useEffect} from "react";
import {Random} from "../Random/Random";


export const App = () => {
  // useEffect(() => {
  //
  // },[])
  return (
    <div className="App">
      <Header />
      <main>
        <Lead />
        <Random />
        <Intro />
        <Gallery />
        <Places />
        <Cover />
      </main>
    </div>
  );
}