import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-[240px] rounded-3xl bg-blueGray text-white p-8 min-h-full">
      <div className="">
        <Image src='/logo.svg' width={70} height={21} alt="Logo" priority />
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 rounded hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block p-2 rounded hover:bg-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block p-2 rounded hover:bg-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
