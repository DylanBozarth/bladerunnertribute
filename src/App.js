import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [audio, SetAudio] = useState("");

  const Playit = () => {
    audio.play();
  };
  const Stopit = () => {
    
    audio.pause();
  };
  useEffect(() => {
    SetAudio(new Audio("theme.mp3"));
  }, []);

  return (
    <div className="App">
      <div className="background first container-fluid">
        <button className="button" onClick={Playit}>
          Play Audio
        </button>{" "}
        <br />
        <button className="button2" onClick={Stopit}>
          Stahp Audio
        </button>
        <h1 className="title text-center">
          Blade Runner <br /> 2049
        </h1>
      </div>
      <div className="background second"></div>
      <div className="background third"></div>
    </div>
  );
}

export default App;
