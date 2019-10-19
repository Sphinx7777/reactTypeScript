import React, {useState} from 'react'
import s from './ToDo.module.scss'
import {ContactLinks} from "../Others/ContaktLinks/ContactLinks";
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";
import {ModalWindow} from '../Others/ModalWindow/ModalWindow';
import {IProps} from "./ToDoContainer";
import ToDoForm from "./ToDoForm";
import {Task, TaskContent} from "../Redux/todoTsReducer";
import ToDoFormNewContent from "./ToDoFormNewContent";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/*import * as _ from 'lodash'*/


const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
type ValueForm = {
  name: any,
  description: any,
}


export const ToDo = ({removeCompletedTaskToContent, toSetStatusCompletedTask, removeAllTaskContent, removeTaskContent, toggleShowTaskContent, showSidebar, tasks, setShowSidebar, addNewTask, editMode, addNewTaskContent}: IProps) => {

  const [addTask, setStatusAddTask] = useState(false);
  const [dateForPlane, setDateForPlane] = useState(new Date());
  const [showCalendar, setStatusCalendar] = useState(false);
  const [taskIdForNewContent, setTaskIdForNewContent] = useState(null);
  const [dateForNewContent, setDateForNewContent] = useState('');
  const dateForPlaneString: string = dateForPlane.toLocaleDateString();
  const dayOfWeek: string = week[dateForPlane.getDay()];
  const onSubmit: (value: any) => void = (value: ValueForm) => {
    const task: Task = {
      dateForPlane: dateForPlaneString, id: Math.random(), deyOfWeek: dayOfWeek, editStatus: false,
      taskContent: [{
        idContent: Math.random(),
        name: value.name,
        description: value.description,
        editStatusDescription: false,
        editStatusName: false,
        completed: false,
        createDate: new Date().toLocaleDateString()
      }]
    };
    addNewTask(task);
    setStatusAddTask(false);
  };
  const createNewTask = () => {
    if (!addTask) {
      setStatusCalendar(true);
      setStatusAddTask(!addTask)
    }
    setStatusAddTask(!addTask)
  };
  const addTaskId = (id: any, date: any) => {
    setTaskIdForNewContent(id);
    setDateForNewContent(date);
  };
  const submitNewContent: (value: any) => void = (value: ValueForm) => {
    const newContent = {
      idContent: Math.random(), name: value.name, description: value.description,
      editStatusDescription: false, editStatusName: false, completed: false, createDate: new Date().toLocaleDateString()
    };
    addNewTaskContent(taskIdForNewContent, newContent);
    setTaskIdForNewContent(null);
  };
  const removeThisTaskContent = (idContent: number) => {
    removeTaskContent(idContent)
  };
  const removeAllThisTaskContent = (id: number | undefined) => {
    removeAllTaskContent(id)
  };
  const toggleCompletedTask = (idContent: number, status: boolean | undefined) => {
    toSetStatusCompletedTask(idContent, status)
  };
  const removeAllCompletedTaskToContent = (id: number | undefined) => {
    removeCompletedTaskToContent(id)
  };


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
          <div className={s.addNewTask}
               onClick={createNewTask}>{!addTask ? 'Добавить планы на новую дату' : 'Отменить'}</div>
          <div className={s.dellAllFinishedTask}>Удалить все завершенные</div>
        </div>
        {addTask && <ToDoForm onSubmit={onSubmit} setStatusAddTask={setStatusAddTask}
															setStatusCalendar={setStatusCalendar} dateForPlaneString={dateForPlaneString}/>}
        {taskIdForNewContent && <ToDoFormNewContent dateForNewContent={dateForNewContent}
																										submitNewContent={submitNewContent}
																										setTaskIdForNewContent={setTaskIdForNewContent}/>}

        {tasks.map(t =>
          <div className={s.toDoItem} key={t.id}>
            <div className={s.itemHeader}>
              <div className={s.dateAndTaskStatus}>
                <div>
                  {t.editStatus ?
                    <span title='Дабл клик для редактирования' className={s.dateForPlaneEdit}>{t.dateForPlane}</span>
                    : <span className={s.dateForPlane}>{t.dateForPlane}</span>}
                  <span className={s.dayForPlane}>{t.deyOfWeek}</span>
                </div>
                <div className={s.totalAndCompletedTask}>
                  <span
                    className={s.totalTasks}>Всего дел : <b>{t.taskContent.length ? t.taskContent.length : 0}</b></span>
                  <span
                    className={s.completedTasks}>Выполнено : <b>{t.taskContent.length ? t.taskContent.filter(tc => tc.completed).length : 0}</b></span>
                </div>
              </div>
              <div className={s.action}>
                <div className={s.addTask} onClick={() => addTaskId(t.id, t.dateForPlane)}>Добавить</div>
                <div className={s.openList} onClick={() => {
                  toggleShowTaskContent(t.id, !t.editStatus);
                }}>{!t.editStatus ? 'Открыть список' : 'Закрыть список'}
                </div>
                <div className={s.dellFinishedTask} onClick={() => removeAllCompletedTaskToContent(t.id)}>Удалить
                  завершенные
                </div>
                <div className={s.dellAllTask} onClick={() => removeAllThisTaskContent(t.id)}>Удалить все</div>
              </div>

            </div>
            <div className={t.editStatus ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>


              {t.taskContent.map((c: TaskContent) =>
                <div className={s.task} key={c.idContent}>
                  <div className={s.taskHeader}>
                    <div className={s.createDateAndFinished}>
									<span className={s.createDate}>
                    Дата создания : <b>{c.createDate}</b>
									</span>
                      <FormControlLabel className={s.finished}
                                        checked={c.completed}
                                        onChange={() => toggleCompletedTask(c.idContent, !c.completed)}
                                        control={<Checkbox color="primary"/>}
                                        label="Статус"
                                        labelPlacement="start"
                      />
                    </div>
                    <div className={s.taskName}>
                      {c.name}
                    </div>
                  </div>
                  <div className={s.taskContent}>
                    {c.description}
                  </div>
                  <div className={s.dellContent}>
                    <span className={s.dellContentBtn} onClick={() => removeThisTaskContent(c.idContent)}>Удалить</span>
                  </div>
                </div>)}

            </div>
          </div>)}


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