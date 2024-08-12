import Link from 'next/link';
import Projects from '../my-projects/page';
const Header: React.FC = () => {
  return (
    <header className="bg-yellow text-black font-bold font-sans p-4">
      <nav className="flex items-center justify-between w-full">
        <h1 className="text-3xl text-teal font-sans font-bold">PORTFOLIO</h1>
        <ul className="flex gap-8">
          <li>
            <Link href="/my-projects">Projects</Link>
          </li>
          <li>
            <Link href="/my-certifications">Certifications</Link>
          </li>
          <li>
            <Link href="/my-hobbies">Hobbies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
