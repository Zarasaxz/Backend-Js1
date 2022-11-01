class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido 
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota = (mascota) =>{
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length 

    }
    addBook = (libro) => {
        this.libros.push(libro)
    }
    getBookNames(){
        this.libros.map(element => {
            console.log(`${element.nombre}`)
        })
    }

}

const Mat = new Usuario("matias", "miño", [{nombre: "libro1", autor: "autor1"}], ["gatos", "perra"])
console.log(Mat.getFullName())

Mat.addMascota("sugar")
console.log(Mat.mascotas)

console.log(Mat.countMascotas())

Mat.addBook({nombre: "libro2", autor: "autor2"})
console.log(Mat.libros)

Mat.getBookNames()
