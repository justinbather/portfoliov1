import React from "react";
import githubLogo from "../assets/github-grey.svg";
import linkedinLogo from "../assets/linkedin-grey.svg";
import mediumLogo from "../assets/medium-grey.png";


const SocialLinks = () => {

    return (
        <div
      className="fixed bottom-0 left-0 ml-5 flex flex-col items-center gap-8 cursor-pointer z-50"
      
    >
      
      <a className="transition ease-in-out hover:translate-y-[-4px]" target="_blank" rel="noreferrer" href="https://github.com/justinbather">
      <img src={githubLogo} alt="" className="w-10 h-10"></img>
      </a>
      <a className="transition ease-in-out hover:translate-y-[-4px]" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justinbather">
      <img src={linkedinLogo} alt="" className="w-10 h-10"></img>
      </a>
      <a className="transition ease-in-out hover:translate-y-[-4px]" target="_blank" rel="noreferrer" href="https://www.medium.com/@justinbather">
      <img src={mediumLogo} alt="" className="w-10 h-10"></img>
      </a>
      <div className="w-1 h-40 bg-gradient-to-b from-[#1d1d1f] to-[#6e6e73] rounded-lg drop-shadow-lg" />
      </div>
    );
};

export default SocialLinks;