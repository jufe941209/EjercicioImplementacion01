import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";

export class Actor extends Persona{
    experiencia:number
    series:Serie[]

    constructor(experiencia:number,nombre:string,foto:string,descripcion:string){
        super(nombre,foto,descripcion)
        this.experiencia=experiencia
        this.series= []
    }

    agregarSerie(serie:Serie){
        this.series.push(serie)
    }
}