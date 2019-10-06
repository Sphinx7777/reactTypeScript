// @ts-ignore
import {load} from 'redux-localstorage-simple';



const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';


export type Task = {
	id: number,
	dateForPlane: string,
	name: string | number,
	editStatusDescription: boolean,
	editStatusName: boolean,
	description: string | number,
	status: boolean,
	createDate: string
}


let data: any = load({namespace: 'TasksTs-list'});
let initialState: any = data.toDo;

if (!initialState || !initialState.tasks || !initialState.tasks.length) {
	initialState = {
		tasks: [{
			dateForPlane:"10.17.2019",
			name:"Название",
			description:"Образец",
			id:0.9040531789451176,
			editStatusDescription:false,
			editStatusName:false,
			createDate:"06.10.2019",
			status:false

		}] ,
		editMode: false
	}
}

interface IAction{
	action: object
	type: string
	newTask: Task
}


const todoTsReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state,...state.tasks.unshift({...action.newTask})}
		}
		default:
			return state;
	}

};

const setNewTask = (newTask: Task) => ({type: ADD_NEW_TASK,newTask});


export const addNewTask: (newTask: Task)=> {} =  (newTask: Task) => {
	return async (dispatch: (p: any)=>{}) => {
		await dispatch(setNewTask(newTask));
	}
};

export default todoTsReducer;

