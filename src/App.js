import './App.css';
import imagenLogo from './img/logo.png';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [clics,setClics] = useState(0); 

  const manejarClic= () =>{
    setClics(clics+1);
  };
  
  const reiniciarContador = () =>{
    setClics(0);
  };

  return (
    <div className="App">
      <div className='inicio-logo-contenedor'>
        <img className='inicio-logo'
        src={imagenLogo}
        alt='logo de free' />
      </div>
      <div className='contenedor-principal'>
        <Contador clics={clics} />

        <Boton 
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
