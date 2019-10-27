import s from './ToDoHeader.module.scss';
import {ModalWindowForSearch} from "../../Others/ModalWindow/ModalWindowForSearch";
import React from "react";
import {Tasks} from "../../Redux/todoTsReducer";

export interface IProps {
  setFilteredTasks: (newTasks:Tasks) => void   ;
  setFilteredTaskSearch: (status: boolean) => void;
  setDateSearchEditMode: (status: boolean) => void;
  dateSearchEditMode: boolean;
  addDateForSearchToString: (date: string | undefined) => void;
  addDateForSearch: (date: Date) => void;
  setNameSearchValue: (value: string) => void;
  tasks: Tasks;
}

export const ToDoHeader = ({setFilteredTasks,setFilteredTaskSearch,tasks,
                                       setDateSearchEditMode,dateSearchEditMode,addDateForSearchToString,
                                       addDateForSearch,setNameSearchValue
                                     }: IProps) => {

  return (
    <div className={s.toDoHeader}>
      <div className={s.taskFilter}>
        <span className={s.filterItem} onClick={() => setFilteredTasks(tasks)}>Все</span>
        <span className={s.filterItem} onClick={() => setFilteredTaskSearch(true)}>Завершенные</span>
        <span className={s.filterItem} onClick={() => setFilteredTaskSearch(false)}>Активные</span>

      </div>
      <div className={s.search}>
        <span className={s.dateSearch} onClick={() => setDateSearchEditMode(true)}>Поиск по дате</span>
        {dateSearchEditMode && <ModalWindowForSearch
          addDateForSearchToString={addDateForSearchToString}
          tasks={tasks}
          setDateSearchEditMode={setDateSearchEditMode}
          addDateForSearch={addDateForSearch}/>}
        <input type="text" className={s.nameSearch} placeholder='Поиск по названию'
               onChange={(event => setNameSearchValue(event.target.value))}
        />
      </div>
    </div>
  )
};

