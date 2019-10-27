import React from "react";
import s from './ValidatorsComponents.module.scss';


type ComponentFromForm = {label?: string,size?: number | undefined,autoFocus?: boolean,type: string,placeholder?: string,input: {},
	meta: {error: string,warning: string,touched: boolean},rows?: number,cols?: number}


export const InputComponent = (
	{input,label,size,type,placeholder,autoFocus,meta: {error, warning, touched}}: ComponentFromForm) => {
	return (
		<>
			<div className={s.inputLabel + ' ' + (touched && error ? s.errorInputLabel : '')}>{touched && error ? error:label}</div>
			<input className={s.inputField + ' ' + (touched && error ? s.errorInputField : '')}
						 {...input} placeholder={placeholder} autoFocus={autoFocus}  maxLength={size} type={type}  />
			{/*{touched &&
			((error && <div className={s.inputError}>{error}</div>) ||
				(warning && <div className={s.inputWarning}>{warning}  </div>))}*/}
		</>
	)
};

export const TextAreaComponent = (
	{input,label,rows,placeholder,size,cols,meta: {error, warning, touched}}: ComponentFromForm) => {
	return (
		<>
			<div className={s.inputLabel + ' ' + (touched && error ? s.errorInputLabel : '')}>{touched && error ? error:label}</div>
			<textarea className={s.areaField + ' ' + (touched && error ? s.errorAreaField : '')}
								{...input} placeholder={placeholder} maxLength={size}  rows={rows} cols={cols} />
		{/*	{touched &&
			((error && <div className={s.areaError}>{error}</div>) ||
				(warning && <div className={s.areaWarning}>{warning}</div>))}*/}
		</>
	)
};

