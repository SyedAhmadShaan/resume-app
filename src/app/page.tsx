import React from "react";
import Header from "./components/header";
import AboutMe from "./components/about-me";
import { aboutMe, skills, professionalData } from "../../data/resume-data";
import ProfessionalExperience from "./components/professional-experience";

const Page: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row min-h-screen py-10">
			<div>
				<AboutMe data={aboutMe} 
				skills={skills} />
				<span/>
				<ProfessionalExperience data={professionalData} />
			</div>
		</div>
	);
};

export default Page;