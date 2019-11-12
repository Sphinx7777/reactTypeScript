import React, {Component} from 'react';
import Calendar from 'react-calendar';
import s from './NewCalendar.module.scss';
import {Task, TaskContent, Tasks} from "../../Redux/todoTsReducer";

type OnChangeDateCallback = (date: Date | Date[]) => void
type DateCallback = (date: Date) => void

interface CalendarProps {
  minDate?: Date;
  onClickDay?: DateCallback;
  onChange?: OnChangeDateCallback;
  value?: Date | Date[] | object | null;
  setDateSearchEditMode: (status: boolean) => void;
  addDateForSearch: (date: Date) => void;
  addDateForSearchToString: (date: string | undefined) => void;
  tasks: Tasks;
}


export class NewCalendarForSearch extends Component<CalendarProps> {


  onChange = (date: any): void => {
    this.props.addDateForSearch(date);
    this.props.setDateSearchEditMode(false);
  };
  onChangeDate = (date: string | undefined): void => {
    this.props.addDateForSearchToString(date);
    this.props.setDateSearchEditMode(false);
  };

  closeCalendar = () => this.props.setDateSearchEditMode(false);

  render() {

    return (
      <div className={s.calendarWrapper} onClick={(event) => event.stopPropagation()}>
        <Calendar
          onChange={this.onChange}
          value={new Date()}
        />
        <div className={s.closeCalendar}
             onClick={this.closeCalendar}>Отменить
        </div>
        <div className={s.activeDate}>
          {
            this.props.tasks.map((t: Task) =>
              <div className={s.dateItem}
                   onClick={() => this.onChangeDate(t.dateForPlane)} key={t.id}>
							<span>
								Дата : <b>{t.dateForPlane}</b> 
							</span>
                <span>
								Всего : <b>{t.taskContent.length}</b> 
							</span>
                <span>
								Завершено : <b>{t.taskContent.filter((tc: TaskContent) => tc.completed).length}</b> 
							</span>
              </div>)
          }
        </div>
      </div>
    );
  }
}