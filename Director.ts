import { Serie } from "./serie";
import { Persona } from "./Persona";


export class Director extends Persona {

    edad:number
    seriesDirigidas: Serie[]

    constructor (edad:number, nombre, fotografia, descripcion){
        super(nombre, fotografia, descripcion)
        this.edad=edad
        this.seriesDirigidas=[]

    }
}