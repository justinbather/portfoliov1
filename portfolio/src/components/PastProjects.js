import theFortThumbnail from "../assets/the-fort-thumbnail.jpeg";
import reactLogo from "../assets/react-logo.png";
import postgresLogo from "../assets/postgres-logo.png";
import stripeLogo from "../assets/stripe-logo.png";
import djangoLogo from "../assets/django-logo.png";

const PastProjects = () => {
    return (
        <div className="flex flex-col h-screen w-screen justify-center bg-slate-950 items-center">
            <div className="text-center text-white py-10 ">
                <h1 className="font-mono text-3xl">Past projects</h1>
            </div>

            <br></br>
            <div className="flex w-screen justify-evenly">
                <div className="relative justify-center w-96 h-96 rounded-md hover:ring-1 hover:ring-blue-400/50">
                    <img src={theFortThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                    <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                        <img src={reactLogo} alt="" className="w-10 h-10"></img>
                        <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                        <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                        <img src={stripeLogo} alt="" className="w-10 h-10"></img>
                    </div>
                </div>
                <div className="relative justify-center w-96 h-96 hover:h-100 hover:w-100 rounded-md hover:ring-1 hover:ring-blue-400/50">
                    <img src={theFortThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                    <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                        <img src={reactLogo} alt="" className="w-10 h-10"></img>
                        <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                        <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                        <img src={stripeLogo} alt="" className="w-10 h-10"></img>
                    </div>
                </div>
                <div className="relative justify-center w-96 h-96 rounded-md hover:ring-1 hover:ring-blue-400/50">
                    <img src={theFortThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                    <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                        <img src={reactLogo} alt="" className="w-10 h-10"></img>
                        <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                        <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                        <img src={stripeLogo} alt="" className="w-10 h-10"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastProjects;