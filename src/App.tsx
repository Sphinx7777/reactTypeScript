import React, {useState} from 'react';
import s from './App.module.scss';
import ToDoContainer from "./Components/ToDoTS/ToDoContainer";
import {Header} from './Components/Header/Header';
import {SideBar} from "./Components/SideBar/SideBar";



const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false); //toggle menu

  return (
    <div className={s.app}>
      <Header {...{showSidebar, setShowSidebar}} />
      <SideBar {...{showSidebar,setShowSidebar}} />
      <div className={s.content}>
        <ToDoContainer {...{showSidebar, setShowSidebar}}/>
      </div>
    </div>
  )
};

export default App;
