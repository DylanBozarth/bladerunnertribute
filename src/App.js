import { useEffect, useState } from "react";
import "./App.css";
import {motion, useViewportScroll, useTransform} from 'framer-motion'

function App() {
  const [audioState, SetAudio] = useState("");
const { scrollYProgress } = useViewportScroll()
  const Playit = () => {
    audioState.play();
  };
  const Stopit = () => {
    
    audioState.pause();
  };
  useEffect(() => {
    SetAudio(new Audio("theme.mp3"));
  }, []);
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="App">
      <div className="container text-center dock"> <button className="button" onClick={Playit}>
          Play Audio
        </button>{" "}
        <br />
        <button className="button2" onClick={Stopit}>
          Stahp Audio
        </button></div>
      <div className="background first ">
       
       
        <h1 className="title text-center ">
          Blade Runner <br /> 2049
        </h1>
       
      </div>
      <div className="background second">
      <div className="box">“Dying for the right cause. It's the most human thing we can do.”</div> 
    

      </div>
      <div className="background third">  </div>
      <div className="background forth"><div className="box">“Dying for the right cause. It's the most human thing we can do.”</div>   </div>
      <div className="background fifth">  </div>
      <div className="background sixth">  <a href="">Buy the movie here</a></div>
    </div>
  );
}

export default App;


//“Pain reminds you the joy you felt was real. More joy, then.”
//“All the courage in the world cannot alter fact.”
//The world is built on a wall that separates kind. Tell either side there's no wall, you've bought a war. Or a slaughter.