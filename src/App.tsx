import React, {useState} from 'react';
import s from './App.module.scss';
import ToDoContainer from "./Components/ToDoTS/ToDoContainer";
import {Header} from './Components/Header/Header';
import {SideBar} from "./Components/SideBar/SideBar";

export interface IProps {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
}


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
