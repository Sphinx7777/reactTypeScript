import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../Others/ContaktLinks/ContactLinks';
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";
import {IProps} from "../../App";


export const Header = ({showSidebar,setShowSidebar}: IProps) => {
  return (
    <div className={s.headerWrapper}>
        <BurgerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <ContactLinks/>
    </div>
  )
};

//for width 450px +
