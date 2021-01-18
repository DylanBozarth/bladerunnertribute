import "./App.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Dock } from "./dock";
import { Box } from "./box";
import { QuoteBox } from "./quotebox";

function App() {
  const { scrollYProgress } = useViewportScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="master">
      <Dock />
      <div className="App container-fluid">
        <div className="background first ">
          <h1 className="title text-center ">
            Blade Runner <br /> 2049
          </h1>
        </div>
      
        <div className="background second"><Box text="“All the courage in the world cannot alter fact.”" /></div>
        <div className="background third">  </div>
        <div className="background forth">
          <QuoteBox text='“Pain reminds you the joy you felt was real.”' />
         
        </div>
        <div className="background fifth"> </div>
        
        <div className="background sixth">
        <Box text="The world is built on a wall that separates kind. Tell either side there's no wall, you've bought a war. Or a slaughter." />
          {" "}
          <a
            href="https://www.thriftbooks.com/w/blade-runner-2049/1000064103/item/40432023/?mkwid=HQtBD9yx%7cdc&pcrid=11558792766&pkw=&pmt=be&slid=&product=40432023&plc=&pgrid=3970758550&ptaid=pla-1101002858882&utm_source=bing&utm_medium=cpc&utm_campaign=Bing+Shopping+%7c+Everything+Else&utm_term=&utm_content=HQtBD9yx%7cdc%7cpcrid%7c11558792766%7cpkw%7c%7cpmt%7cbe%7cproduct%7c40432023%7cslid%7c%7cpgrid%7c3970758550%7cptaid%7cpla-1101002858882%7c&msclkid=e2b3eb2c961b14ca71ff8b2c6009401c#idiq=40432023&edition=42911861"
            target="_blank"
            rel="noreferrer"
            className="title2"
          >
            Buy the movie here
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

//“Pain reminds you the joy you felt was real.”
//“All the courage in the world cannot alter fact.”
//The world is built on a wall that separates kind. Tell either side there's no wall, you've bought a war. Or a slaughter.
