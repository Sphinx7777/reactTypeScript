import React, {useState} from 'react'
import s from './ToDo.module.scss'
import {ContactLinks} from "../OtherComponents/ContaktLinks/ContactLinks";
import {BurgerMenu} from "../SideBar/BurgerMenu";

interface Props {
  showSidebar: boolean | undefined;
  setShowSidebar: (showSidebar: any) => boolean | undefined | void;
}
export const ToDo = ({showSidebar, setShowSidebar}:Props) => {
  const [showContent, setStatusContent] = useState(true); //toggle task Contents


  return (
    <div className={s.toDoWrapper}>
      <div className={s.toDoHeader}>
        по_дате завершенные активные все         поиск
      </div>

      <div className={s.toDoItem}>

      <div className={s.itemHeader} onClick={() => {
        setStatusContent(!showContent)
      }}>
        запланированно_на_дату день_недели всего_дел сделанно_дел
      </div>

      <div className={showContent ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>
        <div className={s.task}>
          <div className={s.taskHeader}>
            дата_создания название_даблклик_редактировать завершить
          </div>
          <div className={s.taskContent}>
            task Content дабл клик редактировать
          </div>
        </div>
        <div className={s.task}>
          <div className={s.taskHeader}>
            дата_создания название_даблклик_редактировать завершить
          </div>
          <div className={s.taskContent}>
            task Content дабл клик редактировать
          </div>
        </div>
        <div className={s.task}>
          <div className={s.taskHeader}>
            дата_создания название_даблклик_редактировать завершить
          </div>
          <div className={s.taskContent}>
            task Content дабл клик редактировать
          </div>
        </div>
      </div>
    </div>

      <div className={s.toDoItem}>

        <div className={s.itemHeader} onClick={() => {
          setStatusContent(!showContent)
        }}>
          запланированно_на_дату день_недели всего_дел сделанно_дел
        </div>

        <div className={showContent ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>
          <div className={s.task}>
            <div className={s.taskHeader}>
              дата_создания название_даблклик_редактировать завершить
            </div>
            <div className={s.taskContent}>
              task Content дабл клик редактировать
            </div>
          </div>
          <div className={s.task}>
            <div className={s.taskHeader}>
              дата_создания название_даблклик_редактировать завершить
            </div>
            <div className={s.taskContent}>
              task Content дабл клик редактировать
            </div>
          </div>
          <div className={s.task}>
            <div className={s.taskHeader}>
              дата_создания название_даблклик_редактировать завершить
            </div>
            <div className={s.taskContent}>
              task Content дабл клик редактировать
            </div>
          </div>
        </div>
      </div>



      <div className={s.footerWrapper}>
        <BurgerMenu {...{showSidebar, setShowSidebar}}/>
        <ContactLinks />
      </div>
    </div>
  )
};