import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoTsReducer from './todoTsReducer';
import {reducer as formReducer} from 'redux-form';
import {save} from 'redux-localstorage-simple';


let reducers = combineReducers({
	toDo: todoTsReducer,
	form: formReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware, save({namespace: 'TasksTs-list'}))
	)));

export default store;
export type TodoState = ReturnType<typeof reducers>