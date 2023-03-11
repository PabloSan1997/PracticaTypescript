import React from 'react'
import { Contexto } from '../contexto/contexto';

import "../estilos/Header.css";
type hoo={
    "id": number,
		"titulo":string,
		"descripcion": string,
		"url": string
}
export function Header():JSX.Element{
    const {imagenes}=React.useContext(Contexto) as {imagenes:hoo[]};

    return(
        <header className="titulo">
            <h1>Mis imagenes</h1>
            <p className="num">Numero de imagenes registradas:{imagenes.length}</p>
        </header>
    );
}