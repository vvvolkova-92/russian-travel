import * as React from "react";
import {FC, Fragment} from "react";
import './Link.scss';

interface ILink {
  type: 'a' | 'button' | 'buttonWithBorder'
  text: string;
  link?: string;
  onClickButton?:  React.MouseEventHandler<HTMLButtonElement>;
  inClickA?:  React.MouseEventHandler<HTMLAnchorElement>;

}
export const Link:FC<ILink> = ({type, text, link, onClickButton, inClickA}) => {
  return <Fragment>
    {
      type === 'button'
        ? <button className="button" onClick={onClickButton}>{text}</button> : type === 'buttonWithBorder'
          ? <button className="buttonWithBorder" onClick={onClickButton}>{text}</button> : <a className="link" href={link} onClick={inClickA}>{text}</a>
    }
  </Fragment>
};