import * as React from "react";
import {FC, Fragment} from "react";
import './Link.scss';

interface ILink {
  type: 'a' | 'button',
  text: string,
  link?: string
}
export const Link:FC<ILink> = ({type, text, link}) => {

  return <Fragment>
    {
      type === 'button' ? <button className="button">{text}</button> : <a className="link" href={link}>{text}</a>
    }
  </Fragment>
};