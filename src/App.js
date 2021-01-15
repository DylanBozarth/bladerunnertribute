
import "./App.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Dock } from "./dock";
import { Box } from "./box";

function App() {
  
  const { scrollYProgress } = useViewportScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="App">
      <Dock />
      <div className="background first ">
        <h1 className="title text-center ">
          Blade Runner <br /> 2049
        </h1>
      </div>
      <div className="background second">
        
      </div>
      <div className="background third"> </div>
      <div className="background forth">
        <Box text="AAAA"></Box>
      </div>
      <div className="background fifth"> </div>
      <div className="background sixth">
        {" "}
        <a href="" className="title">Buy the movie here</a>
      </div>
    </div>
  );
}

export default App;

//“Pain reminds you the joy you felt was real. More joy, then.”
//“All the courage in the world cannot alter fact.”
//The world is built on a wall that separates kind. Tell either side there's no wall, you've bought a war. Or a slaughter.
