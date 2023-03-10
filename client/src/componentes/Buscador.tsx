import React from 'react'
import { useMicontexto } from '../contexto/contexto';
type miContexto = {
    buscar: string,
    setBuscar: Function
}
export function Buscador() {
    const { buscar, setBuscar } = useMicontexto() as miContexto;
    console.log(buscar);
    return (
        <div className="buscador">
            <label htmlFor=".entrada">Buscar</label>
            <input
                type="text"
                className='entrada'
                placeholder='Buscar...'
                onChange={(e => setBuscar(e.target.value))}
                value={buscar}
            />
        </div>
    );
}

