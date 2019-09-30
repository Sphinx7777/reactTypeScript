import React from 'react'
import s from './SideBar.module.scss'
import {BurgerMenu} from './BurgerMenu';

interface Props {
  showSidebar: boolean | undefined;
  setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}
export const SideBar = ({showSidebar, setShowSidebar}:Props)=> {


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