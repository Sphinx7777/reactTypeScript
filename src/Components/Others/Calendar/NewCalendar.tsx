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

  closeCalendar = () => this.props.setStatusCalendar(false);

  submitEnter = (event: any) => {
    if (event.key === 'Enter') {
      this.props.setStatusCalendar(false)
    }
  };

  render() {
    const minDate = new Date();

    return (
      <div className={s.calendarWrapper}
           onKeyPress={this.submitEnter}>
        <Calendar
          minDate={minDate}
          onChange={this.onChange}
          value={this.props.dateForPlane}
        />
        <div className={s.closeCalendar}
             onClick={this.closeCalendar}>
          Применить
        </div>
        <div className={s.closeCalendar}
             onClick={this.closeCalendar}>
          Отменить
        </div>
      </div>
    );
  }
}