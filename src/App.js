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
      <div className="box">SAMPLE TEXT</div> 
    

      </div>
      <div className="background third"></div>
    </div>
  );
}

export default App;
