// @ts-ignore
import {load} from 'redux-localstorage-simple';


const ADD_NEW_TASK = '/todoReducer___ADD_NEW_TASK';



let data: any = load({namespace: 'TasksTs-list'});
let initialState: any=data.toDo;

if (!initialState || !initialState.tasks || !initialState.tasks.length) {
	initialState = {
		tasks: [{
			id: 1,
			name: 'Образец',
			editStatusDescription: false,
			editStatusName: false,
			description: 'Описание задачи',
			status: false,
			createDate: '01 января 2000 г. 00:00',
			dateForPlane: '24 мая 2019 г. 11:32'
		}],
	}
}

interface IAction{
	action: object
	type: string
	task: object
}


const todoTsReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ADD_NEW_TASK: {
			return {...state, ...state.tasks.unshift({...action.task})}
		}
		default:
			return state;
	}

};

const setNewTask = (task: object) => ({type: ADD_NEW_TASK, task});


export const addNewTask = (task: object) => {
	return (dispatch: any) => {
		dispatch(setNewTask(task));
	}
};

export default todoTsReducer;

