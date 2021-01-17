
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
  const floatIn1 = {
    in: {
      x: 0
    },
    out: {
      x: '-30vh'
    },
  }
  const floatTransition = {
    duration: 1.5
  }
  return (
    <motion.div initial="out"
    animate="in"
    exit="out"
    variants={floatIn1}
    transition={floatTransition} className="dock">
    {" "}
    <div className="button" onClick={Playit}>
    
    </div>{" "}
 
    <div className="button2" onClick={Stopit}>
   
    </div>
  </motion.div>
  )
}