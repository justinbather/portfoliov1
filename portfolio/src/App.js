import { AboutMe, NewHeader, CurrentWork, PastProjects, SocialLinks} from "./components";
import { BrowserRouter } from "react-router-dom";

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
    <div className="bg-slate-950 h-full w-screen">

      <NewHeader />
      <div id="about">
      <AboutMe />
      </div>
      <SocialLinks />
      <div id="current-work">
      <CurrentWork />
      </div>
      <div id="experience">
      <PastProjects />
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
