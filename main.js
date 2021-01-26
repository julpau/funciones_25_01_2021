function sumar(a,b){
    return a+b;
}
alert('PRIMERO VAMOS A CALCULAR UNA SUMA.');
let numero1 = prompt('Ingrese el número 1');
let numero2 = prompt('Ingrese el número 2');
let total = sumar(parseInt(numero1),parseInt(numero2));
alert('Ver Total de la Suma en la consola.');
console.log('Total de la suma: ',numero1,' + ',numero2,' = ',total);

alert('AHORA VAMOS A CALCULAR EDADES.');
function SaberLaEdad(FechaNace,FechaHoy){
    return FechaHoy - FechaNace;
}
let FechaNace = prompt('Ingrese su año de nacimiento');
let FechaHoy = prompt('Ingrese el año para el cual desea calcular la edad');
let edad = SaberLaEdad(parseInt(FechaNace),parseInt(FechaHoy));
console.log('Si usted nació en el año ',FechaNace,', en el año ',FechaHoy,' tendrá ',edad, ' años.');

let Year = new Date();
let YearToday = Year.getFullYear();
let anos = SaberLaEdad(parseInt(FechaNace), parseInt(YearToday));
console.log('Si usted nació en el año ',FechaNace,', este año tendrá ',anos, ' años cumplidos.');