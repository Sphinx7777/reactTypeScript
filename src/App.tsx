import React, {useState, Suspense} from 'react';
import s from './App.module.scss';
import ToDoContainer from "./Components/ToDoTS/ToDoContainer";
import {Header} from './Components/Header/Header';
import {SideBar} from "./Components/SideBar/SideBar";
import {Route, Switch} from 'react-router';
const Resume = React.lazy(() => import('./Components/Others/Resume/Resume'));

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false); //toggle menu
  console.log('app')
  return (
    <div className={s.app} >
      <Header {...{showSidebar, setShowSidebar}} />
      <SideBar {...{showSidebar,setShowSidebar}} />
      <div className={s.content}>
        <Switch>
          <Route exact path='/' render={() => <ToDoContainer {...{setShowSidebar}}/>}/>
          <Route path='/resume' render={() =>
            <Suspense fallback={<div>Загрузка...</div>}>
              <Resume />
            </Suspense>}/>
        </Switch>
      </div>
    </div>
  )
};

export default App;
