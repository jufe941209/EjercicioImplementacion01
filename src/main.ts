
import { Actor } from "./Actor.js";
import { Categoria } from "./Categoria.js";
import { Director } from "./Director.js";
import { Episodio } from "./Episodio.js";
import { Plan } from "./Plan.js";
import { Plataforma } from "./Plataforma.js";

import { Serie } from "./Serie.js";

// Creación de las respectivas plataformas con sus planes.

let netflix = new Plataforma("Netflix","wwww.netflix.com")
let disney = new Plataforma("Disney","wwww.disney.com")

let planBasicoNetflix=new Plan(19000)
let planPremiunNetflix = new Plan(40000)

let planBasicoDisney=new Plan(15000)
let planPremiunDisney = new Plan(30000)

netflix.agergarPlan(planBasicoNetflix)
netflix.agergarPlan(planPremiunNetflix)
disney.agergarPlan(planBasicoDisney)
disney.agergarPlan(planPremiunDisney)

// Creación de series junto a su categoría y su primer episodio

let casaDePapel = new Serie("Casa de papel","casa-de-papel.png")
let juegoDeTronos = new Serie("Juego de tronos","juego-de-tronos.png")

let categoria_robo =new Categoria("Robo")
let categoria_drama =new Categoria("Drama")
let categoria_romance =new Categoria("Romance")
let categoria_terror = new Categoria("Terror")

casaDePapel.agregarCategoria(categoria_drama)
casaDePapel.agregarCategoria(categoria_romance)
casaDePapel.agregarCategoria(categoria_robo)

juegoDeTronos.agregarCategoria(categoria_drama)
juegoDeTronos.agregarCategoria(categoria_romance)
juegoDeTronos.agregarCategoria(categoria_terror)


//Episodio 1 de la casa de papel

new Episodio("Efectuar lo acordado","El Profesor recluta a un grupo de delincuentes para llevar a cabo un gran atraco a la Fábrica Nacional de Moneda y Timbre.", 24, casaDePapel)

// Episodio 1 Juego de Tronos

new Episodio("winter is coming","Introduce al escenario y a los protagonistas de la historia, centrándose en la familia Stark y la manera en que su señor, Eddard, se involucra en las políticas de la corte una vez que el rey, Robert Baratheon, lo nombra como su Mano, en sustitución de su fallecido predecesor, Jon Arryn.", 62, juegoDeTronos)

//Agregamos actores y directores juego de tronos

let tim= new Director(64,"Tim Van Patten","Tim Van Patten.png","Tim Van Patten: Director y productor de televisión aclamado por su estilo visual y narrativo en series como Los Soprano y Boardwalk Empire.",)

let michelle = new Director(59,"Michelle MacLaren","michelle-maclaren.png"," Directora y productora de televisión y cine, conocida por su trabajo en series como Breaking Bad Game of Thronesy The Walking Dead")

let maisie = new Actor(12,"Maisie Williams","maissie-williams.jpg","Maisie Williams: Actriz británica famosa por interpretar a Arya Stark en Game of Thrones")

let kit = new Actor(15,"Kit Hatington","kit-harington.jpg","Actor británico reconocido por interpretar a Jon Snow en Game of Thrones. Su talento y dedicación le han valido el reconocimiento en la industria del entretenimiento.")

juegoDeTronos.agregarDirector(tim)
juegoDeTronos.agregarDirector(michelle)
juegoDeTronos.agregarActor(maisie)
juegoDeTronos.agregarActor(kit)

//Agregamos actores y directores casa de papel

let Alex = new Director(35,"Alex Rodrigo","alex-rodrigo.png"," Es un director, guionista y creador español. Ha dirigido series como La Casa de Papel, Veneno, El Embarcadero y Vis a Vis; y es el creador de series como Libres o El Último Show.")

let Alvaro = new Actor(20,"Álvaro Morte","alvaro-morte.jpg","Álvaro Morte es un talentoso actor español conocido por su icónico papel como El Profesor en la serie La Casa de Papel. Con su carisma y habilidad interpretativa, ha cautivado al público a nivel internacional. Morte ha demostrado su versatilidad actoral y se ha convertido en una figura destacada en la industria del entretenimiento.")

casaDePapel.agregarDirector(Alex)
casaDePapel.agregarActor(Alvaro)

// Agregamos la serie a la plataforma

netflix.agregarSerie(casaDePapel)
disney.agregarSerie(juegoDeTronos)

console.log(netflix)
console.log(disney)

disney.mostrarDetalle()