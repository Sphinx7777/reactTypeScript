import React, {useState} from 'react';
import s from './App.module.scss';
import ToDoContainer from "./ToDoTS/ToDoContainer";
import {Header} from './Header/Header';
import {SideBar} from "./SideBar/SideBar";




const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false); //toggle menu

  return (
    <div className={s.app}>
      <Header {...{showSidebar, setShowSidebar}} />
      <SideBar {...{showSidebar}} />
      <div className={s.content}>
        <ToDoContainer {...{showSidebar, setShowSidebar}}/>
      </div>
    </div>
  )
};

export default App;
