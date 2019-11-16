import React from 'react'
import {NavLink} from "react-router-dom";

import s from './SideBar.module.scss'
const organizer = require('./../../images/organizer.png');
const network = require('./../../images/socialnetwork.png');
const resume = require('./../../images/resume.png');
const main = require('./../../images/search.ico');

interface SideBarProps {
  showSidebar: boolean
  handleShowSidebar: () => void
}

export const SideBar = ({showSidebar, handleShowSidebar}: SideBarProps) => {
  const toggleSidebar = () => handleShowSidebar();
  const stopPropaganda = (event: any) => event.stopPropagation();

  const classNames = showSidebar ? s.sideBarWrapper : (s.sideBarWrapper + ' ' + s.hide);

  return (
    <div className={classNames} onClick={stopPropaganda}>
      <div>
        <a className={s.link}
           target='_blank'
           rel='noopener noreferrer'
           href="https://sphinx7777.github.io/SocialNetvork"
        >
          <img className={s.linkImg}
               src={network}
               alt="Social network"
          />
          <span className={s.linkTitle}>
            Social Network
          </span>
        </a>
      </div>
      <div>
        <a className={s.link}
           target='_blank'
           rel='noopener noreferrer'
           href="https://sphinx7777.github.io/Portfolio"
        >
          <img className={s.linkImg}
               src={organizer}
               alt="Portfolio"
          />
          <span className={s.linkTitle}>
            Portfolio v.1.0
          </span>
        </a>
      </div>
      <div>
        <NavLink className={s.link} to='/resume'>
          <img className={s.linkImg}
               src={resume}
               alt="Resume"
          />
          <span className={s.linkTitle}>
            Resume
          </span>
        </NavLink>
      </div>
      <div>
        <NavLink className={s.link} to='/'>
          <img className={s.linkImg}
               src={main}
               alt="Main"
          />
          <span className={s.linkTitle}>
            Главная
          </span>
        </NavLink>
      </div>
      <span className={s.close}
            onClick={toggleSidebar}
      >
        X
      </span>
    </div>
  )
};
