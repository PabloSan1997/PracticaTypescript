import React from 'react';
import { mandar } from '../Api/MandarApi';
import { Contexto } from '../contexto/contexto';
type hola = {
    setImagenes:Function,
    setBorrar:Function
}

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
    const {setImagenes, setBorrar}=React.useContext(Contexto) as hola;
    const subir=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        mandar(datos, setImagenes);
        setDatos( {
            titulo:"",
            descripcion:"",
            url:""
        });
        setMostrar(false);
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
        <div className="fijo">
            <form className="formulario form" onSubmit={(e)=>subir(e)}>
            <div className="fila">
                <label>Titulo</label>
                <input type="text" onChange={(e)=>titulo(e)} placeholder="Escribir..." className='entradas'/>
            </div>
            <div className="fila">
                <label>Descripcion</label>
                <input type="text" onChange={(e)=>descripcion(e)} placeholder="Escribir..." className='entradas'/>
            </div>
            <div className="fila">
                <label>Url</label>
                <input type="text" onChange={(e)=>imgurl(e)} placeholder="Escribir..." className='entradas'/>
            </div>
            <div className="areabotones">
                <button type='submit' className='boton'>Enviar</button>
                <button className='boton'type="button" onClick={()=>setMostrar(false)}>Cancelar</button>
                <button className='boton' type="button" onClick={()=>{setBorrar(true);setMostrar(false);}}>Borrar Todo</button>
            </div>
        </form>
        </div>
    );
}