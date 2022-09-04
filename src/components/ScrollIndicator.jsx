import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';

const ScrollIndicator = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleVisible);
  }, []);

  return (
    <>
      {visible && (
        <div className="bottom-0 fixed flex justify-center w-full pb-10">
          <Link href="/#about">
            <div className="max-w-[300px] flex justify-center items-center hover-grow animate-pulse -z-10">
              <span className="border-y border-current w-12 mr-2 "></span>
              <HiChevronDoubleDown size={22} />
              <span className="border-y border-current w-12 ml-2 "></span>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
