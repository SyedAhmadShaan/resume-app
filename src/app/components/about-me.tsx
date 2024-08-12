import React from 'react'
import { useId } from 'react'
import Skills, {SkillsProps} from './skills'


type aboutMeProps = {
    data: {    
        title: string;
        body: string[]
}
skills: SkillsProps["data"];
};


const AboutMe = ({ data, skills }: aboutMeProps) => {
	const { title, body } = data;
	const id = useId();
	return (
		<section>
			<h2 className='mb-8'> {title}</h2>
			{body?.map((el, i) => (
				<p key={`${id}_${i}`} className='mb-6'>
					{el}
				</p>
			))}
			<Skills data={skills} />
		</section>
	);
};

export default AboutMe;