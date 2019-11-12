import React from 'react';
import s from './ToDo.module.scss';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, emptyField} from "../Validators/Validators";
import {InputComponent, TextAreaComponent} from "../Validators/ComponentsFromReduxForm";


const maxlength200 = maxLengthCreator(200);
const maxlength30 = maxLengthCreator(30);

interface IProps {
  dateForPlaneString?: string;
  setStatusAddTask: any;
  setStatusCalendar: any;
}

const ToDoForm: React.FC<IProps & InjectedFormProps<{}, IProps>> =
  (props: IProps & InjectedFormProps<{}, IProps>) => {

    const {handleSubmit, pristine, reset, submitting} = props;

    const sendEnter = (event: any) => {
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };

    const closeForm = () => {
      props.setStatusAddTask(null);
      props.setStatusCalendar(false);
    };

    return (
      <div className={s.formWrapper}>
        <div className={s.formDate}>
          <span>
            {props.dateForPlaneString}
          </span>
        </div>
        <form className={s.form}
              onSubmit={handleSubmit}
              onKeyPress={sendEnter}>
          <div className={s.formName}>
            <Field
              name='name'
              placeholder='Min 1 && Max 30 symbols'
              size={30}
              type='text'
              label='Название'
              component={InputComponent}
              validate={[emptyField, maxlength30]}
            />
          </div>
          <div className={s.formDescription}>
            <Field
              name='description'
              placeholder='Min 1 && Max 200 symbols'
              cols='30'
              size={200}
              label='Описание'
              component={TextAreaComponent}
              validate={[emptyField, maxlength200]}
            />
          </div>
          {props.error &&
					<span className={s.formError}>
					{props.error}
				</span>}
          <div className={s.formBtn}>
            <button className={s.formSubmitBtn}
                    type="submit"
                    disabled={submitting}>
              Добавить
            </button>
            <button className={s.formClearBtn}
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}>
              Очистить
            </button>
            <button className={s.formCancelBtn}
                    type="button"
                    onClick={closeForm}>
              Отменить
            </button>
          </div>
        </form>
      </div>
    )
  };

export default reduxForm<{}, IProps>({
  form: 'toDoForm',
})(ToDoForm)
