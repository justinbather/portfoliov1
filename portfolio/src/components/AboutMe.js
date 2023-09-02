import "../assets/css/wave.css";
import CurrentWork from "./old-components/CurrentWork";
import PastProjects from "./old-components/PastProjects";
import reactLogo from "../assets/react-logo-grey.svg"
import postgresLogo from "../assets/postgres-logo-grey.svg"
import stripeLogo from "../assets/stripe-logo-grey.svg"
import djangoLogo from "../assets/django-logo-grey.svg"
import tailwindLogo from "../assets/tailwind-logo-grey.svg"
import herokuLogo from "../assets/heroku-logo-grey.svg"
import jqueryLogo from "../assets/jquery-logo-grey.svg"
import cLogo from "../assets/c-logo-grey.png"
import pythonLogo from "../assets/python-logo-grey.svg"
import sqlLogo from "../assets/sql-logo-grey.png"
import nodeLogo from "../assets/node-logo-grey.svg"
import mongoLogo from "../assets/mongo-logo-grey.png"
import jsLogo from "../assets/js-logo-grey.svg"
import expressLogo from "../assets/express-logo-grey.svg"
import emailIcon from "../assets/email-icon-grey.png"
import linkedinIcon from "../assets/linkedin-logo-grey.png"
import githubIcon from "../assets/github-logo-grey.png"



const AboutMe = () => {

    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
        targetElement.scrollIntoView(targetId);
        }
    };

    return (
        <div className="flex flex-row w-screen justify-evenly h-screen">
            <div className="flex flex-col w-1/2 justify-center pl-20 h-full" id="title">
            <div className="justify-center text-center tracking-wider w-full transition ease-in-out hover:translate-y-[-4px]">
                <h1 className="font-inter font-bold text-8xl bg-gradient-to-r from-[#6e6e73] to-[#1d1d1f] bg-clip-text text-transparent drop-shadow-lg">Justin Bather</h1>
                <div className="scroller">
                    <span className="font-inter font-bold text-4xl text-[#6e6e73]">
                    Software Engineer<br/>
                    Problem Solver<br/>
                    Entreprenuer<br/>
                    Leader

                    </span>
                </div>          
            </div>
            
            </div>
            <div className="flex flex-col w-1/2 gap-10 px-10 h-full overflow-y-scroll">
            <div className="pt-[55%] pb-40"  id="about">
            <div className="text-center text-[#6e6e73] bg-[#fff] w-full py-5 px-5 rounded-xl drop-shadow-md bg-white bg-opacity-70 backdrop-blur-lg align-middle" >
                <h3 className="font-inter text-lg" >
                Hey there! I'm Justin, a Full-Stack Software Engineer currently studying at Brainstation Toronto. I love building software that solves real-world problems.
                I am experienced in Python, JavaScript, C, and SQL.
                </h3>
                
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <button className="bg-[#0277ed] text-white font-bold h-10 w-28 my-5 rounded-xl transition ease-in-out drop-shadow-lg hover:translate-y-[-4px]"
                onClick={() => handleScroll("contact")}>Let's Chat!</button>
            </div>
            </div>
            <div className="w-full flex flex-col mt-50 rounded-xl drop-shadow-md bg-white bg-opacity-70 backdrop-blur-lg">
                <h1 className="font-inter font-bold text-4xl px-5 py-5 text-[#6e6e73]" id="experience">Experience</h1>
                    <br></br>
                <div className="ml-8">
                    <ul className="list-disc text-[#6e6e73]">
                         <li>
                            <h2 className="font-inter font-bold text-2xl px-5 text-[#6e6e73]">Camp-EZ</h2>
                        </li>
                    </ul>
                    <h3 className="font-inter font-regular text-xl py-2 px-5 text-[#6e6e73]">Campground Booking and Management Software</h3>
                    <p className="font-inter font-light text-lg px-5 text-[#6e6e73]">Changing the way campgrounds manage bookings allowing campers to check availability online and book a site in seconds.
                        Traditionally this industry has continued to use email and calling to book campsites, leaving campers frustrated and confused when it comes to what their getting from the site.
                         <a className="font-inter text-[17px] font-bold text-[#0277ed] cursor-pointer" >See more</a>
                    </p>
                </div>
                    <div className="flex flex-row w-full justify-center gap-5 mt-5">
                        <img className="w-10 h-10" src={reactLogo}></img>
                        <img className="w-10 h-10" src={djangoLogo}></img>
                        <img className="w-10 h-10" src={postgresLogo}></img>
                        <img className="w-10 h-10" src={tailwindLogo}></img>
                        <img className="w-10 h-10" src={stripeLogo}></img>
                    </div>

                    <div className="flex flex-row gap-5 justify-center">
                        
                        <button className="bg-[#0277ed] text-white font-bold h-10 w-28 my-5 rounded-xl transition ease-in-out drop-shadow-lg hover:translate-y-[-4px] ">Demo</button>
                        
                        <a target="_blank" rel="noreferrer" href="https://github.com/justinbather/campsitemanagementsystem">
                            <button className="border border-[#0277ed] text-[#0277ed] font-bold h-10 w-28 my-5 rounded-xl transition ease-in-out drop-shadow-lg hover:translate-y-[-4px] ">Code</button>
                        </a>
                    </div>
                

                    <br></br>
                    <br></br>
                <div className="ml-8">
                    <ul className="list-disc text-[#6e6e73]">
                        <li>
                            <h2 className="font-inter font-bold text-2xl px-5 text-[#6e6e73]">Lazarus Method</h2>
                        </li>
                    </ul>
                    <h3 className="font-inter font-regular text-xl py-2 px-5 text-[#6e6e73]">Natural Medicine Patient Tracking Software</h3>
                    <p className="font-inter font-light text-lg px-5 text-[#6e6e73]">An in-production software that allows a Natural Medicine Doctor to provide an intuitive and interactive platform to accompany his practice. 
                        This app allows users to track their progress and see real-time stats on their health journey. 100+ concurrent users.
                         <a className="font-inter text-[17px] font-bold text-[#0277ed] cursor-pointer" >See more</a>
                    </p>
                </div>
                    <div className="flex flex-row w-full justify-center gap-5 mt-5">
                        <img className="w-10 h-10" src={djangoLogo}></img>
                        <img className="w-10 h-10" src={jqueryLogo}></img>
                        <img className="w-10 h-10" src={postgresLogo}></img>
                        <img className="w-10 h-10" src={herokuLogo}></img>
                    </div>

                    <div className="flex flex-row gap-5 justify-center">
                        <a target="_blank" rel="noreferrer" href="https://lazarus-method.herokuapp.com/">
                            <button className="bg-[#0277ed] text-white font-bold h-10 w-28 my-5 rounded-xl transition ease-in-out drop-shadow-lg hover:translate-y-[-4px] ">Demo</button>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/justinbather/lazarus-method">
                            <button className="border border-[#0277ed] text-[#0277ed] font-bold h-10 w-28 my-5 rounded-xl transition ease-in-out drop-shadow-lg hover:translate-y-[-4px] ">Code</button>
                        </a>
                    </div>

                <br></br>
                <br></br>
                

            </div>

            <div className="w-full flex flex-col mt-20 mb-20 border rounded-xl drop-shadow-md bg-white bg-opacity-70 backdrop-blur-lg">
                <h1 className="font-inter font-bold text-4xl px-5 py-5 text-[#6e6e73]" id="education">Education</h1>
                    <br></br>
                <div className="ml-8">
                    <ul className="list-disc text-[#6e6e73]">
                         <li>
                            <h2 className="font-inter font-bold text-2xl px-5 text-[#6e6e73]">Brainstation Toronto</h2>
                        </li>
                    </ul>
                    <h3 className="font-inter font-regular text-xl pt-2 px-5 text-[#6e6e73]">Software Engineering</h3>
                    <p className="font-inter font-bold text-sm pb-5 px-5 text-[#6e6e73]">Sept 2023 - Dec 2023</p>
                    <p className="font-inter font-light text-lg px-5 text-[#6e6e73]">Currently enrolled in Brainstation Software Engineering Bootcamp learning a full range of development skills to further hone my abilities. Trusted by +7500 hiring partners with a curriculum focused on todays tools and moulded by the industries leading companies.
                    </p>
                </div>
                    <div className="flex flex-row w-full justify-center gap-5 mt-5">
                        <img className="w-10 h-10" src={mongoLogo}></img>
                        <img className="w-10 h-10" src={expressLogo}></img>
                        <img className="w-10 h-10" src={reactLogo}></img>
                        <img className="w-10 h-10" src={nodeLogo}></img>
                    </div>

                    

                    <br></br>
                    <br></br>
                <div className="ml-8">
                    <ul className="list-disc text-[#6e6e73]">
                        <li>
                            <h2 className="font-inter font-bold text-2xl px-5 text-[#6e6e73]">HarvardX</h2>
                        </li>
                    </ul>
                    <h3 className="font-inter font-regular text-xl px-5 text-[#6e6e73]">CS50 - Intro to Computer Science</h3>
                    <p className="font-inter font-bold text-sm pb-5 px-5 text-[#6e6e73]">Nov 2022 - Jan 2023</p>
                    <p className="font-inter font-light text-lg px-5 text-[#6e6e73]">The rebirth of my Computer Science education from when I was 13. 
                    During this course I got the chance to dust of my programming skills and learn new concepts with C. 
                    Starting off with a low-level language taught me how everything works under hood which I'd taken granted of in the past.
                     From here I took on client projects, mostly in Python and Django, but revisit C often.
                    </p>
                </div>
                    <div className="flex flex-row w-full justify-center gap-5 mt-5">
                        <img className="w-10 h-10" src={cLogo}></img>
                        <img className="w-10 h-10" src={pythonLogo}></img>
                        <img className="w-10 h-10" src={sqlLogo}></img>
                    </div>

                    

                <br></br>
                <br></br>
                

            </div>
            <div className="w-full flex flex-col justify-center text-center mt-20 mb-20 border rounded-xl drop-shadow-md bg-white bg-opacity-70 backdrop-blur-lg">
                <h1 className="font-inter font-bold text-4xl px-5 py-5 text-[#6e6e73]" id="contact">Get in touch</h1>
                <br></br>
                <div className="flex flex-row w-full justify-center gap-20 mt-5">
                    <a className="bg-transparent transition ease-in-out hover:translate-y-[-4px]" href="mailto:justinbather33@gmail.com">
                        <img className="w-10 h-10 drop-shadow-lg cursor-pointer" src={emailIcon}></img>
                    </a>
                    <a className="transition ease-in-out hover:translate-y-[-4px]" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justinbather">
                        <img className="w-10 h-10 drop-shadow-lg cursor-pointer" src={linkedinIcon}></img>
                    </a>
                    <a className="transition ease-in-out hover:translate-y-[-4px]" target="_blank" rel="noreferrer" href="https://github.com/justinbather">
                        <img className="w-10 h-10 drop-shadow-lg cursor-pointer" src={githubIcon}></img>
                    </a>
                </div>
                    
                
                    

                    

                    
                    

                <br></br>
                <br></br>
                

            </div>


            
            

            </div>
    
"
        </div>
    );

};

export default AboutMe;