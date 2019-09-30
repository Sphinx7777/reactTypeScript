import React from 'react'
import s from './SideBar.module.scss'


interface Props {
	showSidebar: boolean | undefined;
}

export const SideBar = ({showSidebar}: Props) => {


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