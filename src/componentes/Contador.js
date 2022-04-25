import React from "react";
import '../css/Contador.css'

function Contenedor({clics}){
  return(
    <div className="contador">
      {clics}
    </div>
  );
}

export default Contenedor;
