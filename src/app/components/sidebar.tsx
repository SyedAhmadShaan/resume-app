import Image from "next/image";
import React from "react";
import { Envelope, Linkedin, Github, Whatsapp } from "./icons";
import Link from "next/link";

type SidebarProps = {
	data: {
		name: string;
		role: string;
		education: string[];
		contactLinks: string[];
	};
};
const Sidebar = ({ data }: SidebarProps) => {
	const { name  , role, education, contactLinks } = data;

	return (
		<div className='bg-teal flex flex-col content-between w-full h-auto sm:justify-start sm:w-1/3'>
			<div className='text-white flex flex-col p-10 items-center'>
				<Image
					priority
					width={300}
					height={300}
					className='rounded-full h-full mb-6'
					src='/photo.png'
					alt='resume-profilephoto.png'
					aria-label='resume-profilephoto.png'
				/>
				<h1 className='mb-2'>{name}</h1>
				<h2 className='mb-8'>{role}</h2>
				<p className='mb-2'>{education[0]}</p>
				<p className='mb-2'>{education[1]}</p>
				<div className='text-white text-center mb-4 mt-4 sm:mt-8'>
					<h3 className='mb-2'> CONTACT ME</h3>
					<div className='flex flex-row justify-evenly gap-2'>
						<Link target="_blank"
							className='icons-contactme'
							href={contactLinks?.[0]}
							aria-label={"email link"}
						>
							<Envelope />
						</Link>
						
						<Link target="_blank"
							className='icons-contactme'
							href={contactLinks?.[1]}
							aria-label={"Linkedin link"}
						>
							<Linkedin />
						</Link>
						
						<Link target="_blank"
							className='icons-contactme'
							href={contactLinks?.[2]}
							aria-label={"Github link"}
						>
							<Github />
						</Link>

						<Link target="_blank"
							className='icons-contactme'
							href={contactLinks?.[3]}
							aria-label={"whatsapp link"}
						>
							<Whatsapp />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;