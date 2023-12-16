// Ejercicio 2:
class Libro {
    constructor (titulo, autor) {
        this.autor = autor;
        this.titulo = titulo;
    }
    descripcion() {
        (`Libro {autor: "${this.autor}", titulo: "${this.titulo}"}`)
    }
    // Ejercicio 3:
    // let desc3y4 = (`${this.titulo}, de ${this.autor.toUpperCase()}`)
    mostrarDatosEnConsola() {
        // console.log(desc3y4)
        console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`)
    }
    // Ejercicio 4:
    mostrarDatosEnAlert() {
        // alert(desc3y4)
        alert(`${this.titulo}, de ${this.autor.toUpperCase()}`)
    }
}
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown')

unLibro.descripcion()
unLibro.mostrarDatosEnConsola() 
unLibro.mostrarDatosEnAlert()

console.log(unLibro)




