import { Plan } from "./Plan";
import { Serie } from "./Serie";

export class Plataforma{
    nombre:string
    sitioWeb:string
    planesPrecios:Plan[]
    series:Serie[]

    constructor(nombre:string,sitioWeb:string){
        this.nombre=nombre
        this.sitioWeb=sitioWeb
        this.planesPrecios=[]
        this.series=[]
    }

    agregarSerie(serie:Serie){
      this.series.push(serie)
      serie.agregarPlataforma(this)
    }

    agergarPlan(plan:Plan){
        this.planesPrecios.push(plan)
        plan.agregarPlataforma(this)
    }

    listarSeries(){
        this.series.forEach((value)=>{
            console.log(value.nombre)
        })
    }

    detalleSerie(nombre:string){
        let serie = this.series.find((value) => value.nombre === nombre)
        if (serie){
           serie.mostrarDetalle()
        }else{
            console.log("No se encontró información de esta serie")
        }
    }
    
    mostrarDetalle(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Sitio Web: ${this.sitioWeb}`)
        this.listarSeries()

    }
    
}