export class Persona {
    constructor(nombre, foto, descripcion) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Foto: ${this.foto}`);
        console.log(`Descripcion: ${this.descripcion}`);
    }
}
