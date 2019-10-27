import React, {useEffect, useState} from 'react'
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
import {NewCalendarForNewDate} from '../Others/Calendar/NewCalendarForNewDate';
import ToDoFormForNewDescription from './ToDoFormForNewDescription';
import {ModalWindowForSearch} from '../Others/ModalWindow/ModalWindowForSearch';
/*import * as _ from 'lodash'*/


const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
type ValueForm = {
	name: any,
	description: any,
}

export const ToDo = ({
											 changeNameAndDescription, newDateForTask, removeCompletedTaskToContent,
											 toSetStatusCompletedTask,
											 removeAllTaskContent, removeTaskContent, toggleShowTaskContent,
											 showSidebar, tasks,
											 setShowSidebar, addNewTask, addNewTaskContent, setRemoveAllCompletedTask
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

	const addTaskIdForNewDate = (id: any) => {
		setTaskIdForNewDate(id);

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

	const changeDateTask = () => {
		newDateForTask(taskIdForNewDate, dateForPlaneString)
	};

	const IdForNewDescription = (idContent: any) => {
		setTaskIdForNewDescription(idContent)
	};

	const submitNewDescription: (value: any) => void = (value) => {
		changeNameAndDescription(taskIdForNewDescription, value.name, value.description);
		setShowEditDescription(false);
	};

	const addDateForSearch = (date: Date) => {
		const dateToString = date.toLocaleDateString();
		const dateTask: any = tasks.filter((t: Task) => t.dateForPlane === dateToString);
		setFilteredTasks(dateTask);
	};
	const addDateForSearchToString = (date: string | undefined) => {
		const dateTask: any = tasks.filter((t: Task) => t.dateForPlane === date);
		setFilteredTasks(dateTask);
	};

	const contents = tasks.map((t: Task) => t.taskContent);
	useEffect(() => {
		setFilteredTasks(tasks)
	}, [tasks.length, contents.length]);

	const setNameSearchValue = (value: string) => {
		const searchName: any = [];
		for (let i = 0; i < tasks.length; i++) {
			let taskForSearch = tasks[i].taskContent.some(t => t.name === value);
			taskForSearch && searchName.push(tasks[i]);
		}
		value.length ? setFilteredTasks(searchName) : setFilteredTasks(tasks)
	};
	const setFilteredTaskSearch = (status: boolean) => {
		const searchCompleted: any = [];
		for (let i = 0; i < tasks.length; i++) {
			let taskForSearch = tasks[i].taskContent.some(t => t.completed===status);
			taskForSearch && searchCompleted.push(tasks[i]);
		}
		setFilteredTasks(searchCompleted)
	};


	return (
		<>
			<div>Учебный проект по TypeScript. Начало. Сложный, грязный и перемешанный код очень помогает мне лучше учиться
				. Рефакторинг в конце обучения. Еще ссылки в меню.
			</div>
			<div className={s.toDoWrapper} onClick={()=>setShowSidebar(false)}>
				<div className={s.toDoHeader}>
					<div className={s.taskFilter}>
						<span className={s.filterItem} onClick={() => setFilteredTasks(tasks)}>Все</span>
						<span className={s.filterItem} onClick={() => setFilteredTaskSearch(true)}>Завершенные</span>
						<span className={s.filterItem} onClick={() => setFilteredTaskSearch(false)}>Активные</span>

					</div>
					<div className={s.search}>
						<span className={s.dateSearch} onClick={() => setDateSearchEditMode(true)}>Поиск по дате</span>
						{dateSearchEditMode && <ModalWindowForSearch
							addDateForSearchToString={addDateForSearchToString}
							tasks={tasks}
							setDateSearchEditMode={setDateSearchEditMode}
							addDateForSearch={addDateForSearch}/>}
						<input type="text" className={s.nameSearch} placeholder='Поиск по названию'
									 onChange={(event => setNameSearchValue(event.target.value))}
						/>
					</div>
				</div>
				<div className={s.taskControl}>
					<div className={s.addNewTask}
							 onClick={createNewTask}>{!addTask ? 'Добавить планы на новую дату' : 'Отменить'}</div>
					<div className={s.dellAllFinishedTask} onClick={()=>setRemoveAllCompletedTask()}>Удалить все завершенные</div>
				</div>
				{addTask && <ToDoForm onSubmit={onSubmit} setStatusAddTask={setStatusAddTask}
															setStatusCalendar={setStatusCalendar} dateForPlaneString={dateForPlaneString}/>}
				{taskIdForNewContent && <ToDoFormNewContent dateForNewContent={dateForNewContent}
																										submitNewContent={submitNewContent}
																										setTaskIdForNewContent={setTaskIdForNewContent}/>}

				{allTasks.map(t =>
					<div className={s.toDoItem} key={t.id}>
						<div className={s.itemHeader}>
							<div className={s.dateAndTaskStatus}>
								<div>
									{t.editStatus ?
										<div className={s.dateForPlaneWrap}>
                      <span title='Дабл клик для редактирования' className={s.dateForPlaneEdit}
														onDoubleClick={() => {
															addTaskIdForNewDate(t.id);
														}}
											>{t.dateForPlane}</span>
											<span className={s.dayForPlane}>{t.deyOfWeek}</span>
											{taskIdForNewDate && <NewCalendarForNewDate
												dateForPlane={dateForPlane}
												setDateForPlane={setDateForPlane}
												addTaskIdForNewDate={addTaskIdForNewDate}
												changeDateTask={changeDateTask}
											/>}
										</div>
										: <div className={s.dateForPlaneWrap}>
											<span className={s.dateForPlane}>{t.dateForPlane}</span>
											<span className={s.dayForPlane}>{t.deyOfWeek}</span>
										</div> }

								</div>
								<div className={s.totalAndCompletedTask}>
                  <span
										className={s.totalTasks}>Всего дел : <b>{t.taskContent.length ? t.taskContent.length : 0}</b></span>
									<span
										className={s.completedTasks}>Выполнено : <b>{t.taskContent.length
										? t.taskContent.filter(tc => tc.completed).length : 0}</b></span>
								</div>
							</div>
							<div className={s.action}>
								<div className={s.addTask} onClick={() => addTaskId(t.id, t.dateForPlane)}>Добавить</div>
								<div className={!t.editStatus ? s.openList : (s.openList+' '+s.active)} onClick={() => {
									toggleShowTaskContent(t.id, !t.editStatus);
								}}>{!t.editStatus ? 'Открыть список' : 'Закрыть список'}
								</div>
								<div className={s.buttonsDell}>
									<div className={s.dellFinishedTask} onClick={() => removeAllCompletedTaskToContent(t.id)}>
										Удалить
										завершенные
									</div>
									<div className={s.dellAllTask} onClick={() => removeAllThisTaskContent(t.id)}>
										Удалить все
									</div>
								</div>

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
										<div>
											<div className={!c.completed ? s.taskName : (s.taskName + ' ' + s.completed)} onDoubleClick={() => {
												IdForNewDescription(c.idContent);
												setShowEditDescription(true)
											}} title='Дабл клик для редактирования'>
												{c.name}
											</div>
										</div>
										<div className={!c.completed ? s.taskContent : (s.taskContent + ' ' + s.completed)} onDoubleClick={() => {
											IdForNewDescription(c.idContent);
											setShowEditDescription(true)
										}} title='Дабл клик для редактирования'>
											{c.description}
										</div>
										{showEditDescription &&
										<ToDoFormForNewDescription initialValues={{name: c.name, description: c.description}}
																							 submitNewDescription={submitNewDescription}
																							 setShowEditDescription={setShowEditDescription}/>
										}
									</div>
									<div className={s.dellContent}>
										<span className={s.dellContentBtn} onClick={() => removeThisTaskContent(c.idContent)}>Удалить</span>
									</div>
								</div>)}
						</div>
					</div>
				)}
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