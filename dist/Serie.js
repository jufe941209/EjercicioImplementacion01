export class Serie {
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = [];
        this.plataformas = [];
        this.episodios = [];
        this.actores = [];
        this.directores = [];
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        categoria.agregarSerie(this);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarDirector(director) {
        this.directores.push(director);
        director.agregarSerie(this);
    }
    agregarActor(actor) {
        this.actores.push(actor);
        actor.agregarSerie(this);
    }
    mostrarDetalle() {
        console.log(`Titulo: ${this.nombre}`);
        console.log(`Imagen: ${this.imagen}`);
        this.listarCategorias();
    }
    listarCategorias() {
        console.log("Categorias: ");
        this.categorias.forEach((categoria) => {
            console.log(categoria);
        });
    }
    listarActores() {
        this.actores.forEach((value) => {
            value.mostrarDetalle();
        });
    }
    listarDirectores() {
        this.directores.forEach((value) => {
            value.mostrarDetalle();
        });
    }
    listarPlataformas() {
        this.plataformas.forEach((value) => {
            value.mostrarDetalle();
        });
    }
}
