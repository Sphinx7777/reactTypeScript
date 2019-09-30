import React from 'react'
import s from './ContactLinks.module.scss'


export const ContactLinks = () => {
  return (
    <div className={s.contactsLinkWrapper}>
      <a className={s.link} target='_blank' rel='noopener noreferrer'
         href="https://djinni.co/q/03c688fb54">
        <img className={s.linkImg} src={'/images/lamp.ico'} alt="Джинни"/><span className={s.linkTitle}>Djinni</span>
      </a>
      <a className={s.link} target='_blank' rel='noopener noreferrer'
         href="https://t.me/S_f_i_n_x">
        <img className={s.linkImg} src={'/images/telegram.ico'} alt="Телеграм"/><span
        className={s.linkTitle}>Telegram</span>
      </a>
      <a className={s.link} target='_blank' rel='noopener noreferrer'
         href="https://www.linkedin.com/in/onishchenkosergei/">
        <img className={s.linkImg} src={'/images/linkedIn.ico'} alt="Линкедин"/><span
        className={s.linkTitle}>linkedin</span>
      </a>
    </div>
  )
};