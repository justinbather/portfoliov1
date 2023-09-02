import { AboutMe, NewHeader, CurrentWork, PastProjects, SocialLinks} from "./components";
import { BrowserRouter } from "react-router-dom";

import './App.css';

function App() {

  /*
  <div id="current-work">
      <CurrentWork />
      </div>
      <div id="experience">
      <PastProjects />
      </div>
      */
  
  return (
    <BrowserRouter>
    <div className="bg-[#f5f5f7] h-full w-screen">

      <NewHeader />
      
      <AboutMe />
      
      <SocialLinks />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
