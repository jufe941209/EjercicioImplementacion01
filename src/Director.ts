import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";

export class Director extends Persona{
    edad:number
    series:Serie[]

    constructor(edad:number,nombre:string,foto:string,descripcion:string){
        super(nombre,foto,descripcion)
        this.edad=edad
        this.series=[]
    }

    agregarSerie(serie:Serie){
        this.series.push(serie)
    }
}