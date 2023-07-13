import { Persona } from "./Persona.js";
export class Actor extends Persona {
    constructor(experiencia, nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.experiencia = experiencia;
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
