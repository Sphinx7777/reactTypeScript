import React from 'react'
import s from './BurgerMenu.module.scss'
import {MyProps} from "../../Header/Header";



export const BurgerMenu = ({setShowSidebar,showSidebar}: MyProps) => {
//togle menu

	return (
		<>
			<div className={s.burgerMenuWrapper} onClick={()=>{setShowSidebar(!showSidebar)}}>
				<img className={s.burgerMenuImg} src={'/images/burger.ico'} alt=""/>
				<span className={s.burgerMenuTitle}>Menu</span>
			</div>
		</>
	)
};