import React from 'react'
import s from './SideBar.module.scss'
import {MyProps} from "../Header/Header";
import {NavLink} from "react-router-dom";

const organizer = require('./../../images/organizer.png');
const network = require('./../../images/socialnetwork.png');
const resume = require('./../../images/resume.png');
const main = require('./../../images/search.ico');

export const SideBar = ({showSidebar, setShowSidebar}: MyProps) => {

	return (
		<>
			<div className={showSidebar ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.hide)}
					 onClick={(event) => event.stopPropagation()}
			>
				<div>
					<a className={s.link} target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/SocialNetvork">
						<img className={s.linkImg} src={network} alt="Social network"/>
						<span className={s.linkTitle}>Social Network</span>
					</a>
				</div>
				<div>
					<a className={s.link} target='_blank' rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/Portfolio">
						<img className={s.linkImg} src={organizer} alt="Portfolio"/><span
						className={s.linkTitle}>Portfolio v.1.0</span>
					</a>
				</div>
				<div>
					<NavLink className={s.link} to='/resume'>
						<img className={s.linkImg} src={resume} alt="Resume"/>
						<span className={s.linkTitle}>Resume</span>
					</NavLink>
				</div>
				<div>
					<NavLink className={s.link} to='/'>
						<img className={s.linkImg} src={main} alt="Main"/>
						<span className={s.linkTitle}>Главная</span>
					</NavLink>
				</div>
				<span className={s.close} onClick={() => {
					setShowSidebar(!showSidebar)
				}}>X</span>
			</div>
		</>
	)
};