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
            <div className={`btn-round hover-grow ${size} tooltip`}>
              <FaLinkedinIn />
              <span className="tooltiptext">LinkedIn Profile</span>
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
            <div className={`btn-round hover-grow ${size} tooltip`}>
              <span className="tooltiptext">Github Profile</span>
              <FaGithub />
            </div>
          </a>
        </li>
        {/* Email */}
        <li>
          <a href="mailto:ekbass44@gmail.com">
            <div className={`btn-round hover-grow ${size} tooltip`}>
              <span className="tooltiptext">Email Me</span>
              <AiOutlineMail />
            </div>
          </a>
        </li>
        {/* Resume */}
        <li>
          <a
            href="https://docs.google.com/document/d/1SN3fQY49E5_LGbCb3nNcdMuK4BUluVLHlotznADC_k0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className={`btn-round hover-grow ${size} tooltip`}>
              <span className="tooltiptext">My Resume</span>
              <BsFillPersonLinesFill />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ConnectBtns;
