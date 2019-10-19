// @ts-ignore
import {load} from 'redux-localstorage-simple';
/*import * as _ from 'lodash'*/


const ADD_NEW_TASK: string = '/todoReducer___ADD_NEW_TASK';
const ADD_NEW_TASK_CONTENT: string = '/todoReducer___ADD_NEW_TASK_CONTENT';
const TOGGLE_SHOW_TASK_CONTENT: string = '/todoReducer___TOGGLE_SHOW_TASK_CONTENT';
const REMOVE_TASK_CONTENT: string = '/todoReducer___REMOVE_TASK_CONTENT';
const REMOVE_ALL_TASK_CONTENT: string = '/todoReducer___REMOVE_ALL_TASK_CONTENT';
const SET_STATUS_COMPLETED_TASK: string = '/todoReducer___SET_STATUS_COMPLETED_TASK';
const REMOVE_COMPLETED_TASK_TO_CONTENT: string = '/todoReducer___REMOVE_COMPLETED_TASK_TO_CONTENT';
const SET_NEW_DATTE_FOR_TASK: string = '/todoReducer___SET_NEW_DATTE_FOR_TASK';
const NEW_NAME_AND_DESCRIPTION: string = '/todoReducer___NEW_NAME_AND_DESCRIPTION';

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
    completed: boolean | undefined,
    createDate: string
  }]
}]

export type TaskContent = {
  idContent: number,
  name: string | number,
  description: string | number,
  editStatusDescription: boolean,
  editStatusName: boolean | undefined,
  completed: boolean | undefined,
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
    completed: boolean | undefined,
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
        completed: false,
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
  newTaskContent: Task
  idContent: number | undefined
  payload: any
  status: boolean | undefined
  id: number | undefined | null
  date: string | undefined
  name:string
  description:string
}

let removeByAttr = function (arr: any, attr: any, value: any) {
  let i = arr.length;
  while (i--) {
    if (arr[i]
      && arr[i].hasOwnProperty(attr)
      && (arguments.length > 2 && arr[i][attr] === value)) {
      arr.splice(i, 1);
    }
  }
  return arr;
};


const todoTsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NEW_TASK: {
      return {...state, ...state.tasks.unshift({...action.newTask})}
    }
    case TOGGLE_SHOW_TASK_CONTENT: {
      return {
        ...state, ...state.tasks = state.tasks.map((t: Task) => {
          if (t.id === action.id) {
            t.editStatus = action.status;
          }
          return t;
        })
      }
    }
    case SET_NEW_DATTE_FOR_TASK: {
      return {
        ...state, ...state.tasks = state.tasks.map((t: Task) => {
          if (t.id === action.id) {
            t.dateForPlane = action.date;
          }
          return t;
        })
      }
    }
    case ADD_NEW_TASK_CONTENT: {
      return {
        ...state, ...state.tasks.map((t: Task) => {
          if (t.id === action.payload.idContent) {
            t.taskContent.unshift(action.payload.newTaskContent);
          }
          return t;
        })
      }
    }
    case REMOVE_TASK_CONTENT: {
      const content = state.tasks.map((t: Task) => {
        removeByAttr(t.taskContent, 'idContent', action.idContent);
        return t.taskContent
      });
      return {
        ...state, ...state.tasks = state.tasks.filter((t: Task) => t.taskContent), ...state.tasks.taskContent = content
      }
    }
    case REMOVE_ALL_TASK_CONTENT: {
      return {
        ...state, ...state.tasks = state.tasks.filter((t: Task) => t.id !== action.id)
      }
    }
    case SET_STATUS_COMPLETED_TASK: {
      return {
        ...state, ...state.tasks = state.tasks.map((t: Task) => {
          t.taskContent.map((tc: TaskContent) => {
            if (tc.idContent === action.id) {
              tc.completed = action.status;
              return tc;
            }
            return tc
          });
          return t;
        })
      }
    }
    case NEW_NAME_AND_DESCRIPTION: {
      return {
        ...state, ...state.tasks = state.tasks.map((t: Task) => {
          t.taskContent.map((tc: TaskContent) => {
            if (tc.idContent === action.idContent) {
              tc.name = action.name;
              tc.description = action.description;
              return tc;
            }
            return tc
          });
          return t;
        })
      }
    }
    case REMOVE_COMPLETED_TASK_TO_CONTENT: {
      let content = state.tasks.filter((t: Task) => t.id === action.id);
      let newContent = content[0].taskContent.filter((tc: TaskContent) => tc.completed === false);
      return {
        ...state, ...state.tasks = state.tasks.map((t: Task) => {
            if (t.id === action.id) {
              t.taskContent = newContent;
              return t
            }
            return t
          }
        )
      }
    }
    default:
      return state;
  }

};

const setNewTask = (newTask: Task) => ({type: ADD_NEW_TASK, newTask});
const setToggleShowTaskContent = (idAndStatus: any) => ({type: TOGGLE_SHOW_TASK_CONTENT, ...idAndStatus});
const setNewDateForTask = (idAndDate: any) => ({type: SET_NEW_DATTE_FOR_TASK, ...idAndDate});
const setNewTaskContent = (idContent: number | null, newTaskContent: TaskContent) => ({
  type: ADD_NEW_TASK_CONTENT,
  payload: {idContent, newTaskContent}
});
const setRemoveTaskContent = (idContent: number) => ({type: REMOVE_TASK_CONTENT, idContent});
const setRemoveAllTaskContent = (id: number | undefined) => ({type: REMOVE_ALL_TASK_CONTENT, id});
const setStatusCompletedTask = (idAndStatus: any) => ({type: SET_STATUS_COMPLETED_TASK, ...idAndStatus});
const setRemoveCompletedTaskToContent = (id: number | undefined) => ({type: REMOVE_COMPLETED_TASK_TO_CONTENT, id});
const setChangeNameAndDescription = (newContent: any) => ({type: NEW_NAME_AND_DESCRIPTION, ...newContent});


export const addNewTask: (newTask: Task) => {} = (newTask: Task) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setNewTask(newTask));
  }
};
export const toggleShowTaskContent: (id: number | undefined, status: boolean | undefined) => {} = (id: number | undefined, status: boolean | undefined) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setToggleShowTaskContent({id, status}));
  }
};
export const newDateForTask: (id: number | null, date: string | undefined) => {} = (id: number | null, date: string | undefined) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setNewDateForTask({id, date}));
  }
};
export const addNewTaskContent: (idContent: number | null, newTaskContent: TaskContent) => {} = (idContent: number | null, newTaskContent: TaskContent) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setNewTaskContent(idContent, newTaskContent));
  }
};
export const removeTaskContent: (idContent: number) => {} = (idContent: number) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setRemoveTaskContent(idContent));
  }
};
export const removeAllTaskContent: (id: number | undefined) => {} = (id: number | undefined) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setRemoveAllTaskContent(id));
  }
};
export const toSetStatusCompletedTask: (id: number | undefined, status: boolean | undefined) => {} = (id: number | undefined, status: boolean | undefined) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setStatusCompletedTask({id, status}));
  }
};
export const removeCompletedTaskToContent: (id: number | undefined) => {} = (id: number | undefined) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setRemoveCompletedTaskToContent(id));
  }
};
export const changeNameAndDescription: (idContent: number | null | undefined,name:string,description:string) => {} = (idContent: number | null | undefined,name:string,description:string) => {
  return (dispatch: (p: any) => {}) => {
    dispatch(setChangeNameAndDescription({idContent,name,description}));
  }
};

export default todoTsReducer;

