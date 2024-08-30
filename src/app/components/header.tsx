import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-teal text-yellow font-display font-bold w-full sm:w-2/3 mx-auto p-4 sm:p-6 md:p-8 shadow-lg rounded-lg overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link href="/" className="hover:text-white transition-colors text-center text-xl">
          Home
        </Link>
        <Link href="/my-projects" className="hover:text-white transition-colors text-center text-xl">
          Projects
        </Link>
        <Link href="/my-certifications" className="hover:text-white transition-colors text-center text-xl">
          Certifications
        </Link>
        <Link href="/my-hobbies" className="hover:text-white transition-colors text-center text-xl">
          Hobbies
        </Link>
      </div>
    </header>
  );
};

export default Header;
