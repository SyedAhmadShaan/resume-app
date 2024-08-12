import React from "react";
import Header from "./components/header";
import AboutMe from "./components/about-me";
import { aboutMe, skills, professionalData } from "../../data/resume-data";
import ProfessionalExperience from "./components/professional-experience";

const Page: React.FC = () => {
	return (
		<div>
			<Header />
			<hr />
			<br />
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
		</div>
	);
};

export default Page;