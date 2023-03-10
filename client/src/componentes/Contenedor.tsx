import React from 'react'
import { Contexto } from '../contexto/contexto';



type imagen = {
  id:number,
  url:string,
  titulo:string,
  descripcion:string,
  onBorrar:Function
};
 type miContexto = {
  hola:imagen[],
  setBorrar2:Function
}
export function Contenedor():JSX.Element {
  const {hola, setBorrar2}=React.useContext(Contexto) as miContexto;
  return (
    <div className="contenedor">
        {hola.map((elemento)=>
          <Imagenes 
          key={elemento.id}
          titulo={elemento.titulo}
          url={elemento.url}
          descripcion={elemento.descripcion}
          onBorrar={setBorrar2}
          id={elemento.id}
          />
          )}
    </div>
  )
}

function Imagenes({titulo, url, descripcion, onBorrar, id}: imagen):JSX.Element{
  const {setNum} = React.useContext(Contexto) as {setNum:Function}; 
    return (
        <div className="caja">
          <span onClick={()=>{setNum(id.toString());onBorrar(true);}}>X</span>
            <img src={url} alt={titulo} className="foto" />
            <h2>{titulo}</h2>
            <p className="texto">{descripcion}</p>
        </div>
    );
}