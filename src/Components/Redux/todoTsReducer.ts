// @ts-ignore
import {load} from 'redux-localstorage-simple';


const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';
const ADD_NEW_TASK_CONTENT: string = '/todoReducer___ADD_NEW_TASK_CONTENT';

export type Tasks = [{
	dateForPlane?: string,
	id?: number,
	deyOfWeek?: string,
	editStatus?: boolean,
	taskContent: [{
		idContent: number,
		name: string | number,
		description: string | number,
		editStatusDescription: boolean,
		editStatusName: boolean,
		createDate: string
	}]
}]

export type TaskContent ={
	idContent: number,
	name: string | number,
	description: string | number,
	editStatusDescription: boolean,
	editStatusName: boolean,
	createDate: string
}

export type Task = {
	dateForPlane?: string,
	id?: number,
	deyOfWeek?: string,
	editStatus?: boolean,
	taskContent: [{
		idContent: number,
		name: string | number,
		description: string | number,
		editStatusDescription: boolean,
		editStatusName: boolean,
		createDate: string
	}]
}


let data: any = load({namespace: 'TasksTs-list'});
let initialState: any = data.toDo;

if (!initialState || !initialState.tasks || !initialState.tasks.length) {
	initialState = {
		tasks: [{
			dateForPlane: "10.11.2019",
			id: 0.9040531789451176,
			deyOfWeek: 'Понедельник',
			editStatus: false,
			taskContent: [{
				idContent: 0.9040532789251176,
				name: "Название",
				description: "Образец",
				editStatusDescription: false,
				editStatusName: false,
				createDate: "06.10.2019"
			}]
		}],
		editMode: false
	}
}

interface IAction {
	action: object
	type: string
	newTask: Task
	newTaskContent:Task
  idContent: number
  payload: any
}


const todoTsReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.newTask})}
		}
		case ADD_NEW_TASK_CONTENT: {
			return {...state, ...state.tasks.map( (t: Task)=>{
			  if(t.id===action.payload.idContent){
          t.taskContent.unshift(action.payload.newTaskContent);
        }
			  return t;
        } )}
		}
		default:
			return state;
	}

};
/*unshift(action.newTaskContent)*/
const setNewTask = (newTask: Task) => ({type: ADD_NEW_TASK,newTask});
const setNewTaskContent = (idContent: number | null, newTaskContent: TaskContent) => ({type: ADD_NEW_TASK_CONTENT,payload: {idContent,newTaskContent} });


export const addNewTask: (newTask: Task) => {} = (newTask: Task) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setNewTask(newTask));
	}
};
export const addNewTaskContent: (idContent :number | null, newTaskContent: TaskContent) => {} = (idContent :number | null, newTaskContent: TaskContent) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setNewTaskContent(idContent,newTaskContent));
	}
};

export default todoTsReducer;

