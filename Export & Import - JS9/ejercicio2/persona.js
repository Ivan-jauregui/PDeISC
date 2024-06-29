class Persona {

    constructor(nombre,edad,dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni=dni;
    }

    mostrar() {
        console.log( `Nombre:${this.nombre},Edad:${this.edad},Dni:${this.dni}` );
    }

}
export{Persona};