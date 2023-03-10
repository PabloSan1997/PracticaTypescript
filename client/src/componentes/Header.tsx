import React from 'react'

export function Header():JSX.Element{
    return(
        <header className="titulo">
            <h1>Mis imagenes</h1>
            <p className="num">Numero de imagenes registradas</p>
        </header>
    );
}