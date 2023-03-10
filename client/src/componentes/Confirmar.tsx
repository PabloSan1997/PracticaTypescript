import React from 'react'
import { borrar } from '../Api/borrarApi';
import { Contexto } from '../contexto/contexto';

type hola = {
    setBorrar:Function
}
type estado = {
    usuario:string,
    contra:string
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
        <form onSubmit={(e) => mandar(e)} className="formulario2">
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
    )
}

export { Confirmar }