import { Serie } from "./Serie.js";
import { Persona } from "./Persona.js";


export class Director extends Persona {

    edad:number
    seriesDirigidas: Serie[]

    constructor (edad:number, nombre:string, fotografia:string, descripcion:string){
        super(nombre, fotografia, descripcion)
        this.edad=edad
        this.seriesDirigidas=[]

    }
}