import React from 'react'
import s from './BurgerMenu.module.scss'
import {MyProps} from "../../Header/Header";
const burger = require( './../../../images/burger.ico');
const arrow = require( './../../../images/arrow_left.png');


export const BurgerMenu = ({setShowSidebar,showSidebar}: MyProps) => {

	return (
		<>
			<div className={s.burgerMenuWrapper}  >
				<img className={s.burgerMenuImg} src={burger} alt="" onClick={()=>setShowSidebar(!showSidebar)}/>
				<div>
					<img className={s.burgerMenuArrow} src={arrow} alt=""/>
				</div>
			</div>
		</>
	)
};