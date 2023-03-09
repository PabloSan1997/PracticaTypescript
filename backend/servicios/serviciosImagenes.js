const { datos, actualizar } = require("../datos/dato.js");
const boom = require('@hapi/boom');
class ServicioImagenes{
    constructor(){
        this.datos=datos
    }
    
    async leer(){
        if(this.datos.listImagenes.length<1){
            throw boom.notFound("No hay datos");
        }
        return this.datos.listImagenes;
    }
    async leerUno(num){
        if(this.datos.listImagenes.length<1){
            throw boom.notFound("No hay datos");
        }
        const info = this.datos.listImagenes;
        const inicio = info.findIndex(elemento=>elemento.id==num);
        if(inicio===-1){
            throw boom.notFound(`No se encontro id ${num}`);
        }
        const elementos = info[inicio];
        return elementos;
    }
    async agregar (cuerpo){
        let num = 1;
        if(this.datos.listImagenes.length!==0){
            num+=this.datos.listImagenes[this.datos.listImagenes.length-1].id;
        }
        const nuevo = {
            id:num,
            ...cuerpo
        }
        this.datos.listImagenes.push(nuevo);
        actualizar(this.datos);
        return {message:"Se agrego elemento"};
    }
}

module.exports={ServicioImagenes}