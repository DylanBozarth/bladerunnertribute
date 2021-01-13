import { useEffect } from "react";
import "./App.css";

function App() {
  const Playit = () => {
    var audio = new Audio("theme.mp3");
    audio.play();
}
useEffect(() => {Playit()}, []);

  return (
    <div className="App">
      
      <div className="background first container-fluid"><button className="button" onClick={Playit}>Play Audio</button>
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
