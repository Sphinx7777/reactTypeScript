import React from 'react';
import s from './ToDo.module.scss';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, emptyField} from "../Validators/Validators";
import {InputComponent, TextAreaComponent} from "../Validators/ComponentsFromReduxForm";


const maxlength200 = maxLengthCreator(200);
const maxlength30 = maxLengthCreator(30);

interface IProps {
  setShowEditDescription: (status: boolean) => void;
  submitNewDescription: any
}

const ToDoFormForNewDescription: React.FC<IProps & InjectedFormProps<{}, IProps>> =
  (props: IProps & InjectedFormProps<{}, IProps>) => {

    const {handleSubmit, pristine, reset, submitting} = props;

    const submit = handleSubmit(props.submitNewDescription);

    const sendEnter = (event: any) => {
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };

    const closeForm = () => props.setShowEditDescription(false);

    return (
      <div className={s.formWrapper}>

        <form onSubmit={submit} className={s.form} onKeyPress={sendEnter}>
          <div className={s.formName}>
            <Field
              name='name'
              size={30}
              placeholder='Min 1 && Max 30 symbols'
              type='text'
              label='Название'
              component={InputComponent}
              validate={[emptyField, maxlength30]}
            />
          </div>
          <div className={s.formDescription}>
            <Field
              name='description'
              cols='30'
              size={200}
              placeholder='Min 1 && Max 200 symbols'
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
              Обновить
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
  form: 'toDoFormForNewDeskription',
})(ToDoFormForNewDescription)

