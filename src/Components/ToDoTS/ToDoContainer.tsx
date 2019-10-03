import React, {Component} from 'react'
import {ToDo} from "./ToDo";
import {connect} from "react-redux";
import {addNewTask} from "../Redux/todoTsReducer";
import {TodoState} from '../Redux/reduxStore';

type Tasks = [{
	id: number,
	dateForPlane: string,
	name: string | number,
	editStatusDescription: boolean,
	editStatusName: boolean,
	description: string | number,
	status: boolean,
	createDate: string,
}]

export interface IProps {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: boolean) => void;
	addNewTask: (task: boolean) => {};
	editMode: boolean;
	tasks: Tasks
}


class ToDoContainer extends Component<IProps>{


	render() {
const {addNewTask,showSidebar,setShowSidebar,editMode,tasks}=this.props;
		return (
			<div>
				<ToDo {...{addNewTask,showSidebar,setShowSidebar,editMode,tasks}}/>
			</div>
		)
	}
}


export default connect((state: TodoState ) =>({
	editMode:state.toDo.editMode,
	tasks:state.toDo.tasks,
}),{addNewTask})(ToDoContainer) ;