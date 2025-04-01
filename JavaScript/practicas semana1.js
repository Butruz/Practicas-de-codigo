

// -------- Crear un programa que calcule el área y perímetro de diferentes figuras geométricas, como cuadrado, rectángulo, triángulo y círculo.



// Primero preguntamos a usuario que figura quiere calcular

// let figura = prompt("Elige la figura quieres calcular: (cuadrado = 1, rectángulo = 2, triángulo = 3, círculo = 4)");

// // Luego preguntamos los datos necesarios para calcular el área y perímetro de la figura y enviamos resultado

// if (figura == 1) {

//     lado = prompt("Introduce el lado en cm");
    
//     let area = lado * 2
//     let perimetro = lado * 4
//     console.log(`El área del cuadrado es ${area} cm2 y el perímetro es ${perimetro}`);
    

// } else if (figura == 2) {
     
//     base = prompt("Introduce la base en cm")
//     altura = prompt("Introduce la altura en cm")

//     let area = base * altura
//     let perimetro = 2 * (base + altura)
//     console.log(`El área del rectangula es ${area} cm2 y el perrímetro es ${perimetro}`)

// }else if (figura == 3) {

//     base = prompt("Introduce la base en cm")
//     altura = prompt("Introduce la altura en cm")

//     let area = (base * altura)/2
//     let perimetro = base * 3 
//     console.log(`El área del triángulo es ${area} cm2 y el perímetro es ${perimetro}`)

// }else{
//     radio = prompt("Introduce el radio en cm")
//     pi = 3.1416

//     let area = pi * radio * radio
//     let perimetro = 2 * pi * radio
//     console.log(`El área del círculo es ${area} cm2 y el perímetro es ${perimetro}`)
// }




// ---------- Desarrollar un convertidor de temperaturas (Celsius a Fahrenheit y viceversa

//  function conversion (valor) {
    
//     if (valor == 1) {
//         let celsius = prompt("Introduce los grados Celsius");
//         let resultado = (celsius * 9/5) + 32;
//         console.log(`Los grados Fahrenheit son ${resultado} ºF`);
        
//         let parrafo = document.createElement("p");
//         parrafo.textContent = `Los grados Fahrenheit son ${resultado} ºF`;
//         document.getElementById("resultado").appendChild(parrafo);


//     } else {
//         let farenheit = prompt("Introduce los grados Fahrenheit");
//         let resultado = (farenheit - 32) * 5/9;
//         console.log(`Los grados Celsius son ${resultado} ºC`);

//         let parrafo = document.createElement("p");
//         parrafo.textContent = `Los grados Celsius son ${resultado} ºC`;
//         document.getElementById("resultado").appendChild(parrafo);
       
//     }
// }

// conversion(valor = prompt("Elige la conversión que quieres hacer: (Celsius a Fahrenheit = 1, Fahrenheit a Celsius = 2)"))






// ----------- Crear un programa que determine si un número es par o impar

// function paroImpar(numero) {
//     numero%2==0 ?console.log(`El número ${numero} es par`):
//     console.log(`El numero ${numero} es impar`);

// }

// paroImpar(numero = prompt("Introduce un número"))





//------------- Implementar un programa que calcule el factorial de un número

// function factorial(n) {
    
//     resul = 1

//     for (let i = 1; i <= n; i++) {
//         resul *= i
//     }
//     let parrafo = document.createElement("p");
//     parrafo.textContent = `El factorial de ${n} es ${resul}`;
//     document.getElementById("resultado").appendChild(parrafo);
    
// }
// factorial(prompt("Introduce un número:"))





//--------- Desarrollar un verificador de números primos





// -----------Crear un programa que calcule el promedio de un conjunto de números

// function promedio(numeros) {
    
//     if (numeros === 0) return "No hay números para calcular el promedio"

//     let suma = numeros.reduce((a,b) => a + b)
//     let prom = suma / numeros.length
//     console.log(`El promedio de los números es ${prom}`);
    
// }

// let numeros = [2,4,6,8,10]
// promedio(numeros)







// -----------Implementar un generador de tablas de multiplicar

// function tablaMultiplicar(numero) {
    
//     for (let i = 0; i <= 10; i++) {
       
//         let resultado = numero*i
//         console.log(`${numero} x ${i} = ${resultado}`);
        
//     }
    
// }

// tablaMultiplicar(prompt("Introduce un número que quieres generar una tabal de multiplicar:"))






// --------------Desarrollar un programa que determine si un año es bisiesto

// function anioBisiesto(anio) {
    
//     if ((anio%4==0 && anio%100!=0)||anio%400==0) {
//         console.log(`El año ${anio} es bisiesto`);
        
//     }else{
//         console.log(`El año ${anio} no es bisiesto`);
//     }
// }

// anioBisiesto(prompt("Introduce un año:"))






//---------------- Crear un contador regresivo desde un número dado hasta cero

// function contadorRegresivo(numero) {
//     let intervalo = setInterval(function() {
//         console.log(numero);
//         numero--;
//         if (numero < 0) {
//             clearInterval(intervalo);
//             console.log("¡Cuenta regresiva terminada!");
//         }
//     }, 200); // tiempo de ejecución en milisegundos
// }

// // Ejemplo:
// contadorRegresivo(prompt("Introduce un número:")); 






//.}--------------- Implementar un programa que calcule la suma de los primeros N números naturales

function sumaNaturales(n) {
    
   resultado = n*(n+1)/2
   console.log(`La suma de los primeros ${n} numeros naturales es ${resultado} `);
   
}

sumaNaturales(prompt("Introduce un número:"))