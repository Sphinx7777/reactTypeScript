import React, {Component} from 'react'
import {ToDo} from "./ToDo";
import {connect} from "react-redux";
import {
	addNewTask,
	addNewTaskContent,
	Task,
	Tasks,
	TaskContent,
	toggleShowTaskContent,
	removeTaskContent,
	removeAllTaskContent,
	changeNameAndDescription,
	toSetStatusCompletedTask,
	newDateForTask,
	removeCompletedTaskToContent,
	setRemoveAllCompletedTask
} from "../Redux/todoTsReducer";
import {TodoState} from '../Redux/reduxStore';

export interface IProps {
	setShowSidebar: (showSidebar: boolean) => void;
	addNewTask: (task: Task) => {};
	addNewTaskContent: (idContent: number | null, newTaskContent: TaskContent) => {};
	toggleShowTaskContent: (id: number | undefined, status: boolean | undefined) => void;
	newDateForTask: (id: number | null, date: string | undefined) => void;
	toSetStatusCompletedTask: (id: number | undefined, status: boolean | undefined) => void;
	removeAllTaskContent: (id: number | undefined) => void;
	removeTaskContent: (idContent: number) => void;
	changeNameAndDescription: (idContent: number | null | undefined, name: string, description: string) => void;
	removeCompletedTaskToContent: (id: number | undefined) => void;
	setRemoveAllCompletedTask: () => void;
	tasks: Tasks;
}

class ToDoContainer extends Component<IProps> {

	render() {

		return (
			<div>
				<ToDo {...this.props}/>
			</div>
		)
	}
}

export default connect((state: TodoState) => ({
	tasks: state.toDo.tasks,
}), {
	addNewTask,
	addNewTaskContent,
	removeCompletedTaskToContent,
	changeNameAndDescription,
	toggleShowTaskContent,
	newDateForTask,
	removeTaskContent,
	removeAllTaskContent,
	toSetStatusCompletedTask,
	setRemoveAllCompletedTask
})(ToDoContainer);