import React from 'react'
import s from './ModalWindow.module.scss'
import {NewCalendar} from "../Calendar/NewCalendar";


interface IProps {
  setStatusCalendar: (showCalendar: boolean) => void;
  dateForPlane: Date;
  setDateForPlane: (dateForPlane: any) => void;

}

export const ModalWindow = (
  {
    setStatusCalendar,
    dateForPlane,
    setDateForPlane
  }: IProps) => {

  return (
    <>
      <div className={s.modal + ' ' + s.overlay}>
        <div className={s.modalContent}>
          <NewCalendar {...
            {
              setStatusCalendar,
              setDateForPlane,
              dateForPlane
            }}/>
        </div>
      </div>
    </>)
};