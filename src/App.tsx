import React from 'react';
import s from './App.module.scss';
import ToDoContainer from "./ToDoTS/ToDoContainer";
import {Header} from './Header/Header';
import {SideBar} from "./SideBar/SideBar";




const App: React.FC = () => {


  return (
    <div className={s.app}>
      <Header  />
      <SideBar />
      <div className={s.content}>
        <ToDoContainer/>
      </div>
    </div>
  )
};

export default App;
