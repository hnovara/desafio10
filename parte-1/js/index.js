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
    // this.oracion = `${this.titulo}, de ${this.autor.toUpperCase()}`
    mostrarDatosEnConsola() {
        // console.log(this.oracion)
        console.log(`${this.titulo}, de ${this.autor.toUpperCase()}`)
    }
    // Ejercicio 4:
    mostrarDatosEnAlert() {
        // alert(this.oracion)
        alert(`${this.titulo}, de ${this.autor.toUpperCase()}`)
    }
}
let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown')

unLibro.descripcion()
unLibro.mostrarDatosEnConsola() 
unLibro.mostrarDatosEnAlert()

console.log(unLibro)

// Ejercicio 5:


