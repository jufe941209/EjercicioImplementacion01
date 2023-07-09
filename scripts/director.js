import { Persona } from "./Persona.js";
export class Director extends Persona {
    constructor(edad, nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
        this.edad = edad;
        this.seriesDirigidas = [];
    }
}
