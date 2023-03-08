import React from 'react';
import '../styles/Boton.css'

function Boton({ texto, esBotonDeClic, handleClic }){
  return(
    <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={handleClic}>
      {texto}
    </button>
  ); 
}

export default Boton;