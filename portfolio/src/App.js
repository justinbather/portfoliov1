import { AboutMe, Header, CurrentWork, PastProjects} from "./components";

import './App.css';

function App() {
  return (
    <div className="bg-slate-950 h-full w-screen">
      <Header />
      <AboutMe />
      <CurrentWork />
      <PastProjects />
      
    </div>
  );
}

export default App;
