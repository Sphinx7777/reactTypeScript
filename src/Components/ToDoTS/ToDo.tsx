import React, {useState} from 'react'
import s from './ToDo.module.scss'
import {ContactLinks} from "../Others/ContaktLinks/ContactLinks";
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";
import {ModalWindow} from '../Others/ModalWindow/ModalWindow';
import {IProps} from "./ToDoContainer";


const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


export const ToDo = ({showSidebar, setShowSidebar,tasks, addNewTask, editMode}: IProps) => {

  const [showContent, setStatusContent] = useState(false);
  const [dateForPlane, setDateForPlane] = useState(new Date());
  const [showCalendar, setStatusCalendar] = useState(false);
  const dateForPlaneString: string = dateForPlane.toLocaleDateString();
  const days = new Date();
  const dayOfWeek: string = week[days.getDay()];


  return (
    <>
      <div>Учебный проект по TypeScript...начало...</div>
      <div className={s.toDoWrapper}>
        <div className={s.toDoHeader}>
          <div className={s.taskFilter}>
            <span className={s.filterItem}>завершенные</span>
            <span className={s.filterItem}>активные</span>
            <span className={s.filterItem}>все</span>
          </div>
          <input type="text" className={s.search} placeholder='Поиск'/>
        </div>
        <div className={s.taskControl}>
          <div className={s.addNewTask}>Добавить новое задание</div>
          <div className={s.dellAllFinishedTask}>Удалить все завершенные</div>
        </div>



        <div className={s.toDoItem}>
          <div className={s.itemHeader}>
            <div className={s.dateAndTaskStatus}>
              <div>
                {showContent ?
                  <span title='Дабл клик для редактирования' className={s.dateForPlaneEdit} onDoubleClick={() => {
                    setStatusCalendar(true)
                  }}>{dateForPlaneString}</span>
                  : <span className={s.dateForPlane}>{dateForPlaneString}</span>}
                <span className={s.dayForPlane}>{dayOfWeek}</span>
              </div>
              <div>
                <span className={s.totalTasks}>всего_дел</span>
                <span className={s.completedTasks}>сделанно_дел</span>
              </div>
            </div>
            <div className={s.action}>
              <div className={s.addTask}>Добавить</div>
              <div className={s.openList} onClick={() => {
                setStatusContent(!showContent)
              }}>{!showContent ? 'Открыть список' : 'Закрыть список'}
              </div>
              <div className={s.dellAllTask}>Удалить все</div>
            </div>

          </div>
          <div className={showContent ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>
            <div className={s.task}>
              <div className={s.taskHeader}>
                <div className={s.createDateAndDell}>
									<span>
										дата_создания
									</span>
                  <span>
										завершить
									</span>
                </div>

                <div className={s.taskName}>
                  название_даблклик_редактировать
                </div>

              </div>
              <div className={s.taskContent}>
                task Content дабл клик редактировать
              </div>
              <div className={s.dellContent}>
                <span>Удалить</span>

              </div>
            </div>
            <div className={s.task}>
              <div className={s.taskHeader}>
                <div className={s.createDateAndDell}>
									<span>
										дата_создания
									</span>
                  <span>
										завершить
									</span>
                </div>

                <div className={s.taskName}>
                  название_даблклик_редактировать
                </div>

              </div>
              <div className={s.taskContent}>
                task Content дабл клик редактировать
              </div>
              <div className={s.dellContent}>
                <span>Удалить</span>
              </div>
            </div>

          </div>
        </div>


        {showCalendar && <div className={s.calendar}>
					<ModalWindow {...{setStatusCalendar, dateForPlane, setDateForPlane}}/>
				</div>}
        {/*for width <450px */}
        <div className={s.footerWrapper}>
          <BurgerMenu {...{showSidebar, setShowSidebar}}/>
          <ContactLinks/>
        </div>
      </div>
    </>)
};