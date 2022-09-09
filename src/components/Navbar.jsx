import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTheme } from 'next-themes';

import ConnectBtns from './ConnectBtns';
import useWindow from '../hooks/useWindow';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const window = useWindow();

  // Once the page loads, allow theme to begin rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  // To prevent hydration errors/mismatch, only render text when mounted
  const renderThemeText = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return 'light';
    } else {
      return 'dark';
    }
  };

  const handleChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={window.scrollY >= 90 ? 'nav shadow-xl' : 'nav'}>
      {/* Desktop Nav */}
      <header className="flex justify-between items-center w-full h-full px-2">
        <div className="px-5">
          <Link href="/">
            <a>
              <Image
                className="cursor-pointer"
                src="/assets/ek-logo.png"
                alt="Eli's Logo"
                width="48"
                height="48"
              />
            </a>
          </Link>
        </div>
        {/* Nav Elements */}
        <nav className="flex items-center h-full min-h-full">
          <ul className="hidden md:flex h-full">
            <NavbarItem href={'/'}>Home</NavbarItem>
            <NavbarItem href={'/#about'}>About</NavbarItem>
            <NavbarItem href={'/#skills'}>Skills</NavbarItem>
            <NavbarItem href={'/#projects'}>Projects</NavbarItem>
            <NavbarItem href={'/#contact'}>Contact</NavbarItem>
            <li
              className="group h-full flex items-center"
              onClick={() => handleChangeTheme()}
            >
              <span className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
                {renderThemeText() || 'Theme'}
              </span>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden pr-4">
            <AiOutlineMenu size={25} />
          </div>
        </nav>
      </header>
      {/* Mobile Nav Menu */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <header
          className={
            nav
              ? 'nav-mobile right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] dark:bg-gray-800'
              : 'nav-mobile right-[-100%] top-0'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/ek-logo.png"
                alt="Eli's Logo"
                width="48"
                height="48"
              />
              <div onClick={handleNav} className="btn-round p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something amazing
              </p>
            </div>
          </div>
          {/* Nav Elements */}
          <nav>
            <ul className="uppercase">
              <NavbarItem href="/" isMobile={true} callback={handleNav}>
                Home
              </NavbarItem>
              <NavbarItem href="/#about" isMobile={true} callback={handleNav}>
                About
              </NavbarItem>
              <NavbarItem href="/#skills" isMobile={true} callback={handleNav}>
                Skills
              </NavbarItem>
              <NavbarItem
                href="/#projects"
                isMobile={true}
                callback={handleNav}
              >
                Projects
              </NavbarItem>
              <NavbarItem href="/#contact" isMobile={true} callback={handleNav}>
                Contact
              </NavbarItem>
              <li className="py-4 text-sm" onClick={handleChangeTheme}>
                {renderThemeText() || 'Theme'}
              </li>
            </ul>
            <div className="pt-[5rem]">
              <p className="uppercase tracking-widest text-center text-[#5651e5] dark:text-[#5651e5]">
                Connect With Me
              </p>
              <ConnectBtns size="p-3" />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;

///////////////////////////
// Nav Item Subcomponent
const NavbarItem = ({ href, children, isMobile, callback }) => {
  return (
    <>
      {!isMobile ? (
        // Desktop
        <Link href={href}>
          <a className="group h-full flex items-center">
            <li className="mx-5 py-1 border-b-2 border-transparent group-hover:border-[#5451e5] uppercase text-sm">
              {children}
            </li>
          </a>
        </Link>
      ) : (
        // Mobile
        <Link href={href}>
          <a>
            <li className="py-4 text-sm" onClick={callback}>
              {children}
            </li>
          </a>
        </Link>
      )}
    </>
  );
};
