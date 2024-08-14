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

			<body className='flex flex-col sm:flex-row'>
				<Sidebar data={personalData} />
				<main className='grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto'>
                    <Header/>
					<div className="divider"></div>
					{children}
				</main>
			</body>
		</html>
	);
}