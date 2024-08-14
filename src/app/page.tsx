import React from "react";
import Header from "./components/header";
import AboutMe from "./components/about-me";
import { aboutMe, skills, professionalData } from "../../data/resume-data";
import ProfessionalExperience from "./components/professional-experience";

const Page: React.FC = () => {
	return (
		<div className="flex flex-col sm:flex-row min-h-screen">
			{/* Sidebar: Use w-full for small screens and w-1/3 for larger screens */}
			
			
			{/* Main Content: Takes up the remaining space */}
			<div>
				<AboutMe data={aboutMe} skills={skills} />
				<ProfessionalExperience data={professionalData} />
			</div>
		</div>
	);
};

export default Page;
