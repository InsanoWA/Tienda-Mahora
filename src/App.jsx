import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import BotonPedir from "./components/BotonPedir/BotonPedir";
import ImgCentral from "./components/ImgCentral/ImgCentral";
import Informacion from "./components/Informacion/Informacion";
import Comunicarse from "./components/Comunicarse/Comunicarse";
import PieDePagina from "./components/PieDePagina/PieDePagina";
function App() {
  

  return (
    <>
    <Header />
      <Body/>
      <BotonPedir/>
     <ImgCentral/>
     <Informacion/>
     <br/>
     <Comunicarse/>
     <br/>
        <PieDePagina/>
      
    </>
  );
};

export default App
