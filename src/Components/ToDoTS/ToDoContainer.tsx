import React, {Component} from 'react'
import {ToDo} from "./ToDo";
import {connect} from "react-redux";
import {addNewTask} from "../Redux/todoTsReducer";
import {TodoState} from '../Redux/reduxStore';

export interface IProps {
	showSidebar: boolean;
	setShowSidebar: (showSidebar: boolean) => void;
	addNewTask: (task: boolean) => any;
	editMode: boolean;
}


class ToDoContainer extends Component<IProps>{


	render() {
const {addNewTask,showSidebar,setShowSidebar,editMode}=this.props;
		return (
			<div>
				<ToDo {...{addNewTask,showSidebar,setShowSidebar,editMode}}/>
			</div>
		)
	}
}


export default connect((state: TodoState ) =>({editMode:state.toDo.editMode}),{addNewTask})(ToDoContainer) ;