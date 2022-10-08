import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ConnectBtns = ({ size }) => {
  return (
    <nav>
      <ul className="flex items-center justify-between max-w-[330px] m-auto py-4">
        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/elikeith404/"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`btn-round hover-grow ${size}`}>
              <span className="sr-only">LinkedIn Profile</span>
              <FaLinkedinIn />
            </div>
          </a>
        </li>
        {/* Github */}
        <li>
          <a
            href="https://github.com/EliKeith404"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`btn-round hover-grow ${size}`}>
              <span className="sr-only">Github Profile</span>
              <FaGithub />
            </div>
          </a>
        </li>
        {/* Email */}
        <li>
          <a href="mailto:ekbass44@gmail.com">
            <div className={`btn-round hover-grow ${size}`}>
              <span className="sr-only">Resume File</span>
              <AiOutlineMail />
            </div>
          </a>
        </li>
        {/* Resume */}
        <li>
          <a
            href="https://docs.google.com/document/d/11b62J60S4DILgcgn7nVHUD6IMSvQy-PzACj6k7pIkBI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`btn-round hover-grow ${size}`}>
              <span className="sr-only">Email Me</span>
              <BsFillPersonLinesFill />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ConnectBtns;
