import React from 'react'
import s from './SideBar.module.scss'

//BurgerMenu toggle show sideBar

interface IProps {
	showSidebar: boolean;
}

export const SideBar = ({showSidebar}: IProps) => {


	return (
		<>
			<div className={showSidebar ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.hide)}>
				<div>
					sideBardfdfdfdfdsdsds
				</div>
				<div>
					sideBardfdfdfdfdsdsds
				</div>

				<div>
					sideBardfdfdfdfdsdsds
				</div>

				<div>
					sideBardfdfdfdfdsdsds
				</div>

				<div>
					sideBardfdfdfdfdsdsds
				</div>
			</div>
		</>
	)
};