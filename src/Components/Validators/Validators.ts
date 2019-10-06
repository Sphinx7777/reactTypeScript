export const emptyField =(value: string) => {
	if(value && value.length>=1) return undefined;
	return 'Required field'
};

export const maxLengthCreator=(maxLength: number) =>(values: string) => {
	if(values && values.length>maxLength) return `Max ${maxLength} symbols`;
	return undefined;
};

export const minLengthCreator=(minLength: number) =>(values: string) => {
	if(values && values.length<minLength) return `Minimum ${minLength} symbols`;
	return undefined;
};