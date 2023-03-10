import React from 'react'
import { useImagenes } from '../Api/ConectarApi';


interface props {
    children: JSX.Element | JSX.Element[]
}
type miApi = {
    imagenes: buscar[]
}
interface buscar  {
    id: number,
    url: string,
    titulo: string,
    descripcion: string
}
const Contexto = React.createContext({});
export function Provedor({ children }: props): JSX.Element {
    const { imagenes } = useImagenes() as miApi;
    const [buscar, setBuscar] = React.useState<string>("");
    let hola: object[] = [];
    if (buscar === '') {
        hola = imagenes;
    } else {
        const copia = imagenes;
        hola = copia.filter((elemento)=> {
            let letras = buscar.toLocaleUpperCase();
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
                    setBuscar
                }
            }
        >
            {children}
        </Contexto.Provider>
    );
}


export const useMicontexto = (): object => {
    const auth: object = React.useContext(Contexto);
    return auth;
}