import React from 'react'

import s from './BurgerMenu.module.scss'
const burger = require( './../../../images/burger.ico');
const arrow = require( './../../../images/arrow_left.png');

interface BurgerMenuProps {
	handleShowSidebar: () => void
}

export const BurgerMenu = ({handleShowSidebar}: BurgerMenuProps) => {
	const toggleSidebar = () => handleShowSidebar();

	return (
		<div className={s.burgerMenuWrapper}>
			<img className={s.burgerMenuImg}
					 src={burger}
					 alt=""
					 onClick={toggleSidebar}
			/>
			<div>
				<img className={s.burgerMenuArrow}
						 src={arrow}
						 alt=""
				/>
			</div>
		</div>
	)
};
