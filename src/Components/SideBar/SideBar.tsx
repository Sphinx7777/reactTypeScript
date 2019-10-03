import React from 'react'
import s from './SideBar.module.scss'
import {MyProps} from "../Header/Header";


//BurgerMenu toggle show sideBar



export const SideBar = ({showSidebar,setShowSidebar}: MyProps) => {


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
				<span onClick={()=> {
					setShowSidebar(!showSidebar)
				}}>Закрыть</span>
			</div>

		</>
	)
};