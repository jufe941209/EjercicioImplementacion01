import { Serie } from "./serie";
import { Persona } from "./Persona";


export class Actor extends Persona {

    experiencia:number
    seriesActuadas: Serie[]

    constructor (experiencia:number, nombre, fotografia, descripcion){
        super(nombre, fotografia, descripcion)
        this.experiencia=experiencia
        this.seriesActuadas=[]
    }
}