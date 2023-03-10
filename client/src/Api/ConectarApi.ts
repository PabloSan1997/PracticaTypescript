import React from 'react'
import axios from "axios";

type objeto = {
    id: number,
    url: string,
    titulo: string,
    descripcion: string
}[];

export function useImagenes(): object {
    const [imagenes, setImagenes] = React.useState<objeto>([]);
    const [actualizar, setActualizar] = React.useState<number>(0);
    React.useEffect(
        () => {
            (async () => {
                try {
                    const datos = await axios("http://localhost:4001/api/v1/imagenes");
                    if(datos.data.statusCode===404){
                        throw datos.data.message;
                    }
                    setImagenes(datos.data);
                } catch (error) {
                    console.log(error);
                    setImagenes([  ]);
                }
            })();
        }
        , [actualizar]
    );
    return { imagenes, setImagenes:setActualizar }
}
