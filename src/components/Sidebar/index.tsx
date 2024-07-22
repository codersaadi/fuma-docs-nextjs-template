'use client';

import Link from "next/link";


const Sidebar = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
  return (
    <aside
      className={`fixed bg-black text-white top-0 left-0 w-full md:w-64 h-screen z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <nav className="mt-16 p-4">
        <Link href="/docs/intro" className="block mb-4">
          Introduction
        </Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
