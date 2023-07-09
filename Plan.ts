import { Plataforma } from "./Plataforma.js"

export class Plan{
    nombre:string
    precio:number
    plataforma:Plataforma

        constructor(nombre:string, precio:number, plataforma:Plataforma){
            this.nombre=nombre
            this.precio = precio
            this.plataforma=plataforma
        }



}

