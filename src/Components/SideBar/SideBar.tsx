import React from 'react'
import s from './SideBar.module.scss'
import {MyProps} from "../Header/Header";

const shape = require('./../../images/shape.png');
const search = require('./../../images/search.ico');

export const SideBar = ({showSidebar, setShowSidebar}: MyProps) => {

	return (
		<>
			<div className={showSidebar ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.hide)}
			onClick={(event)=>event.stopPropagation()}
			>
				<div>
					<a className={s.link} target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/Portfolio">
						<img className={s.linkImg} src={shape} alt="Portfolio"/><span className={s.linkTitle}>Portfolio v.1.0</span>
					</a>
				</div>
				<div>
					<a className={s.link} target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/SocialNetvork">
						<img className={s.linkImg} src={search} alt="Social Network"/>
						<span className={s.linkTitle}>Social Network</span>
					</a>
				</div>
				<span className={s.close} onClick={() => {
					setShowSidebar(!showSidebar)
				}}>Закрыть</span>
			</div>
		</>
	)
};