import React from 'react'
import { borrar } from '../Api/borrarApi';
import { Contexto } from '../contexto/contexto';

type hola = {
    setBorrar:Function,
    setBorrar2:Function
}
type estado = {
    usuario:string,
    contra:string
}
interface propiedades{
    mandar:Function,
    uno:Function,
    dos:Function,
    setBorrar:Function
}
function Confirmar() {
    const [escribir, setEsctibir]=React.useState<estado>({
        usuario:"",
        contra:""
    });
    const mandar = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        borrar('borrarTodo', escribir);
    }
    const uno =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEsctibir({...escribir,usuario:e.target.value});
    }
    const dos =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEsctibir({...escribir,contra:e.target.value});
    }
    const {setBorrar}=React.useContext(Contexto) as hola;
    return (
        <Elemento
        mandar={mandar}
        uno={uno}
        dos={dos}
        setBorrar={setBorrar}
        />
    )
}
export function Confirmar2():JSX.Element {
    const [escribir, setEsctibir]=React.useState<estado>({
        usuario:"",
        contra:""
    });
    const {num} = React.useContext(Contexto) as {num:string}; 
    const mandar = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        borrar(num, escribir);
    }
    const uno =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEsctibir({...escribir,usuario:e.target.value});
    }
    const dos =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEsctibir({...escribir,contra:e.target.value});
    }
    const {setBorrar2}=React.useContext(Contexto) as hola;
    return (
        <Elemento
        mandar={mandar}
        uno={uno}
        dos={dos}
        setBorrar={setBorrar2}
        />
    )
}
function Elemento({mandar, uno, dos, setBorrar}:propiedades){
    return (
       <div className="fijo">
         <form onSubmit={(e) => mandar(e)} className="formulario2 form">
            <div className="fila">
                <label htmlFor=".entradas">Usuario</label>
                <input type="text" className="entradas" onChange={e=>uno(e)}/>
                </div>
            <div className="fila">
                <label htmlFor=".entradas">Contraseña</label>
                <input type="password" className="entradas" onChange={(e)=>dos(e)}/>
            </div>
            <div className="areabotones">
                <button className="boton" type="submit">Aceptar</button>
                <button className="boton" type="button" onClick={()=>setBorrar(false)}>Cancelar</button>
            </div>
        </form>
       </div>
    );
}
export { Confirmar }