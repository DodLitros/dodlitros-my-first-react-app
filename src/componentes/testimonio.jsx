import React from 'react';
import '../hojas-de-estilo/testimonios.css';

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className='imagenes-testimonio'
        src={require(`../imagenes/avatar-${props.imagen}.jpg`)} 
        alt="Foto del primer testimonio" />
        <div className="contenedor-texto-testimonio"> 
          <p className="nombre-testimonio">
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className="cargo-testimonio">
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className="texto-testimonio">
            "{props.testimonio}"
          </p>
        </div>
    </div>
  );
}

export default Testimonio; 