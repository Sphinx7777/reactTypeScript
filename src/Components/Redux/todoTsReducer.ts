// @ts-ignore
import {load} from 'redux-localstorage-simple';


const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';
const ADD_NEW_TASK_CONTENT: string = '/todoReducer___ADD_NEW_TASK_CONTENT';
const TOOGLE_SHOW_TASK_CONTENT: string = '/todoReducer___TOOGLE_SHOW_TASK_CONTENT';
const REMOVE_TASK_CONTENT: string = '/todoReducer___REMOVE_TASK_CONTENT';

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

export type TaskContent = {
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
	status: boolean | undefined
	id: number
}


const todoTsReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.newTask})}
		}
		case TOOGLE_SHOW_TASK_CONTENT: {
			return {...state, ...state.tasks=state.tasks.map( (t: Task)=>{
			  if(t.id===action.id){
          t.editStatus=action.status;
        }
			  return t;
        })}}
		case ADD_NEW_TASK_CONTENT: {
			return {...state, ...state.tasks.map( (t: Task)=>{
			  if(t.id===action.payload.idContent){
          t.taskContent.unshift(action.payload.newTaskContent);
        }
			  return t;
        } )}
		}
	/*	case REMOVE_TASK_CONTENT: {
			let content = state.tasks.map((t: Task)=>t.taskContent);
			return {...state
			}
		}*/
		default:
			return state;
	}

};

const setNewTask = (newTask: Task) => ({type: ADD_NEW_TASK,newTask});
const setToggleShowTaskContent = (idAndStatus: any) => ({type: TOOGLE_SHOW_TASK_CONTENT,...idAndStatus});
const setNewTaskContent = (idContent: number | null, newTaskContent: TaskContent) => ({type: ADD_NEW_TASK_CONTENT,payload: {idContent,newTaskContent} });
const setRemoveTaskContent = (idContent: number) => ({type: REMOVE_TASK_CONTENT,idContent});


export const addNewTask: (newTask: Task) => {} = (newTask: Task) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setNewTask(newTask));
	}
};
export const toggleShowTaskContent: (id: number | undefined,status: boolean | undefined) => {} = (id: number | undefined,status: boolean | undefined) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setToggleShowTaskContent({id,status}));
	}
};
export const addNewTaskContent: (idContent :number | null, newTaskContent: TaskContent) => {} = (idContent :number | null, newTaskContent: TaskContent) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setNewTaskContent(idContent,newTaskContent));
	}
};
export const removeTaskContent: (idContent :number) => {} = (idContent :number) => {
	return (dispatch: (p: any) => {}) => {
		dispatch(setRemoveTaskContent(idContent));
	}
};

export default todoTsReducer;

