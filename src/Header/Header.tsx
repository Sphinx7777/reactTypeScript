import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../OtherComponents/ContaktLinks/ContactLinks';

/*
interface Props {
  showSidebar: boolean | undefined;
  setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}
*/


export const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <ContactLinks/>
    </div>
  )
};


