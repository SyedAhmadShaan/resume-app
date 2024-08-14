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
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-teal flex flex-col items-center w-full sm:w-1/3 h-auto p-6 sm:justify-start">
      <div className="text-white flex flex-col items-center">
        <Image
          priority
          width={300}
          height={300}
          className="rounded-full mb-6"
          src="/photo.png"
          alt="resume-profilephoto.png"
          aria-label="resume-profilephoto.png"
        />
        <h1 className="text-2xl sm:text-3xl mb-2">{name}</h1>
        <h2 className="text-xl sm:text-2xl mb-4">{role}</h2>
        <p className="text-center mb-1 sm:mb-2">{education[0]}</p>
        <p className="text-center mb-1 sm:mb-2">{education[1]}</p>
        <div className="text-white text-center mt-6 sm:mt-8 w-full">
          <h3 className="text-lg sm:text-xl mb-4">CONTACT ME</h3>
          <div className="flex justify-center gap-4">
            <Link
              target="_blank"
              className="icons-contactme"
              href={contactLinks?.[0]}
              aria-label={"email link"}
            >
              <Envelope />
            </Link>

            <Link
              target="_blank"
              className="icons-contactme"
              href={contactLinks?.[1]}
              aria-label={"Linkedin link"}
            >
              <Linkedin />
            </Link>

            <Link
              target="_blank"
              className="icons-contactme"
              href={contactLinks?.[2]}
              aria-label={"Github link"}
            >
              <Github />
            </Link>

            <Link
              target="_blank"
              className="icons-contactme"
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
