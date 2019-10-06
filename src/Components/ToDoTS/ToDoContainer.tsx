import React, {Component} from 'react'
import {ToDo} from "./ToDo";
import {connect} from "react-redux";
import {addNewTask, addNewTaskContent, Task, Tasks} from "../Redux/todoTsReducer";
import {TodoState} from '../Redux/reduxStore';



export interface IProps {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: boolean) => void;
	addNewTask: (task: Task) => {};
	addNewTaskContent: (id:number,task: Task) => {};
	editMode: boolean;
	tasks: Tasks
}


class ToDoContainer extends Component<IProps>{


	render() {
const {addNewTask,showSidebar,setShowSidebar,editMode,tasks}=this.props;


		return (
			<div>
				<ToDo {...{addNewTask,showSidebar,setShowSidebar,editMode,tasks,addNewTaskContent}}/>
			</div>
		)
	}
}


export default connect((state: TodoState ) =>({
	editMode:state.toDo.editMode,
	tasks:state.toDo.tasks,
}),{addNewTask,addNewTaskContent})(ToDoContainer) ;