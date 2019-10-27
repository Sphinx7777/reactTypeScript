import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../Others/ContaktLinks/ContactLinks';
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";


export interface MyProps {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}

export const Header = ({showSidebar,setShowSidebar}: MyProps) => {
  return (
    <div className={s.headerWrapper} >
        <BurgerMenu {...{showSidebar,setShowSidebar}}/>
      <ContactLinks/>
    </div>
  )
};

