// @ts-ignore
import {load} from 'redux-localstorage-simple';


const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';



let data: any = load({namespace: 'TasksTs-list'});
let initialState: any=data.toDo;

if (!initialState || !initialState.tasks || !initialState.tasks.length) {
	initialState = {
		tasks: [{
			id: 1,
			dateForPlane: '24 мая 2019 г. 11:32',

			name: 'Образец',
			editStatusDescription: false,
			editStatusName: false,
			description: 'Описание задачи',
			status: false,
			createDate: '01 января 2000 г. 00:00',

		}],
		editMode: false
	}
}

interface IAction{
	action: {}
	type: string
	task: {}
	status: boolean
}


const todoTsReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, editMode:action.status}
		}
		default:
			return state;
	}

};

const setNewTask = (status: boolean) => ({type: ADD_NEW_TASK,status});


export const addNewTask: (s: boolean)=> any = (status: boolean) => {
	return (dispatch: any) => {
		dispatch(setNewTask(status));
	}
};

export default todoTsReducer;

