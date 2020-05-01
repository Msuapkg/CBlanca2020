
var saldo = 0;

var accion = prompt("INDIQUE LA ACCIÓN A REALIZAR\n1:CONSULTAR SALDO\n2:REALIZAR UN DEPOSITO\n3:RETIRAR EFECTIVO");

if (accion == 1) {
    alert("SU SALDO ES DE $"+saldo+"\n\n-OPERACION FINALIZADA-");
}
else if (accion == 2) {
    var paso = prompt("INGRESE LA CANTIDAD A DEPOSITAR")
    var operacion = parseFloat(paso);
    if (operacion <= 0){
        alert("LA OPERACION NO PUEDE REALIZARSE")
    }
    else {
        saldo += operacion;
        alert("SU SALDO ACTUAL ES $"+saldo+"\n\n-OPERACION FINALIZADA-");
    }   
}
else if (accion == 3) {
    var paso = prompt("INGRESE LA CANTIDAD A RETIRAR")
    var operacion = parseFloat(paso);
    if(operacion > saldo) {
        alert("SALDO INSUFICIENTE")
    }
    else {
        saldo -= operacion;
        alert("SU SALDO ACTUAL ES $"+saldo+"\n\n-OPERACION FINALIZADA-");
    }
}
else {
    alert("POR FAVOR SELECCIONE UNA OPERACION VALIDA")
}