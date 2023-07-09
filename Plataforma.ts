import { Serie } from "./Serie.js";
import { Plan } from "./Plan.js";

export class Plataforma{

    nombre:String
    sitioWeb:string
    series:Serie[]
    planes:Plan[]

    constructor(nombre:string, sitioWeb:string){
        this.nombre=nombre
        this.sitioWeb=sitioWeb
        this.series=[]
        this.planes=[]

    }






}