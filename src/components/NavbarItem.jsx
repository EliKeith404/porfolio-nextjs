import Link from 'next/link';
import React from 'react';

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

export default NavbarItem;
