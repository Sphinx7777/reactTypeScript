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

  submitEnter = (event: any) => {
    if (event.key === 'Enter') {
      this.props.addTaskIdForNewDate(null)
    }
  };

  changeDate = () => {
    this.props.changeDateTask();
    this.props.addTaskIdForNewDate(null);
  };

  addTaskId = () => this.props.addTaskIdForNewDate(null);

  render() {
    const minDate = new Date();

    return (
      <div className={s.newCalendarWrapper}
           onKeyPress={this.submitEnter}>
        <Calendar
          minDate={minDate}
          onChange={this.onChange}
          value={this.props.dateForPlane}
        />
        <div>
          <div className={s.closeCalendar}
               onClick={this.changeDate}>
            Применить
          </div>
        </div>
        <div className={s.closeCalendar}
             onClick={this.addTaskId}>
          Отменить
        </div>
      </div>
    );
  }
}