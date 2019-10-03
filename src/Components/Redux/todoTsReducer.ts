// @ts-ignore
import {load} from 'redux-localstorage-simple';



const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';

type Initial = {
  tasks: [{
  id: number,
  dateForPlane: string,
  name: string | number,
  editStatusDescription: boolean,
  editStatusName: boolean,
  description: string | number,
  status: boolean,
  createDate: string,
}],
  editMode: boolean
}


let data: any = load({namespace: 'TasksTs-list'});
let initialState: Initial = data.toDo;

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

		}] ,
		editMode: false
	}
}

interface IAction{
	action: {}
	type: string
	task: Initial
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


export const addNewTask: (s: boolean)=> {} =  (status: boolean) => {
	return async (dispatch: (p: any)=>{}) => {
		await dispatch(setNewTask(status));
	}
};

export default todoTsReducer;

