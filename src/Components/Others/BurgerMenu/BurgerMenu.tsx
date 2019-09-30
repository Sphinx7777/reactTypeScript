import React from 'react'
import s from './BurgerMenu.module.scss'

interface Props {
	showSidebar: boolean | undefined;
	setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}

export const BurgerMenu = ({showSidebar, setShowSidebar}: Props) => {
//togle menu

	return (
		<>
			<div className={s.burgerMenuWrapper} onClick={() => {
				setShowSidebar(!showSidebar)
			}}>
				<img className={s.burgerMenuImg} src={'/images/burger.ico'} alt=""/>
				<span className={s.burgerMenuTitle}>Menu</span>
			</div>
		</>
	)
};