
 // Función principal que ejecuta el programa
 function ejecutarPrograma() {
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let materia = prompt("Ingrese la materia:");
  
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));


// Función para verificar si la nota está dentro del rango válido (0 a 10)
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
  }
  
  // Función para calcular el promedio de las notas
  function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
  
   
    // Verificar si las notas ingresadas son válidas
    if (validarNota(nota1) && validarNota(nota2) && validarNota(nota3)) {
      // Calcular el promedio
      let promedio = calcularPromedio(nota1, nota2, nota3);
  
      // Evaluar si el promedio es mayor o igual a 7
      if (promedio >= 7) {
        console.log(
          `${nombreAlumno}, ¡felicidades! Has aprobado ${materia} con un promedio de ${promedio.toFixed(2)}.`
        );
      } else {
        console.log(
          `${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en ${materia} es ${promedio.toFixed(2)}.`
        );
      }
    } else {
      console.log("Las notas ingresadas no están en el rango válido (0 a 10).");
    }
  }
  
  // Llamar a la función principal para ejecutar el programa
  ejecutarPrograma();
  

