import theFortThumbnail from "../../assets/the-fort-thumbnail.jpeg";
import lazarusThumbnail from "../../assets/lazarus-icons-thumbnail.png";
import trackrThumbnail from "../../assets/trackr-thumbnail.png";
import campsiteThumbnail from "../../assets/campsite-thumbnail.png";
import reactLogo from "../../assets/react-logo.png";
import postgresLogo from "../../assets/postgres-logo.png";
import stripeLogo from "../../assets/stripe-logo.png";
import djangoLogo from "../../assets/django-logo.png";
import herokuLogo from "../../assets/heroku-logo.png";
import jqueryLogo from "../../assets/jquery-logo.png";
import tailwindLogo from "../../assets/tailwind-logo.svg";


const PastProjects = () => {
    return (
        <div className="flex flex-col h-screen w-screen justify-center bg-slate-950 items-center">
            <div className="text-center text-white py-10 ">
                <h1 className="font-mono text-3xl">Past projects</h1>
            </div>

            <br></br>
            <div className="flex w-screen justify-evenly">
                <div>
                    <h1 className="text-white text-center font-mono text-lg">Lazarus Method</h1>
                    <h3 className="text-white text-center font-mono text-sm pb-5"> Patient Tracking Software</h3>
                    <div className="relative justify-center w-96 h-96 rounded-md hover:ring-1 hover:ring-blue-400/50">
                        <img src={lazarusThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                        <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                            <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                            <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                            <img src={jqueryLogo} alt="" className="w-10 h-10"></img>
                            <img src={herokuLogo} alt="" className="w-10 h-10"></img>
                        </div>
                    </div>
                </div>
                <div>
                <h1 className="text-white text-center font-mono text-lg">trackr.io</h1>
                <h3 className="text-white text-center font-mono text-sm pb-5">Team Management Application</h3>
                    <div className="relative justify-center w-96 h-96 rounded-md hover:ring-1 hover:ring-blue-400/50">
                        <img src={trackrThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                        <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                            <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                            <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                            <img src={tailwindLogo} alt="" className="w-10 h-10"></img>
                        </div>
                    </div>
                </div>
                <div>
                <h1 className="text-white text-center font-mono text-lg">GoCamp!</h1>
                <h3 className="text-white text-center font-mono text-sm pb-5">Campsite Booking & Management</h3>
                    <div className="relative justify-center w-96 h-96 rounded-md hover:ring-1 hover:ring-blue-400/50">
                        <img src={campsiteThumbnail} alt="" className="w-full h-full rounded-md opacity-75"></img>
                        <div className="absolute flex justify-evenly items-center bottom-0 w-full h-16">
                            <img src={reactLogo} alt="" className="w-10 h-10"></img>
                            <img src={djangoLogo} alt="" className="w-10 h-10"></img>
                            <img src={postgresLogo} alt="" className="w-10 h-10"></img>
                            <img src={stripeLogo} alt="" className="w-10 h-10"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastProjects;