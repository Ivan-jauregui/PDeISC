class Calculadora{
    multiplicar(a, b) {
        return a * b;
    }
    
    dividir(x1, x2) {
        if (x2 == 0) {
          mostrarErrorDivision()
        }
        else {
          return x1 / x2
        }
      }
    
    mostrarErrorDivision() {
        console.log('No se puede dividir por cero')
    }
    
}

export{Calculadora};