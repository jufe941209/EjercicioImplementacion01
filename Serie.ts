import { Plataforma } from "./plataforma"
import { Actor } from "./actor"
import { Categoria } from "./categoria"
import { Director } from "./director"
import { Episodio } from "./episodio"


export class Serie {
    imagen: string
    nombre: string
    plataformas: Plataforma []
    directores: Director[]
    actores: Actor[]
    episodios: Episodio[]
    categorias: Categoria[]

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