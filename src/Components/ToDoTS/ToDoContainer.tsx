import React, {Component} from 'react'
import {ToDo} from "./ToDo";
import {connect} from "react-redux";
import {
  addNewTask, addNewTaskContent, Task, Tasks, TaskContent, toggleShowTaskContent,
  removeTaskContent, removeAllTaskContent, toSetStatusCompletedTask, removeCompletedTaskToContent
} from "../Redux/todoTsReducer";
import {TodoState} from '../Redux/reduxStore';


export interface IProps {
  showSidebar: boolean;
  setShowSidebar: (showSidebar: boolean) => void;
  addNewTask: (task: Task) => {};
  addNewTaskContent: (idContent: number | null, newTaskContent: TaskContent) => {};
  toggleShowTaskContent: (id: number | undefined, status: boolean | undefined) => void;
  toSetStatusCompletedTask: (id: number | undefined, status: boolean | undefined) => void;
  removeAllTaskContent: (id: number | undefined) => void;
  removeTaskContent: (idContent: number) => void;
  removeCompletedTaskToContent: (id: number | undefined) => void;
  editMode: boolean;
  tasks: Tasks;
}


class ToDoContainer extends Component<IProps> {


  render() {
    const {removeCompletedTaskToContent, toSetStatusCompletedTask, removeAllTaskContent, removeTaskContent, toggleShowTaskContent, addNewTask, showSidebar, setShowSidebar, editMode, tasks, addNewTaskContent} = this.props;

    return (
      <div>
        <ToDo {...{removeCompletedTaskToContent, toSetStatusCompletedTask, removeAllTaskContent,
          removeTaskContent, toggleShowTaskContent, addNewTask, showSidebar, setShowSidebar,
          editMode, tasks, addNewTaskContent
        }}/>
      </div>
    )
  }
}


export default connect((state: TodoState) => ({
  editMode: state.toDo.editMode,
  tasks: state.toDo.tasks,
}), {
  addNewTask, addNewTaskContent,
  removeCompletedTaskToContent, toggleShowTaskContent,
  removeTaskContent, removeAllTaskContent, toSetStatusCompletedTask
})(ToDoContainer);