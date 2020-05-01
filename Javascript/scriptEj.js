
//Ejercicio 1
//Intento 1
// var arrayEjUno = [0,-1,4]
// var arrayMasMenos = new Array(arrayEjUno.length)


// for(var i=0; i < arrayEjUno.length;i++){
//     for(var j=0; j < arrayMasMenos.length;j++){
//         if(arrayEjUno[i] > arrayMasMenos[j] || arrayEjUno[i] == []){
//             arrayMasMenos[j] = arrayEjUno[i]
//             alert("para j: "+arrayMasMenos);
//         }
//     }
//     alert("para i: "+arrayMasMenos);
//     }
//     alert("resultado final: "+arrayMasMenos);

//intento 2
// var arrayInput = [0,-1,4];
// var arraySort = [];
// var displace;

// for(var i=0; i < arrayInput.length; i++){
//     if(arrayInput[i] >= 0){
//         if(arrayInput[i] < arraySort[arraySort.length - 1]){
//             displace = arraySort.pop;
//             arraySort.push(arrayInput[i]);
//             arraySort.push(displace);
//         }
//         else{
//             arraySort.push(arrayInput[i]);
//         }
//     }
//     else{
//         if(arrayInput[i] > arraySort[0]){
//             displace = arraySort.shift;
//             arraySort.unshift(arrayInput[i]);
//             arraySort.unshift(displace);
//         }
//         else{
//             arraySort.unshift(arrayInput[i]);
//         }
//     }
// }

// alert("-Ordena los números de menor a mayor-\nInput: "+arrayInput+"\nOutput: "+arraySort);

// //Ejercicio 2
// var arrList = [-5,-2,-6,0,-1];
// var largest;

// for(var i=0; i < arrList.length; i++){
//     if(arrList[i] > largest || largest == undefined){
//         largest = arrList[i];
//     }
// }
// alert("-Encuentra el número más grande-\nInput: "+arrList+"\nOutput: "+largest);

// //Ejercicio 3
// for(var j=0; j <= 15; j++){
//     if(j%2 == 0){
//         console.log(j+" es par");
//     }
//     else{
//         console.log(j+" es impar");
//     }
// }

// Ejercicio 4
// var Estudiantes = [["David",80],["Maria",77],["Luis",88],["Ana",95],["Pedro",68]];
// var Ind;
// var calificaciones = [];

// for(var j=0; j < Estudiantes.length; j++){
//     Ind = Estudiantes[j];
//     if(Ind[1] >= 90 && Ind[1] <= 100){
//         calificaciones.push("A");
//     }
//     else if(Ind[1] >= 80 && Ind[1] < 90){
//         calificaciones.push("B");
//     }
//     else if(Ind[1] >= 70 && Ind[1] < 80){
//         calificaciones.push("C");
//     }
//     else if(Ind[1] >= 60 && Ind[1] < 70){
//         calificaciones.push("D");
//     }
//     else{
//         calificaciones.push("F");
//     }
// }
// console.log("las calificaciones son:\n"+calificaciones);


//Ejercicio 5
// for(var i=1; i <= 100; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3 == 0){
//         console.log("Fizz");
//     }
//     else if(i%5 == 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

//Ejercicio 6
var myColor = ["Red","Green","White","Black"];
console.log(myColor.join());
console.log(myColor.join("+"));
console.log(myColor.join(" or "));