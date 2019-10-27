import React from 'react'
import s from './Resume.module.scss'
import resume from './Files/resumeOnishchenkoSergei.pdf'
import coverLetter from './Files/coverLetterOnishchenkoSergei.pdf'


const Resume = () => {

	return (
		<div className={s.resumeWrapper}>
			<div className={s.resume}>
				<embed src={resume} width="800" height="1190" type="application/pdf"/>
				<embed src={coverLetter} width="800" height="1190" type="application/pdf"/>
			</div>
		</div>
	);
};
export default Resume;