import { Serie } from "./Serie.js";

    export class Episodio {
        nombre:string
        resumen:string
        duracion:number
        serie:Serie

            constructor(nombre:string,resumen:string,duracion:number,serie:Serie){

                this.nombre=nombre
                this.resumen=resumen
                this.duracion=duracion
                this.serie = serie
                this.serie.agregarEpisodio(this)

            }

    }