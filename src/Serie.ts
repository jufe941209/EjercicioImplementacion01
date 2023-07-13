
import { Categoria } from "./Categoria.js"
import { Actor } from "./Actor.js"
import { Director } from "./Director.js"
import { Episodio } from "./Episodio.js"
import { Plataforma } from "./Plataforma.js"


export class Serie {
    nombre: string
    imagen: string

    episodios:Episodio[]
    categorias: Categoria[]
    plataformas: Plataforma[]
    actores: Actor[]
    directores: Director[]  

    
 
    constructor(nombre:string, imagen: string){
                
    this.nombre=nombre
    this.imagen=imagen   
    this.categorias= []
    this.plataformas= []
    this.episodios= []
    this.actores= []
    this.directores= []
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataformas.push(plataforma)
    }

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
        categoria.agregarSerie(this)
    }

    agregarEpisodio(episodio:Episodio){
        this.episodios.push(episodio)
    }
    
    agregarDirector(director:Director){
        this.directores.push(director)
        director.agregarSerie(this)
    }
    agregarActor(actor:Actor){
        this.actores.push(actor)
        actor.agregarSerie(this)
    }

    mostrarDetalle(){
        console.log(`Titulo: ${this.nombre}`)
        console.log(`Imagen: ${this.imagen}`)
        this.listarCategorias()

    }

    listarCategorias(){
        console.log("Categorias: ")
        this.categorias.forEach((categoria)=> {
            console.log(categoria)
        })
    }

    listarActores(){
        this.actores.forEach((value)=> {
            value.mostrarDetalle()
        })
    }

    listarDirectores(){
            this.directores.forEach((value)=> {
                value.mostrarDetalle()
            })
        }

    listarPlataformas(){
        this.plataformas.forEach((value)=> {
            value.mostrarDetalle()
        })
    }
 }