
// Funciones y arrays

//_____________ Declaración y expresión de funciones

// Declaración de función

// function sumar(a, b) {
//     return a + b;
    
// }

// console.log(sumar(2, 3)); 



// // Expresión de función
// const multiplicar = function (a, b) {
//     return a * b;
// }   
// console.log(multiplicar(2, 3)); // 6



// // Función de flecha (Arrow function)
// const dividir = (a, b) => {
//     return a / b;
// }
// console.log(dividir(6, 3)); // 2



// // Funciones autoincovacdas (IIFE)
// (function() {
//     console.log("Hola desde una función autoinvocada");
// })();


// // Función generadores
// function* generador() {
//     console.log("Iniciando generador");
//     yield 1;

//     console.log("Continuando generador");
//     yield 2;

//     console.log("Finalizando generador");
//     yield 3;
// }

// const gen = generador();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);






//________ Parámetros y argumentos


// function multiplicar(a,b) {
//     console.log(`El resultado de ${a} * ${b} es ${a*b}`);
    
// }

// multiplicar(2, 3); 



// function logro(nombre, nivel=1) { // Parámetros: nombre y nivel
//     console.log(`${nombre} ha logrado un nuevo objetivo, ahora tu nivel es ${nivel}`);

// }

// logro("Jorge", "5"); //Argumentos: Jorge y 5





// //_______ Comunicación entre funciones

// function login(params) {
//     console.log(`autenticando usuario...`);
    
//     mensajeBienvendiva("Jorge")
// }
// login()


// function mensajeBienvendiva(usuario) {
//     console.log(`Usuario ${usuario} ha sido autenticado`);
    
// }




//_______ Returno de funciones

// function multip(valorUno, valorDos) {
//     return valorUno * valorDos
// }

// const resultado = multip(2, 3)
// console.log(`El resultado de la multiplicación es ${resultado}`)

// el return se utiliza para cuando se quiere devolver un valor de una función, y se puede almacenar en una variable o utilizar directamente en otra función o expresión.


// Calculamos el total de una compra y el impuesto correspondiente
// let total = 0

// function producto(precio){

//    return total +=precio
// }


// function impuesto(total) {
    
//     return total*1.2
// }

//  producto(1000)
//  producto(2000)

// const totalPagar = impuesto(total)

// console.log(total)
// console.log(totalPagar)







//------------Areglos (Arrays)---------

// Un arreglo es una colección de elementos que pueden ser de diferentes tipos (números, cadenas, objetos, etc.).

// let numeros =[2,4,6,8,10,12,14,16,18,20]


//____Métodos de arreglos

// foreach ----- Solo hace recorrido del arreglo y no devuelve nada

// numeros.forEach((item, index) => {
//     console.log(`El número ${item} está en la posición ${index}`);
    
// })



// map ------ Devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original

// let nombres = ["Jorge", "Ana", "Luis", "Pedro"]

// let nombresMayus = nombres.map(item => item.toUpperCase())
// let result = nombres.map(item => {
//     return `<div>${item}</div>`})

// console.log(nombresMayus);
// console.log(result);




// filter ----- Devuelve un nuevo arreglo con los elementos que cumplen la condición especificada en la función de callback

// let numerosMayores = numeros.filter(item => item > 5)
// console.log(numerosMayores);




// find ----- Devuelve el primer elemento que cumple la condición especificada en la función de callback

// let arr =[{
//     city: "Madrid",
//     budget: 5500,
// },
// {
//     city: "Paris",
//     budget: 8000,
// },{
//     city: "Berlin",
//     budget: 2000,
// }]

// let mejorPrecio = arr.find(item => item.budget < 8000)
// console.log(mejorPrecio);




// findIndex ----- Devuelve el índice del primer elemento que cumple la condición especificada en la función de callback

// let indexMejorPrecio = arr.findIndex(item => item.budget < 8000)
// console.log(indexMejorPrecio);




// reduce ----- Aplica una función a un acumulador y a cada elemento del arreglo (de izquierda a derecha) para reducirlo a un solo valor

// const post = [
//     {id: 1, title: "Post 1", likes: 10},
//     {id: 2, title: "Post 2", likes: 20},
//     {id: 3, title: "Post 3", likes: 30},
// ]

// const posts = post.reduce((acc, item) => {

//     return  [...acc + item]

// },[])

// console.log(posts);




// every ----- Verifica si todos los elementos del arreglo cumplen la condición especificada en la función de callback

// const nombres = ["Jorge", "Ana", "Luis", "Pedro", "Ramón"]

// const mayoresTresLetras = nombres.every(item => item.length >= 4)

// console.log(mayoresTresLetras); // false, no todos los nombres tienen más de 3 letras




// some ----- Verifica si al menos un elemento del arreglo cumple la condición especificada en la función de callback

// const array = [
//     {nombre: "Jorge", edad: 25},
//     {nombre: "Ana", edad: 16},
//     {nombre: "Luis", edad: 20},
// ]

// const hayMenoresDeEdad = array.some(usuario => usuario.edad < 18)

// console.log(hayMenoresDeEdad); // true, hay al menos un usuario menor de edad



// sort ----- Ordena los elementos del arreglo según la función de comparación especificada en la función de callback

// const frutas = ["Banana", "Manzana", "Naranja", "Pera"]
// const frutasOrdenadas = frutas.sort()
// console.log(frutasOrdenadas); // ["Banana", "Manzana", "Naranja", "Pera"]

// const numbers = [25, 42, 18, 61, 34]
// const numbersOrdenados = numbers.sort((a,b)=> a-b)
// console.log(numbersOrdenados); // [18, 25, 34, 42, 61]


// const personasPorEdad = array.sort((a,b) => a.edad - b.edad)
// console.log(personasPorEdad); // [{nombre: "Ana", edad: 16}, {nombre: "Luis", edad: 20}, {nombre: "Jorge", edad: 25}]










// ------- Ejercicios de arreglos y sus métodos----------

// Crea una función que reciba un array de números y devuelva un nuevo array con cada número duplicado.

const numerosNorm = [2,4,6,8,10,12,14]

const numerosDuplicados = numerosNorm.map(item => item*2)
console.log(numerosDuplicados); 



// Crea una función que reciba un array de números y retorne un nuevo array solo con los números pares

const numeros = [1,2,3]

const numerosPares = numeros.filter(item => item % 2 === 0)
console.log(numerosPares); // [2, 4, 6, 8, 10]



// Crea una función que reciba un array de números y retorne la suma total de sus elementos.

const sumaNumeros = numeros.reduce((acc, item)=>{
    return acc * item
})

console.log(`La suma total del array es ${sumaNumeros}`); // 55




// Crea una función que ordene un array de números de forma ascendente.

const numerosDesordenados = [5, 2, 9, 1, 7, 1, 2, 3, 4]

const ordenados = numerosDesordenados.sort((a,b) => a-b)
console.log(ordenados);



// Crea una función que reciba un array de palabras y devuelva un objeto con el conteo de cada palabra. 

const palabras = ["manzana", "banana", "manzana", "naranja", "banana", "manzana"];

const conteo = palabras.reduce((acumulador, palabra) => {
    acumulador[palabra] = (acumulador[palabra] || 0) + 1;
    return acumulador;
}, {});

console.log(conteo);
// { manzana: 3, banana: 2, naranja: 1 }




// Dado un array de objetos con nombres y edades, filtra solo a las personas con 18 años o más.

const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Juan", edad: 15 }
];

function mayoresDeEdad(arr) {
   return arr.filter(item => item.edad >= 18)
}

console.log(mayoresDeEdad(personas));


