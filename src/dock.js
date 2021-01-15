
import { useEffect, useState } from "react";



export const Dock  = () => {
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
    <div className="container  dock">
    {" "}
    <button className="button" onClick={Playit}>
      Play Audio
    </button>{" "}
 
    <button className="button2" onClick={Stopit}>
      Pause Audio
    </button>
  </div>
  )
}