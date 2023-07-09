import { Plataforma } from "./Plataforma.js"
import { Actor } from "./Actor.js"
import { Director } from "./Director.js"
import { Episodio } from "./Episodio.js"


export class Serie {
    imagen: string
    nombre: string
    plataformas: Plataforma []
    directores: Director[]
    actores: Actor[]
    episodios: Episodio[]
    categorias: string[]

    constructor(imagen: string, nombre:string){
        this.imagen=imagen
        this.nombre=nombre
        this.plataformas= []
        this.directores= []
        this.actores= []
        this.episodios= []
        this.categorias=[]

    }

    




}