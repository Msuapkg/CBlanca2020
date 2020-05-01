
//Ejercicio 7

// var operacion = prompt("introduzca una operación simple:");

//     if(operacion.length != 3){
//         alert("Tu operación debe contener 2 dígitos y un operador aritmético básico (+, -, *, /, ^)")
// }
//     else{
//         var arrOp = operacion.split("");
//             let a = parseInt(arrOp[0]);
//             let b = parseInt(arrOp[2]);
//             let result;
//             switch (arrOp[1]){
//                 case '+':
//                     result = a + b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '-':
//                     result = a - b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '*':
//                     result = a * b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '/':
//                     result = a / b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '^':
//                     result = Math.pow(a,b);
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 default:
//                     alert("sin operacion a realizar");
//             }
// }

// function Ejercicio(operacion = prompt("introduzca una operación simple:")){
    

//     if(operacion.length != 3){
//         alert("Tu operación debe contener 2 dígitos y un operador aritmético básico (+, -, *, /, ^)")
//     }
//     else{
//         var arrOp = operacion.split("");
//             let a = parseInt(arrOp[0]);
//             let b = parseInt(arrOp[2]);
//             let result;
//             switch (arrOp[1]){
//                 case '+':
//                     result = a + b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '-':
//                     result = a - b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '*':
//                     result = a * b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '/':
//                     result = a / b;
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 case '^':
//                     result = Math.pow(a,b);
//                     console.log("Tu resultado es: "+result);
//                     break;
//                 default:
//                     alert("sin operacion a realizar");
//             }
//     }

// }

// Ejercicio();



//Ejercicio 8
// function rev(input = prompt("introduzca una numero")){
//     let arrfix = input.split("").reverse().join("");
//     alert(input+" invertido es "+arrfix);
// }

// rev();

// function voltear(ingreso){
//     console.log("Número ingresado: "+ingreso);
//     var arrgiro = ingreso.toString().split("");
//     var arrfin = [];
    
//     const size = arrgiro.length;
//     for(var i=0; i < size;i++){
//         arrfin[i] = arrgiro.pop();
//     }
//     console.log("Número invertido: "+arrfin.join(""))
         
// }
// voltear(123456789)

//Ejercicio 9
// function Mayus(oracion){
//     console.log(" Input: "+oracion);
//     var arrVoz = oracion.split(" ");
//     var arrM = [];
    
//     for(var i=0; i < arrVoz.length;i++){
//         let arrLetras = arrVoz[i].split("");
//         arrM.push(arrLetras[0].toUpperCase()+arrVoz[i].slice(1));
//     }
//     console.log("Output: "+arrM.join(" "));
// }
// Mayus("muchos años después, frente al pelotón de fusilamiento, el coronel aureliano buendía había de recordar aquella tarde remota en que su padre\n lo llevó a conocer el hielo.");

//Ejercicio 10
// function Vowels(oracion){
//     console.log("Oración.-  "+oracion);
//     var arrVoz = oracion.split("");
//     let i=0;

//     for(var j=0; j < arrVoz.length; j++){
//         if(arrVoz[j] == "a" ||
//            arrVoz[j] == "e" ||
//            arrVoz[j] == "i" ||
//            arrVoz[j] == "o" ||
//            arrVoz[j] == "u" ||
//            arrVoz[j] == "á" ||
//            arrVoz[j] == "é" ||
//            arrVoz[j] == "í" ||
//            arrVoz[j] == "ó" ||
//            arrVoz[j] == "ú"){
//             i++;   
//         }
//     }
//     console.log("Número de vocales: "+i);
// }

// Vowels("Había un peruano timorato que soñó que se comía su zapato, despertó temblando como un pato y cumplió su sueño después de un rato.");





