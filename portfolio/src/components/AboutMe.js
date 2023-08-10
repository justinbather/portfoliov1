import "../assets/css/wave.css";


const AboutMe = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full pb-20">
            
            <div className="text-center text-white py-10">
                <h1 className="font-mono text-5xl">Hey there! <span className="wave">👋</span> </h1>
            </div>
           
            <div className="text-center text-white w-1/2 py-10">
                <h3 className="font-mono text-xl">My name is Justin Bather, I’m a Full Stack Developer with extensive experience in Django, ReactJS, and PostgreSQL.</h3>
            </div>
            <div className="text-center text-white w-1/2 py-10">
                <h3 className="font-mono text-xl">
                Using my knowledge of business and software I develop applications for clients, from doctors to gyms, that provide massive value to their customers. 
                This helps them scale faster and increase retention, while standing out from the competition.
                </h3>
            </div>
            <div className="text-center text-white w-25 py-10">
                <h3 className="font-mono text-md">
                Below you can find what I'm currently working on, what I've done in the past, and more about my experience
                </h3>
            </div>
            
        </div>
    );

};

export default AboutMe;