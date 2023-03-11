import React from 'react'
import { Contexto } from '../contexto/contexto';
import "../estilos/Buscador.css"
type miContexto = {
    buscar: string,
    setBuscar: Function
}
export function Buscador():JSX.Element {
    const { buscar, setBuscar } =React.useContext(Contexto) as miContexto;
    return (
        <div className="buscador">
            <label htmlFor=".entrada">Buscar</label>
            <input
                type="text"
                className='entrada'
                placeholder='Escribir...'
                onChange={e => setBuscar(e.target.value)}
            />
        </div>
    );
}

