'use client';

import { Button } from 'primereact/button';
import ThemeSwitch from '../ThemeSwitcher';

const Header = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <header className="fixed top-0 w-full h-16 bg-black text-white flex items-center justify-between px-4 shadow-md z-50">
      <div className="text-2xl font-bold">codestacklab</div>
    <div className="flex items-center gap-2">
      <ThemeSwitch />
    <Button
        icon="pi pi-bars"
        className="md:hidden"
        onClick={onOpen}
        aria-label="Open sidebar"
      />
    </div>
    </header>
  );
};

export default Header;
