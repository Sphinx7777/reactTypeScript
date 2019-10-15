import React from 'react';
import s from './ToDo.module.scss';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator,emptyField} from "../Validators/Validators";
import {InputComponent, TextAreaComponent} from "../Validators/ComponentsFromReduxForm";


const maxlength200 = maxLengthCreator(200);
const maxlength30 = maxLengthCreator(30);
interface IProps {
	submitNewContent: any;
}

const ToDoFormNewContent: React.FC<IProps & InjectedFormProps<{}, IProps>> = (props: IProps & InjectedFormProps<{}, IProps>) => {
	const {handleSubmit, pristine, reset, submitting} = props;

	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit(props.submitNewContent)} className={s.form} onKeyPress={(event) => {
				if (event.key === 'Enter') {
					handleSubmit(event)
				}
			}}>
				<div className={s.formName}>
					<Field
						name='name'
						type='text'
						component={InputComponent}
						label='Название'
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
				</div>
			</form>
		</div>
	)
};

export default reduxForm<{}, IProps>({
	form: 'toDoFormNewContent',
})(ToDoFormNewContent)

