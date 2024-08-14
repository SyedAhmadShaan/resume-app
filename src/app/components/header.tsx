import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-grey text-black flex flex-col sm:flex-row w-full font-bold font-sans p-4 sm:p-8 mb-10">
      <div className="flex flex-col sm:flex-row md:gap-24 sm:gap-8 w-full justify-evenly sm:justify-start">
        <Link href="/" className="hover:text-teal transition-colors">
          Home
        </Link>
        <Link href="/my-projects" className="hover:text-teal transition-colors">
          Projects
        </Link>
        <Link href="/my-certifications" className="hover:text-teal transition-colors">
          Certifications
        </Link>
        <Link href="/my-hobbies" className="hover:text-teal transition-colors">
          Hobbies
        </Link>
      </div>
    </header>
  );
};

export default Header;
