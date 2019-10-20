import React from 'react'
import s from './ModalWindow.module.scss'
import {NewCalendarForSearch} from "../Calendar/NewCalendarForSearch";


interface IProps {

	setDateSearchEditMode: (status: boolean) => void;
	addDateForSearch: (date: Date) => void;
}

export const ModalWindowForSearch = ({addDateForSearch,setDateSearchEditMode}: IProps) => {


	return (
		<>
			<div className={s.modal+' '+s.overlay}>
				<div className={s.modalContent}>
					<NewCalendarForSearch {...{addDateForSearch,setDateSearchEditMode}}/>
				</div>
			</div>
		</>)
};