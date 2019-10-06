import React from 'react';
import s from './ToDo.module.scss';
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator,emptyField} from "../Validators/Validators";
import {InputComponent, TextAreaComponent} from "../Validators/ComponentsFromReduxForm";




interface IFormProps {


}

const maxlength200 = maxLengthCreator(200);
const maxlength30 = maxLengthCreator(30);


const ToDoForm: React.FC<IFormProps & InjectedFormProps<{}, IFormProps>> = (props) => {

	const {handleSubmit, pristine, reset, submitting} = props;

	return (
		<div className={s.formWrapper}>
			<form onSubmit={handleSubmit} className={s.form}>

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
						type='text'
						component={TextAreaComponent}
						label='Описание'
						validate={[emptyField,maxlength200]}
					/>
				</div>
				{props.error && <span className={s.formError}>{props.error}</span>}
				<div className={s.formBtn}>
					<button className={s.formSubmitBtn} type="submit" disabled={submitting}>Login</button>
					<button className={s.formClearBtn} type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
				</div>
			</form>
		</div>


	)
};

export default reduxForm({
	form: 'toDoForm',
})(ToDoForm)

/*<div className={s.loginCheck}>
	<Field
name="rememberMe"
type="checkbox"
component={InputComponent}
label="RememberMe"
	/>
	</div>*/

/*onKeyPress={(event) => {
	if (event.key === 'Enter') {
		handleSubmit()
	}
}}*/
