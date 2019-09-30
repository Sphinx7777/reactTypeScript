import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../OtherComponents/ContaktLinks/ContactLinks';
import {BurgerMenu} from "../ToDoTS/BurgerMenu";

interface Props {
  showSidebar: boolean | undefined;
  setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}


export const Header = ({showSidebar,setShowSidebar}: Props) => {
  return (
    <div className={s.headerWrapper}>
        <BurgerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> {/*for 450+px*/}
      <ContactLinks/>
    </div>
  )
};


