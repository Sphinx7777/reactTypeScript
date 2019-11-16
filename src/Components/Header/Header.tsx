import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../Others/ContaktLinks/ContactLinks';
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";


interface HeaderProps {
  handleShowSidebar: () => void;
}

export const Header = ({handleShowSidebar}: HeaderProps) => {
  return (
    <div className={s.headerWrapper}>
        <BurgerMenu handleShowSidebar={handleShowSidebar}/>
      <ContactLinks />
    </div>
  )
};
