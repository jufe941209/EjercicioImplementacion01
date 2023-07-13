import { Plataforma } from "./Plataforma.js";

export class Plan{
    precio:number
    plataforma:Plataforma | undefined

    constructor(precio:number){
        this.precio=precio
    }

  agregarPlataforma(plataforma:Plataforma){
    this.plataforma = plataforma
  }
}