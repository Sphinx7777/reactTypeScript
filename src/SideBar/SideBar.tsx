import React, {useState} from 'react'
import s from './SideBar.module.scss'
import {BurgerMenu} from './BurgerMenu';


export const SideBar = ()=> {
  const [showSidebar, setShowSidebar] = useState(false); //toggle menu

  return (
    <>
      <BurgerMenu  {...{showSidebar, setShowSidebar}}/>
     <div className={showSidebar ? s.sideBarWrapper : (s.sideBarWrapper+' '+s.hide)}>
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