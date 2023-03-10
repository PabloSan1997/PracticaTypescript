import React from 'react'
import { useMicontexto } from '../contexto/contexto';

type object2={
  url:string,
  titulo:string,
  descripcion:string
}
type imagen = {
  id:number,
  url:string,
  titulo:string,
  descripcion:string
}[];
 type miContexto = {
  hola:imagen
}
export function Contenedor():JSX.Element {
  const {hola}=useMicontexto() as miContexto;
  return (
    <div className="contenedor">
        {hola.map((elemento)=>
          <Imagenes 
          key={elemento.id}
          titulo={elemento.titulo}
          url={elemento.url}
          descripcion={elemento.descripcion}
          />
          )}
    </div>
  )
}

function Imagenes({titulo, url, descripcion}: object2):JSX.Element{
    return (
        <div className="caja">
            <img src={url} alt={titulo} className="foto" />
            <h2>{titulo}</h2>
            <p className="texto">{descripcion}</p>
        </div>
    );
}