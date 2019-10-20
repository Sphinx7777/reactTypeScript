import React, {Component} from 'react';
import Calendar from 'react-calendar';
import s from './NewCalendar.module.scss';
type OnChangeDateCallback = (date: Date | Date[]) => void
type DateCallback = (date: Date) => void

interface CalendarProps {
	minDate?: Date;
	onClickDay?: DateCallback;
	onChange?: OnChangeDateCallback;
	value?: Date | Date[] | object | null;
	setDateSearchEditMode: (status: boolean) => void;
	addDateForSearch: (date: Date) => void;
}


export class NewCalendarForSearch extends Component<CalendarProps> {



	onChange = (date: any): void =>{
		this.props.addDateForSearch(date);
		this.props.setDateSearchEditMode(false);
	};

	render() {
		const minDate=new Date();

		return (
			<div className={s.calendarWrapper}>
				<Calendar
					minDate={minDate}
					onChange={this.onChange}
					value={new Date()}
				/>
				<div className={s.closeCalendar} onClick={()=>{this.props.setDateSearchEditMode(false)}}>Отменить</div>
			</div>
		);
	}
}