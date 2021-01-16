
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div className="  dock">
    {" "}
    <div className="button" onClick={Playit}>
    
    </div>{" "}
 
    <div className="button2" onClick={Stopit}>
   
    </div>
  </motion.div>
  )
}