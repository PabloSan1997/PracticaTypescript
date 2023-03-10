import React from 'react'
import { Contexto } from '../contexto/contexto';

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
                placeholder='Buscar...'
                onChange={e => setBuscar(e.target.value)}
            />
        </div>
    );
}

