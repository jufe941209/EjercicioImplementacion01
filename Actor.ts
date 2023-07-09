import { Serie } from "./Serie.js";
import { Persona } from "./Persona.js";


export class Actor extends Persona {

    experiencia:number
    seriesActuadas: Serie[]

    constructor (experiencia:number, nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion)
        this.experiencia=experiencia
        this.seriesActuadas=[]
    }
}