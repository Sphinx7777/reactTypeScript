import s from './ToDoHeader.module.scss';
import {ModalWindowForSearch} from "../../Others/ModalWindow/ModalWindowForSearch";
import React from "react";
import {Tasks} from "../../Redux/todoTsReducer";

export interface IProps {
  setFilteredTasks: (newTasks: Tasks) => void;
  setFilteredTaskSearch: (status: boolean) => void;
  setDateSearchEditMode: (status: boolean) => void;
  dateSearchEditMode: boolean;
  addDateForSearchToString: (date: string | undefined) => void;
  addDateForSearch: (date: Date) => void;
  setNameSearchValue: (value: string) => void;
  tasks: Tasks;
}

export const ToDoHeader = (
  {
    setFilteredTasks,
    setFilteredTaskSearch,
    tasks,
    setDateSearchEditMode,
    dateSearchEditMode,
    addDateForSearchToString,
    addDateForSearch,
    setNameSearchValue
  }: IProps) => {

  const showAllTask = () => setFilteredTasks(tasks);
  const showCompletedTask = () => setFilteredTaskSearch(true);
  const showActiveTask = () => setFilteredTaskSearch(false);

  const openDateSearch = () => setDateSearchEditMode(true);

  const onChange = (event: any) => {
    setNameSearchValue(event.target.value)
  };

  return (
    <div className={s.toDoHeader}>
      <div className={s.taskFilter}>
        <span className={s.filterItem}
              onClick={showAllTask}>
          Все
        </span>
        <span className={s.filterItem}
              onClick={showCompletedTask}>
          Завершенные
        </span>
        <span className={s.filterItem}
              onClick={showActiveTask}>
          Активные
        </span>
      </div>
      <div className={s.search}>
        <span className={s.dateSearch}
              onClick={openDateSearch}>
          Поиск по дате
        </span>
        {
          dateSearchEditMode && <ModalWindowForSearch {...
            {
              addDateForSearchToString,
              tasks,
              setDateSearchEditMode,
              addDateForSearch
            }}/>
        }
        <input className={s.nameSearch}
               type="text"
               placeholder='Поиск по названию'
               onChange={onChange}
        />
      </div>
    </div>
  )
};

