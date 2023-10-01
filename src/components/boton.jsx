import React from 'react';
import '../css/Boton.css';


function Boton ({ texto, esBotonClick, manejarClick }){
    return (

     //usamos operador ternario para determinar la clase que se aplicara al boton 
    //  dependiendo del que sea , o el boton de click o el de reinicio 
    // cuando hagamos click en el boton se llamara a la funcion/props manejarCLick
        <button className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={ manejarClick }>
            {texto}

        </button>
    );
}
export default Boton;