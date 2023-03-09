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
    async editar(num, cuerpo){
        if(this.datos.listImagenes.length<1){
            throw boom.notFound("No hay datos");
        }
        const info = this.datos.listImagenes;
        const inicio = info.findIndex(elemento=>elemento.id==num);
        if(inicio===-1){
            throw boom.notFound(`No se encontro id ${num}`);
        }
        const objeto = this.datos.listImagenes[inicio];
        this.datos.listImagenes[inicio]={
            ...objeto,
            ...cuerpo
        }
        actualizar(this.datos);
        return {message:`Se edito elemento ${num}`}
    }
    async borrarUno(num){
        if(this.datos.listImagenes.length<1){
            throw boom.notFound("No hay datos");
        }
        const info = this.datos.listImagenes;
        const inicio = info.findIndex(elemento=>elemento.id==num);
        if(inicio===-1){
            throw boom.notFound(`No se encontro id ${num}`);
        } 
        this.datos.listImagenes.splice(inicio, 1);
        actualizar(this.datos);
        return {message:`Elemento ${num} borrado con exito`}
    }
    async borrarTodo(){
        this.datos.listImagenes=[];
        actualizar(this.datos);
        return{message:"Se borró todo alv"};
    }
}

module.exports={ServicioImagenes}