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
	addTaskIdForNewDate: (show: null | number) => void;
	dateForPlane: Date;
	changeDateTask: any;
	setDateForPlane: (dateForPlane: any) => void;
}


export class NewCalendarForNewDate extends Component<CalendarProps> {



	onChange = (date: object): void => this.props.setDateForPlane(date);

	render() {
		const minDate=new Date();

		return (

			<div className={s.newCalendarWrapper} onKeyPress={(event) => {
				if (event.key === 'Enter') {
					this.props.addTaskIdForNewDate(null)
				}
			}}>
				<Calendar
					minDate={minDate}
					onChange={this.onChange}
					value={this.props.dateForPlane}
				/>
				<div>
					<div className={s.closeCalendar} onClick={()=>{
						this.props.changeDateTask();
						this.props.addTaskIdForNewDate(null);
					}}>Применить</div>
				</div>
				<div className={s.closeCalendar} onClick={()=>{
					this.props.addTaskIdForNewDate(null);
				}}>Отменить</div>
				</div>



		);
	}
}