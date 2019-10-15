import React, {useState} from 'react'
import s from './ToDo.module.scss'
import {ContactLinks} from "../Others/ContaktLinks/ContactLinks";
import {BurgerMenu} from "../Others/BurgerMenu/BurgerMenu";
import {ModalWindow} from '../Others/ModalWindow/ModalWindow';
import {IProps} from "./ToDoContainer";
import ToDoForm from "./ToDoForm";
import {Task, TaskContent} from "../Redux/todoTsReducer";
import ToDoFormNewContent from "./ToDoFormNewContent";


const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
type ValueForm = {
	name: any,
	description: any,
}




export const ToDo = ({showSidebar, setShowSidebar, tasks, addNewTask, editMode,addNewTaskContent}: IProps) => {


	const [showContent, setStatusContent] = useState(false);
	const [addTask, setStatusAddTask] = useState(false);
	const [dateForPlane, setDateForPlane] = useState(new Date());
	const [showCalendar, setStatusCalendar] = useState(false);
	const [taskId, setTaskId] = useState(null);
	const dateForPlaneString: string = dateForPlane.toLocaleDateString();
	const dayOfWeek: string = week[dateForPlane.getDay()];
	const onSubmit: (value: any) => void = (value: ValueForm) => {
		const task: Task = {
			dateForPlane: dateForPlaneString, id: Math.random(), deyOfWeek: dayOfWeek, editStatus: false,
			taskContent: [{
				idContent: Math.random(),name: value.name, description: value.description,
				editStatusDescription: false, editStatusName: false, createDate: new Date().toLocaleDateString()
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
	const addTaskId = (id: any)=> {
    setTaskId(id);
  };
	const submitNewContent: (value: any) => void = (value: ValueForm) => {
const newContent= {
  idContent: Math.random(),name: value.name, description: value.description,
  editStatusDescription: false, editStatusName: false, createDate: new Date().toLocaleDateString()
};
    addNewTaskContent(taskId,newContent);
    setTaskId(null);
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
					<div className={s.addNewTask} onClick={createNewTask}>{!addTask ? 'Добавить новое задание' : 'Отменить'}</div>
					<div className={s.dellAllFinishedTask}>Удалить все завершенные</div>
				</div>
				{addTask && <ToDoForm onSubmit={onSubmit} dateForPlaneString={dateForPlaneString}/>}
				{taskId && <ToDoFormNewContent submitNewContent={submitNewContent}/>}

				{tasks.map(t=>
				<div className={s.toDoItem} key={t.id}>
					<div className={s.itemHeader}>
						<div className={s.dateAndTaskStatus}>
							<div>
								{showContent ?
									<span title='Дабл клик для редактирования' className={s.dateForPlaneEdit}>{t.dateForPlane}</span>
									: <span className={s.dateForPlane}>{t.dateForPlane}</span>}
								<span className={s.dayForPlane}>{t.deyOfWeek}</span>
							</div>
							<div>
								<span className={s.totalTasks}>всего_дел</span>
								<span className={s.completedTasks}>сделанно_дел</span>
							</div>
						</div>
						<div className={s.action}>
							<div className={s.addTask} onClick={()=>addTaskId(t.id)}>Добавить</div>
							<div className={s.openList} onClick={() => {
								setStatusContent(!showContent)
							}}>{!showContent ? 'Открыть список' : 'Закрыть список'}
							</div>
							<div className={s.dellAllTask}>Удалить все</div>
						</div>

					</div>
					<div className={showContent ? s.itemContents + ' ' + s.active : (s.itemContents + ' ' + s.none)}>


{t.taskContent.map((c: TaskContent) =>
						<div className={s.task} key={c.idContent}>
							<div className={s.taskHeader}>
								<div className={s.createDateAndDell}>
									<span>
                    {c.createDate}
									</span>
									<span>
										завершить
									</span>
								</div>
								<div className={s.taskName}>
									{c.name}
								</div>
							</div>
							<div className={s.taskContent}>
								{c.description}
							</div>
							<div className={s.dellContent}>
								<span>Удалить</span>
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