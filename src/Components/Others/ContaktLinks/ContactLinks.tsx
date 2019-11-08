import React from 'react'
import s from './ContactLinks.module.scss'

const lamp = require('./../../../images/lamp.ico');
const telegram = require('./../../../images/telegram.ico');
const linkedIn = require('./../../../images/linkedIn.ico');
const git = require('./../../../images/git.ico');
const network = require('./../../../images/socialnetwork.png');


export const ContactLinks = () => {
	return (
		<div className={s.contactsLinkWrapper}>
			<a className={s.link} target='_blank' rel='noopener noreferrer'
				 href="https://sphinx7777.github.io/SocialNetvork">
				<img className={s.linkImg} src={network} alt="Social network"/>
				<span className={s.linkTitle}>Social Network</span>
			</a>
			<a className={s.link} target='_blank' rel='noopener noreferrer'
				 href="https://djinni.co/q/03c688fb54">
				<img className={s.linkImg} src={lamp} alt="Джинни"/>
				<span className={s.linkTitle}>Djinni</span>
			</a>
			<a className={s.link} target='_blank' rel='noopener noreferrer'
				 href="https://www.linkedin.com/in/onishchenkosergei">
				<img className={s.linkImg} src={linkedIn} alt="Линкедин"/><span
				className={s.linkTitle}>linkedin</span>
			</a>
			<a className={s.link} target='_blank' rel='noopener noreferrer'
				 href="https://github.com/Sphinx7777?tab=repositories">
				<img className={s.linkImg} src={git} alt="GIT"/><span
				className={s.linkTitle}>GIT</span>
			</a>
			<a className={s.link} target='_blank' rel='noopener noreferrer'
				 href="https://t.me/S_f_i_n_x">
				<img className={s.linkImg} src={telegram} alt="Телеграм"/><span
				className={s.linkTitle}>Telegram</span>
			</a>
		</div>
	)
};