import { Persona } from "./Persona.js";
export class Actor extends Persona {
    constructor(experiencia, nombre, fotografia, descripcion) {
        super(nombre, fotografia, descripcion);
        this.experiencia = experiencia;
        this.seriesActuadas = [];
    }
}
