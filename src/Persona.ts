
export abstract class Persona {
    nombre:string;
    foto:string;
    descripcion:string;

    constructor(nombre:string,foto:string,descripcion:string){

        this.nombre=nombre;
        this.foto=foto;
        this.descripcion=descripcion;

    }

    mostrarDetalle(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Foto: ${this.foto}`)
        console.log(`Descripcion: ${this.descripcion}`)
    }
}