import React from 'react';
import s from './ToDo.module.scss';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator,emptyField} from "../Validators/Validators";
import {InputComponent, TextAreaComponent} from "../Validators/ComponentsFromReduxForm";


const maxlength200 = maxLengthCreator(200);
const maxlength30 = maxLengthCreator(30);
interface IProps {
	submitNewContent: any;
	setTaskIdForNewContent: any;
	dateForNewContent: string;
}

const ToDoFormNewContent: React.FC<IProps & InjectedFormProps<{}, IProps>> = (props: IProps & InjectedFormProps<{}, IProps>) => {
	const {handleSubmit, pristine, reset, submitting} = props;
	const submit=handleSubmit(props.submitNewContent);

	return (
		<div className={s.formWrapper}>
			<form onSubmit={submit} className={s.form} onKeyPress={(event) => {
				if (event.key === 'Enter') {
				  event.preventDefault();
          submit();
				}}}>
				<div className={s.taskDate}>{props.dateForNewContent}</div>
				<div className={s.formName}>
					<Field
						name='name'
						type='text'
						component={InputComponent}
						label='Название'
						autoFocus={true}
						validate={[emptyField, maxlength30]}
					/>
				</div>
				<div className={s.formDescription}>
					<Field
						name='description'
						cols='30'
						component={TextAreaComponent}
						label='Описание'
						validate={[emptyField,maxlength200]}
					/>
				</div>
				{props.error && <span className={s.formError}>{props.error}</span>}
				<div className={s.formBtn}>
					<button className={s.formSubmitBtn} type="submit" disabled={submitting}>Добавить</button>
					<button className={s.formClearBtn} type="button" disabled={pristine || submitting} onClick={reset}>Очистить</button>
					<button className={s.formCancelBtn} type="button"  onClick={()=>props.setTaskIdForNewContent(null)}>Отменить</button>
				</div>
			</form>
		</div>
	)
};

export default reduxForm<{}, IProps>({
	form: 'toDoFormNewContent',
})(ToDoFormNewContent)

