import React from 'react'
import s from './SideBar.module.scss'
import {IProps} from "../ToDoTS/ToDoContainer";


//BurgerMenu toggle show sideBar



export const SideBar = ({showSidebar,setShowSidebar}: IProps) => {


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