import s from './ContentsForTask.module.scss';
import React from "react";
import {TaskContent} from "../../Redux/todoTsReducer";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ToDoFormForNewDescription from "../ToDoFormForNewDescription";

export interface IProps {
	toggleCompletedTask: (idContent: number, completed: boolean) => void;
	IdForNewDescription: (idContent: number) => void;
	setShowEditDescription: (status: boolean) => void;
	showEditDescription: boolean;
	submitNewDescription: (idContent: any) => void;
	removeThisTaskContent: (idContent: any) => void;
	c: TaskContent;
}

export const ContentsForTask = (
	{
		toggleCompletedTask,
		IdForNewDescription,
		setShowEditDescription,
		showEditDescription,
		submitNewDescription,
		removeThisTaskContent,
		c
	}: IProps) => {

	const setToggleCompletedTask = () => toggleCompletedTask(c.idContent, !c.completed);

	const openEitDescription = () => {
		IdForNewDescription(c.idContent);
		setShowEditDescription(true);
	};

	const dellThisTaskContent = () => removeThisTaskContent(c.idContent);

	return (
		<>
			<div className={s.taskHeader}>
				<div className={s.createDateAndFinished}>
									<span className={s.createDate}>
                    Дата создания : <b>{c.createDate}</b>
									</span>
					<FormControlLabel className={s.finished}
														checked={c.completed}
														onChange={setToggleCompletedTask}
														control={<Checkbox color="primary"/>}
														label="Статус"
														labelPlacement="start"
					/>
				</div>
				<div>
					<div className={!c.completed ? s.taskName : (s.taskName + ' ' + s.completed)}
							 onDoubleClick={openEitDescription}
							 title='Дабл клик для редактирования'>
						{c.name}
					</div>
				</div>
				<div className={!c.completed ? s.taskContent : (s.taskContent + ' ' + s.completed)}
						 onDoubleClick={openEitDescription}
						 title='Дабл клик для редактирования'>
					{c.description}
				</div>
				{
					showEditDescription &&
					<ToDoFormForNewDescription {...
						{
							initialValues: {
								name: c.name,
								description: c.description
							},
							submitNewDescription,
							setShowEditDescription
						}}/>
				}
			</div>
			<div className={s.dellContent}>
        <span className={s.dellContentBtn}
							onClick={dellThisTaskContent}>
          Удалить
        </span>
			</div>
		</>
	)
};

