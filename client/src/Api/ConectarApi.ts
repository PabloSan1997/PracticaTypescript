import React from 'react'
import axios from "axios";

type objeto = {
    id:number,
    url:string,
    titulo:string,
    descripcion:string
}[];
 
export function useImagenes():object{
    const [imagenes, setImagenes]=React.useState<objeto>([]);
    React.useEffect(
        ()=>{
            (async()=>{
                const datos = await axios("http://localhost:4001/api/v1/imagenes");
                setImagenes(datos.data);
            })();
        }
        ,[]
    );
    return {imagenes}
}
