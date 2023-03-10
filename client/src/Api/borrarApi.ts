import axios from "axios";

export async function borrar(router: string, solicitud: object): Promise<void> {
    const objet = {
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(solicitud)
    }
    try {
        const borrar = await fetch(`http://localhost:4001/api/v1/imagenes/${router}`, objet);
        const mensaje = await borrar.json();
        if(mensaje.statusCode===400){
            throw mensaje.message
        }
        window.location.reload();
    } catch (error) {
        alert(error)
    }
}