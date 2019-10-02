import React from 'react'
import s from './Header.module.scss'
import {ContactLinks} from '../Others/ContaktLinks/ContactLinks';
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";
import {IProps} from "../ToDoTS/ToDoContainer";



export const Header = ({showSidebar,setShowSidebar,addNewTask,editMode}: IProps) => {
  return (
    <div className={s.headerWrapper}>
        <BurgerMenu {...{showSidebar,setShowSidebar,addNewTask,editMode}}/>
      <ContactLinks/>
    </div>
  )
};

//for width 450px +
