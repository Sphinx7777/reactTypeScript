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
	setStatusCalendar: (showCalendar: boolean) => void;
	dateForPlane: Date;
	setDateForPlane: (dateForPlane: any) => void;
}


export class NewCalendar extends Component<CalendarProps> {



	onChange = (date: object): void => this.props.setDateForPlane(date);

	render() {
		const minDate=new Date();

		return (
			<div className={s.calendarWrapper}>
				<Calendar
					minDate={minDate}
					onClickDay={() => setTimeout(()=>this.props.setStatusCalendar(false),200)}
					onChange={this.onChange}
					value={this.props.dateForPlane}
				/>
			</div>
		);
	}
}