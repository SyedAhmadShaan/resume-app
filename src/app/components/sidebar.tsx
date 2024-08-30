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
    <aside className="bg-teal text-white w-full sm:w-1/3 p-6 sm:p-8 border-r border-teal-700 shadow-md">
      <div className="flex flex-col items-center">
        <Image
          priority
          width={270}
          height={270}
          className="rounded-full mb-6 border-4"
          src="/photo.png"
          alt="Profile Photo"
          aria-label="Profile Photo"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl sm:text-2xl mb-4">{role}</h2>
        <div className="text-center mb-6">
          {education.map((item, index) => (
            <p key={index} className="mb-1">{item}</p>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Me</h3>
          <div className="flex gap-4 justify-center">
            {contactLinks.map((link, index) => {
              const icons = [<Envelope key="email" />, <Linkedin key="linkedin" />, <Github key="github" />, <Whatsapp key="whatsapp" />];
              return (
                <Link
                  key={index}
                  target="_blank"
                  className="text-white hover:text-yellow-300 transition-colors"
                  href={link}
                  aria-label={`Contact link ${index}`}
                >
                  {icons[index]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
