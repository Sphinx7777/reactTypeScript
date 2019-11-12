import React, {useEffect, useState} from 'react'
import s from './ToDo.module.scss'
import {ModalWindow} from '../Others/ModalWindow/ModalWindow';
import {IProps} from "./ToDoContainer";
import ToDoForm from "./ToDoForm";
import {Task, TaskContent} from "../Redux/todoTsReducer";
import ToDoFormNewContent from "./ToDoFormNewContent";
import {ToDoHeader} from "./ToDoHeader/ToDoHeader";
import {ToDoItemHeader} from "./ToDoItemHeader/ToDoItemHeader";
import {ContentsForTask} from "./Task/ContentsForTask";

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
type ValueForm = {
  name: any,
  description: any,
}

export const ToDo = React.memo((
  {
    changeNameAndDescription, newDateForTask, removeCompletedTaskToContent,
    toSetStatusCompletedTask, removeAllTaskContent, removeTaskContent,
    toggleShowTaskContent, tasks, setShowSidebar, addNewTask, addNewTaskContent,
    setRemoveAllCompletedTask
  }: IProps) => {

  const [dateSearchEditMode, setDateSearchEditMode] = useState(false);
  const [allTasks, setFilteredTasks] = useState(tasks);
  const [addTask, setStatusAddTask] = useState(false);
  const [dateForPlane, setDateForPlane] = useState(new Date());
  const [showCalendar, setStatusCalendar] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);
  const [taskIdForNewContent, setTaskIdForNewContent] = useState(null);
  const [taskIdForNewDescription, setTaskIdForNewDescription] = useState(null);
  const [taskIdForNewDate, setTaskIdForNewDate] = useState(null);
  const [dateForNewContent, setDateForNewContent] = useState('');

  const dateForPlaneString: string = dateForPlane.toLocaleDateString();

  const dayOfWeek: string = week[dateForPlane.getDay()];

  const onSubmit: (value: any) => void = (value: ValueForm) => {
    const task: Task = {
      dateForPlane: dateForPlaneString,
      id: Math.random(),
      deyOfWeek: dayOfWeek,
      editStatus: false,
      taskContent:
        [
          {
            idContent: Math.random(),
            name: value.name,
            description: value.description,
            editStatusDescription: false,
            editStatusName: false,
            completed: false,
            createDate: new Date().toLocaleDateString()
          }
        ]
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

  const addTaskIdForNewDate = (id: any) => {
    setTaskIdForNewDate(id);

  };

  const submitNewContent: (value: any) => void = (value: ValueForm) => {
    const newContent =
      {
        idContent: Math.random(),
        name: value.name,
        description: value.description,
        editStatusDescription: false,
        editStatusName: false,
        completed: false,
        createDate: new Date().toLocaleDateString()
      };
    addNewTaskContent(taskIdForNewContent, newContent);
    setTaskIdForNewContent(null);
  };

  const removeThisTaskContent = (idContent: number) => removeTaskContent(idContent);

  const removeAllThisTaskContent = (id: number | undefined) => removeAllTaskContent(id);

  const toggleCompletedTask = (idContent: number, status: boolean | undefined) =>
    toSetStatusCompletedTask(idContent, status);

  const removeAllCompletedTaskToContent = (id: number | undefined) =>
    removeCompletedTaskToContent(id);

  const changeDateTask = () => newDateForTask(taskIdForNewDate, dateForPlaneString);

  const IdForNewDescription = (idContent: any) => setTaskIdForNewDescription(idContent);

  const submitNewDescription: (value: ValueForm) => void = (value) => {
    changeNameAndDescription(taskIdForNewDescription, value.name, value.description);
    setShowEditDescription(false);
  };

  const addDateForSearch = (date: Date) => {
    const dateToString = date.toLocaleDateString();
    const dateTask: any = tasks.filter(
      (t: Task) =>
        t.dateForPlane === dateToString
    );
    setFilteredTasks(dateTask);
  };
  const addDateForSearchToString = (date: string | undefined) => {
    const dateTask: any = tasks.filter(
      (t: Task) => t.dateForPlane === date
    );
    setFilteredTasks(dateTask);
  };

  const contents = tasks.map((t: Task) => t.taskContent);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks.length, contents.length]);

  const setNameSearchValue = (value: string) => {
    const searchName: any = [];
    for (let i = 0; i < tasks.length; i++) {
      let taskForSearch = tasks[i].taskContent.some(
        t =>
          t.name.toString().toLowerCase().includes(value.toString().toLowerCase())
      );
      taskForSearch && searchName.push(tasks[i]);
    }
    value.length ? setFilteredTasks(searchName) : setFilteredTasks(tasks)
  };

  const setFilteredTaskSearch = (status: boolean) => {
    const searchCompleted: any = [];
    for (let i = 0; i < tasks.length; i++) {
      let taskForSearch = tasks[i].taskContent.some(
        t => t.completed === status);
      taskForSearch && searchCompleted.push(tasks[i]
      );
    }
    setFilteredTasks(searchCompleted)
  };

  const closeSidebar = () => setShowSidebar(false);

  const removeAllCompletedTask = () => setRemoveAllCompletedTask();

  return (
    <>
      <div className={s.toDoWrapper} onClick={closeSidebar}>
        <ToDoHeader {...
          {
            setFilteredTasks, setFilteredTaskSearch, tasks,
            setDateSearchEditMode, dateSearchEditMode,
            addDateForSearchToString,
            addDateForSearch, setNameSearchValue
          }}/>
        <div className={s.taskControl}>
          <div className={s.addNewTask}
               onClick={createNewTask}>
            {
              !addTask
                ? 'Добавить планы на новую дату'
                : 'Отменить'
            }
          </div>
          <div className={s.dellAllFinishedTask} onClick={removeAllCompletedTask}>
            Удалить все завершенные
          </div>
        </div>
        {
          addTask && <ToDoForm {...
          {
            onSubmit, setStatusAddTask, setStatusCalendar, dateForPlaneString
          }}/>
        }
        {
          taskIdForNewContent && <ToDoFormNewContent {...
          {
            dateForNewContent, submitNewContent, setTaskIdForNewContent
          }}/>
        }
        {
          allTasks.map(t =>
            <div className={s.toDoItem} key={t.id}>
              <ToDoItemHeader {...
                {
                  addTaskIdForNewDate, taskIdForNewDate, dateForPlane,
                  setDateForPlane, changeDateTask, addTaskId,
                  toggleShowTaskContent, removeAllCompletedTaskToContent,
                  removeAllThisTaskContent, t: t, tasks
                }}/>

              <div className={t.editStatus ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>
                {t.taskContent.map((c: TaskContent) =>
                  <div className={s.task} key={c.idContent}>
                    <ContentsForTask {...
                      {
                        toggleCompletedTask, IdForNewDescription,
                        setShowEditDescription, showEditDescription, submitNewDescription,
                        removeThisTaskContent, c
                      }}/>
                  </div>)}
              </div>
            </div>)
        }
        {showCalendar && <div className={s.calendar}>
					<ModalWindow {...
            {
              setStatusCalendar, dateForPlane, setDateForPlane
            }}/>
				</div>}
      </div>
    </>)
});