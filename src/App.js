import './App.css';
import LogoContador from './imagenes/logoContador.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const handleClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={LogoContador}
        alt='Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='Click'
        esBotonDeClic={true}
        handleClic={handleClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        handleClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
