
//Ejercicio 3 katas cinta roja

// function decimalToBinary(entero){
//     let array = [];
//     console.log('El entero introducido es: ',entero);
//     while(entero >=2){
//         let position = entero%2;
//         entero = (entero-position)/2;
//         array.unshift(position); 
//         console.log(position,entero);
//     }
//     array.unshift(entero);
//     console.log(array);
//     result = parseInt(array.join(""));
//     console.log(result);
// }

// decimalToBinary(28);

//Ejercicio 5 katas cinta roja

// function palindrome(str){
//     let array = str.split(" ");
//     let oracion = array.join("");
//     let largo = oracion.length;
//     let half = Math.floor(largo/2);
//     let j = 0;
//     for (let i = 0; i < half; i++){
//         if (oracion[i] !== oracion[largo - 1 - i]){
//            j++
//            break  
//         }
//     }
//     if (j == 0){
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
//     console.log(str);
// }

// palindrome("anita lava la tina");

//Ejercicio 6 katas cinta roja

// function longestCountry(paises){
//     let pais
//     let ganador
//     let grande = 0;

//     for(var i=0; i < paises.length; i++){
//         pais = paises[i].split(" ").join("");
        
//         if(pais.length > grande){
//             grande = pais.length;
//             ganador = paises[i];
//         }
//     }
//     console.log("El país con el mayor número de letras es "+ganador);
// }

// prueba = ["México", "Panamá", "Guatemala", "El Salvador"];  
// longestCountry(prueba);

// //Ejercicio 8 katas cinta roja

// function frequent(){

// }


//Ejercicio 9 katas cinta roja



function cleanArray(arr){
    let arreglo = arr;
    console.log(arreglo);

    for(var i = 0; i < arreglo.length; i++){
        if(arreglo[i] == null ||
           arreglo[i] == 0 ||
           arreglo[i] == "" ||
           arreglo[i] == false ||
           arreglo[i] == undefined){
               arreglo.splice(i,1);
               i -= 1;
           }
    }
   console.log(arreglo); 
}

prueba = [1,null,"",0,false,2,undefined,3];
cleanArray(prueba);

