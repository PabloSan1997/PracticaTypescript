import React from 'react'
import { useImagenes } from '../Api/ConectarApi';


interface props {
    children: JSX.Element | JSX.Element[]
}
type miApi = {
    imagenes: buscar[],
    setImagenes:Function
}
interface buscar  {
    id: number,
    url: string,
    titulo: string,
    descripcion: string
}
export const Contexto = React.createContext({});
export function Provedor({ children }: props) {
    const { imagenes, setImagenes } = useImagenes() as miApi;
    const [buscar, setBuscar] = React.useState<string>("");
    const [borrar,setBorrar]=React.useState<boolean>(false);
    let hola: object[] = [];
    if (buscar === '') {
        hola = imagenes;
    } else {
        const copia = imagenes;
        const b = buscar;
        hola = copia.filter((elemento)=> {
            let letras = b.toLocaleUpperCase();
            let titulo = elemento.titulo.toLocaleUpperCase();
            return titulo.includes(letras);
        }
        );
    }
    return (
        <Contexto.Provider
            value={
                {
                    hola,
                    imagenes,
                    buscar,
                    setBuscar,
                    setImagenes,
                    borrar,
                    setBorrar
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}


