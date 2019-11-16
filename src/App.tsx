import React, {useState, Suspense} from 'react';
import {Route, Switch} from 'react-router';
import ToDoContainer from "./Components/ToDoTS/ToDoContainer";
import {Header} from './Components/Header/Header';
import {SideBar} from "./Components/SideBar/SideBar";

import s from './App.module.scss';

const ResumeComponent = React.lazy(() => import('./Components/Others/Resume/Resume'));

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className={s.app}>
      <Header handleShowSidebar={handleShowSidebar}/>
      <SideBar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar}/>
      <div className={s.content}>
        <Switch>
          <Route exact path='/' render={() => <ToDoContainer setShowSidebar={setShowSidebar}/>}/>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Route path='/resume' render={() => <ResumeComponent/>}/>
          </Suspense>
        </Switch>
      </div>
    </div>
  )
};

export default App;
