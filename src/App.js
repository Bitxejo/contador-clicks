import './App.css';
// otra forma para cargar imagenes es importarla y luego abajo en la etiqueta img 
// llamamos en src el nombre de la imporatcion que hemos puesto.
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/boton';
import Contador from './components/contador';

// importamos el hook useState ,que usaremos bastante  si necesitamos interactividad
import { useState } from 'react';


function App() {

  const [ numClicks, setNumClicks ] = useState( 0 );


const manejarClick = () => {
   setNumClicks ( numClicks + 1 );

   if( numClicks > 10 ){
    console.log('mierda');
   }
};

const reiniciarContador = () =>{
  setNumClicks ( 0 );
};



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo' alt='logo-freeCodeCamp' src={freeCodeCampLogo}/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks = {numClicks} />
        <Boton 
        texto='Click'
        esBotonDeClick={ true }
        manejarClick={ manejarClick } />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={ false }
        manejarClick={ reiniciarContador} />


      </div>
   
    </div>
  );
}

export default App;
