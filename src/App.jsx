import Header from "./components/Header";
import Body from "./components/Body";
import BotonPedir from "./components/BotonPedir";
import ImgCentral from "./components/ImgCentral";
import Informacion from "./components/Informacion";
import Galeria from "./components/Galeria";
import Comunicarse from "./components/Comunicarse";
import PieDePagina from "./components/PieDePagina";

function App() {
   return (
    <>
    <div >
    <Header  />
     <div>
      <Body/>
     <BotonPedir/>
      <ImgCentral/>
     <Informacion/>
     <br/>
     <Galeria/>
     <br/>
     <Comunicarse/>
     <br/>
        </div>
      <PieDePagina/>
    </div>
     </>
  );
};

export default App
