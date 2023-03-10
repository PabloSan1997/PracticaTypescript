import React from 'react';
import { mandar } from '../Api/MandarApi';


interface props{
    setMostrar:Function
}
type estado = {
    titulo:string,
    descripcion:string,
    url:string
};
type Solicitud={
    "url": string,
    "titulo": string,
    "descripcion":string
}
export function Formulario({setMostrar}:props): JSX.Element {
    const [datos, setDatos]=React.useState<estado>(
        {
            titulo:"",
            descripcion:"",
            url:""
        }
    );
    const subir=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        mandar(datos);
    }
    const titulo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDatos({...datos, titulo:e.target.value})
    }
    const descripcion=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDatos({...datos, descripcion:e.target.value})
    }
    const imgurl=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setDatos({...datos, url:e.target.value})
    }
  
    return (
        <form className="formulario" onSubmit={(e)=>subir(e)}>
            <div className="fila">
                <label>Titulo</label>
                <input type="text" onChange={(e)=>titulo(e)} placeholder="Escribir..."/>
            </div>
            <div className="fila">
                <label>Descripcion</label>
                <input type="text" onChange={(e)=>descripcion(e)} placeholder="Escribir..."/>
            </div>
            <div className="fila">
                <label>Url</label>
                <input type="text" onChange={(e)=>imgurl(e)} placeholder="Escribir..."/>
            </div>
            <div className="areabotones">
                <button type='submit' className='boton'>Enviar</button>
                <button className='boton' onClick={()=>setMostrar(false)}>Cancelar</button>
            </div>
        </form>
    );
}