import Sidebar from "./components/sidebar";
import "./globals.css";
import { personalData } from "../../data/resume-data";
import Header from "./components/header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="flex flex-col sm:flex-row">
				<Sidebar data={personalData} />
				
				<main className="grow-full w-full sm:basis-2/3 ml-auto">
					
					<div className="flex flex-col sm:flex-row sm:basis-2/3 ml-auto">
						<Header />
					</div>
					
					<div className="px-4 sm:px-8">
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
