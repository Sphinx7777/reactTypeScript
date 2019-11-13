import s from './ToDoItemHeader.module.scss';
import React from "react";
import {Task, Tasks} from "../../Redux/todoTsReducer";
import {NewCalendarForNewDate} from "../../Others/Calendar/NewCalendarForNewDate";

export interface IProps {
	addTaskIdForNewDate: (id: any) => void;
	taskIdForNewDate: any;
	dateForPlane: Date;
	changeDateTask: () => void;
	setDateForPlane: (date: Date) => void;
	addTaskId: (id: any, date: any) => void;
	toggleShowTaskContent: (id: any, status: boolean) => void;
	removeAllCompletedTaskToContent: (id: number | undefined) => void;
	removeAllThisTaskContent: (id: number | undefined) => void;
	t: Task
	tasks: Tasks;
}

export const ToDoItemHeader = (
	{
		addTaskIdForNewDate,
		taskIdForNewDate,
		dateForPlane,
		setDateForPlane,
		changeDateTask,
		addTaskId,
		toggleShowTaskContent,
		removeAllCompletedTaskToContent,
		removeAllThisTaskContent,
		t
	}: IProps) => {

	const removeAllTaskContent = () => removeAllThisTaskContent(t.id);

	const removeCompletedTaskContentAll = () => removeAllCompletedTaskToContent(t.id);

	const toggleShowContent = () => toggleShowTaskContent(t.id, !t.editStatus);

	const addTaskForDate = () => addTaskId(t.id, t.dateForPlane);

	const completedTask = t.taskContent.filter(tc => tc.completed);

	const openEditDate = () => addTaskIdForNewDate(t.id);

	return (
		<div className={s.itemHeader}>
			<div className={s.dateAndTaskStatus}>
				<div>
					{
						t.editStatus ?
							<div className={s.dateForPlaneWrap}>
                      <span className={s.dateForPlaneEdit}
														title='Дабл клик для редактирования'
														onDoubleClick={openEditDate}>
                        {t.dateForPlane}
                      </span>
								<span className={s.dayForPlane}>
                {t.deyOfWeek}
              </span>
								{
									taskIdForNewDate && <NewCalendarForNewDate {...
										{
											dateForPlane,
											setDateForPlane,
											addTaskIdForNewDate,
											changeDateTask
										}}
									/>
								}
							</div>
							: <div className={s.dateForPlaneWrap}>
                <span className={s.dateForPlane}>
                  {t.dateForPlane}
                </span>
								<span className={s.dayForPlane}>
                  {t.deyOfWeek}
                </span>
							</div>
					}
				</div>
				<div className={s.totalAndCompletedTask}>
                  <span className={s.totalTasks}>
                    Всего дел : <b>
                    {
											t.taskContent.length
												? t.taskContent.length
												: 0
										}
                  </b>
                  </span>
					<span
						className={s.completedTasks}>
            Выполнено : <b>
            {
							t.taskContent.length
								? completedTask.length
								: 0
						}
            </b>
          </span>
				</div>
			</div>
			<div className={s.action}>
				<div className={s.addTask}
						 onClick={addTaskForDate}>
					Добавить
				</div>
				<div className={!t.editStatus
					? s.openList
					: (s.openList + ' ' + s.active)}
						 onClick={toggleShowContent}>
					{
						!t.editStatus
							? 'Открыть список'
							: 'Закрыть список'
					}
				</div>
				<div className={s.buttonsDell}>
					<div className={s.dellFinishedTask}
							 onClick={removeCompletedTaskContentAll}>
						Удалить завершенные
					</div>
					<div className={s.dellAllTask}
							 onClick={removeAllTaskContent}>
						Удалить все
					</div>
				</div>
			</div>
		</div>
	)
};

