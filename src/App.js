import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [audioState, SetAudio] = useState("");

  const Playit = () => {
    audioState.play();
  };
  const Stopit = () => {
    
    audioState.pause();
  };
  useEffect(() => {
    SetAudio(new Audio("theme.mp3"));
  }, []);

  return (
    <div className="App">
      <div className="container text-center dock"> <button className="button" onClick={Playit}>
          Play Audio
        </button>{" "}
        <br />
        <button className="button2" onClick={Stopit}>
          Stahp Audio
        </button></div>
      <div className="background first container-fluid">
       
       
        <h1 className="title text-center">
          Blade Runner <br /> 2049
        </h1>
        
      </div>
      <div className="background second">
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </div>
      <div className="background third"></div>
    </div>
  );
}

export default App;
