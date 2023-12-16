// Ejercicio 2:
class Libro {
    constructor (titulo, autor) {
        this.autor = autor;
        this.titulo = titulo;
    }
    descripcion() {
        return `Libro {autor: "${this.autor}", titulo: "${this.titulo}"}`;
    }
    // Ejercicio 3:
    get oracion() {
        return `${this.titulo}, de ${this.autor.toUpperCase()}`;
    }
    mostrarDatosEnConsola() {
        console.log(this.oracion)
    }
    // Ejercicio 4:
    mostrarDatosEnAlert() {
        alert(this.oracion)
    }
    // Ejercicio 5:
    getTitulo() {
        return this.titulo;
    }
    // Ejercicio 6:
    mostrarDatos() {
        return (this.oracion);
    }


}
// Ejercicio 2:
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');

// Ejercicio 5:
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');

let tituloDelNuevoLibro = nuevolibro.getTitulo();
alert(tituloDelNuevoLibro);

// Ejercicio 6:
let tituloDelNuevoLibro1 = nuevolibro.mostrarDatos();

function mostrarDatos(modo) {
if (modo === 'alert') {
        // return this.mostrarDatosEnAlert;
        alert(tituloDelNuevoLibro1);  
    } else if (modo === 'console'){
        // return this.mostrarDatosEnConsola;
        return console.log(tituloDelNuevoLibro1);
    }  
    else 
    // return this.mostrarDatosEnConsola;
    return console.log(tituloDelNuevoLibro1);
}
mostrarDatos('alert');
// mostrarDatos('console');
// mostrarDatos();


unLibro.descripcion();
unLibro.mostrarDatosEnConsola();
unLibro.mostrarDatosEnAlert();
unLibro.getTitulo();
unLibro.mostrarDatos();

console.log(unLibro);


