import { Actor } from "./Actor.js";
import { Director } from "./Director.js";
import { Episodio } from "./Episodio.js";
import { Plan } from "./Plan.js";
import { Plataforma } from "./Plataforma.js";
import { Serie } from "./Serie.js";
const serie1 = new Serie("imagen.png", "Padres e hijos");
const serie2 = new Serie("imagen2.png", "Rapido y furioso");
const serie3 = new Serie("imagen3.png", "Triple x, recargado");
serie1.categorias = ["Acción", "Drama", "Romance"];
serie2.categorias = ["Accion", "Drama"];
serie3.categorias = ["Romance"];
const director1 = new Director(56, "Roberto Gomez Bolaños", "foto.png", "Director mexicano de mucha experiencia");
const director2 = new Director(56, "Mario Mendoza", "foto.png", "Director colombiano de mucha experiencia");
const director3 = new Director(56, "Fabio", "foto.png", "Director chileno de mucha experiencia");
const actor1 = new Actor(10, "Leonardo", "foto.png", "Su principal pelicula es titanic");
const actor2 = new Actor(15, "La roca", "foto.png", "Fue luchador de WWE");
const actor3 = new Actor(20, "Toreto", "foto.png", "Su principal pelicula es rapido y furioso");
serie1.directores.push(director1);
serie2.directores.push(director2);
serie3.directores.push(director3);
serie1.actores.push(actor1);
serie2.actores.push(actor2);
serie3.actores.push(actor3);
director1.seriesDirigidas.push(serie1);
director2.seriesDirigidas.push(serie2);
director3.seriesDirigidas.push(serie3);
actor1.seriesActuadas.push(serie1);
actor2.seriesActuadas.push(serie2);
actor3.seriesActuadas.push(serie3);
const episodio1 = new Episodio("Inmortal", "Este es el episodio 1", 25, serie1);
const episodio2 = new Episodio("Reencarnación", "Este es el episodio 1", 40, serie2);
const episodio3 = new Episodio("La vida", "Este es el episodio 1", 35, serie3);
serie1.episodios.push(episodio1);
serie2.episodios.push(episodio2);
serie3.episodios.push(episodio3);
const plataforma1 = new Plataforma("Disney", "www.Disney.com");
const plataforma2 = new Plataforma("Netflix", "www.Netflix.com");
const plataforma3 = new Plataforma("Star", "www.Star.com");
const plan1 = new Plan("Plan Básico", 10.000, plataforma1);
const plan2 = new Plan("Plan Intermedio", 20.000, plataforma2);
const plan3 = new Plan("Plan Familiar", 30.000, plataforma3);
plataforma1.planes.push(plan1);
plataforma2.planes.push(plan2);
plataforma3.planes.push(plan3);
serie1.plataformas.push(plataforma1);
serie2.plataformas.push(plataforma2);
serie3.plataformas.push(plataforma3);
// Consultar información de una serie
console.log("Nombre de la Serie:", serie1.nombre);
console.log("Categorías:", serie1.categorias);
console.log("Directores:");
for (const director of serie1.directores) {
    console.log("  -", director.nombre);
}
console.log("Actores:");
for (const actor of serie1.actores) {
    console.log("  -", actor.nombre);
}
console.log("Episodios:");
for (const episodio of serie1.episodios) {
    console.log("  -", episodio.nombre);
}
console.log("Plataformas:");
for (const plataforma of serie1.plataformas) {
    console.log("  -", plataforma.nombre);
}
