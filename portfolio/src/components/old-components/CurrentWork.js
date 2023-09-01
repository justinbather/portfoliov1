import theFortThumbnail from "../../assets/fort-thumbnail.png";
import reactLogo from "../../assets/react-logo.png";
import postgresLogo from "../../assets/postgres-logo.png";
import stripeLogo from "../../assets/stripe-logo.png";
import djangoLogo from "../../assets/django-logo.png";



const CurrentWork = () => {
    return (
        <div className="flex flex-col h-screen w-screen justify-center bg-[#f5f5f7] items-center">
            <div className="text-center text-white py-10 ">
                <h1 className="font-mono text-3xl">I'm currently working on..</h1>
            </div>
            <br></br>
            <div>
                <h1 className="text-white text-center font-mono text-lg">The Fort, Florida</h1>
                <h3 className="text-white text-center font-mono text-sm pb-5">Gym Management Solution</h3>
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

export default CurrentWork;