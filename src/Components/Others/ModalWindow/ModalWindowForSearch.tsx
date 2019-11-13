import React from 'react'
import s from './ModalWindow.module.scss'
import {NewCalendarForSearch} from "../Calendar/NewCalendarForSearch";
import {Tasks} from "../../Redux/todoTsReducer";


interface IProps {
  setDateSearchEditMode: (status: boolean) => void;
  addDateForSearch: (date: Date) => void;
  addDateForSearchToString: (date: string | undefined) => void;
  tasks: Tasks;
}

export const ModalWindowForSearch = (
  {
    addDateForSearchToString,
    tasks, addDateForSearch,
    setDateSearchEditMode
  }: IProps) => {

  const closeEditModeSearch = () => setDateSearchEditMode(false);

  return (
    <>
      <div className={s.modal + ' ' + s.overlay}
           onClick={closeEditModeSearch}>
        <div className={s.modalContent}>
          <NewCalendarForSearch {...
            {
              addDateForSearchToString,
              tasks,
              addDateForSearch,
              setDateSearchEditMode
            }}/>
        </div>
      </div>
    </>)
};