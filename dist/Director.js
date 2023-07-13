import { Persona } from "./Persona.js";
export class Director extends Persona {
    constructor(edad, nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.edad = edad;
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
