import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import mediumLogo from "../assets/medium-logo.png";

const Header = () => {

    return (
        <div className="bg-slate-950 text-white flex w-full py-4 justify-evenly fixed">
            
                <div className="flex justify-start pl-10">
                    <h1 className="text-white font-mono text-5xl">JB</h1>
                </div>
            
                

                <div className="text-center items-center justify-center flex flex-grow">
                    <span className="text-lg font-mono px-10">Home</span>
                    <span className="text-lg font-mono px-4">About</span>
                    <span className="text-lg font-mono px-10">Contact</span>
                </div>
                <div className="text-center items-center gap-6 pr-10 justify-end flex flex-grow">
                    <a href="https://www.github.com/justinbather" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="" className="w-10 h-10"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/justinbather" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="" className="w-10 h-10"></img>
                    </a>
                    <a href="https://www.medium.com/@justinbather" target="_blank" rel="noopener noreferrer">
                    <img src={mediumLogo} alt="" className="w-10 h-10"></img>
                    </a>
                    
                </div>
                
            </div>
       
    )
};

export default Header;