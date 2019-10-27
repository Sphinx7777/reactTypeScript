import React from 'react'
import s from './BurgerMenu.module.scss'
import {MyProps} from "../../Header/Header";
const burger = require( './../../../images/burger.ico');


export const BurgerMenu = ({setShowSidebar,showSidebar}: MyProps) => {

	return (
		<>
			<div className={s.burgerMenuWrapper} onClick={(event: any)=>{
				event.stopPropagation()}}>
				<img className={s.burgerMenuImg} src={burger} alt="" onClick={()=>setShowSidebar(!showSidebar)}/>
			</div>
		</>
	)
};