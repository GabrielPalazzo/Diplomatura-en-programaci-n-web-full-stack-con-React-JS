// Inicio cuadrado colores
let btn_green = document.getElementById('btngreen');
let btn_blue = document.getElementById('btnblue');
let btn_pink = document.getElementById('btnpink');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');


function changeColorBtn1() {
  if(btn_green.value == "green") {
    box1.style.background = btn_green.value;
    console.log(btn_green);
  }
}

function changeColorBtn2() {
  if(btn_blue.value == "blue") {
    box2.style.background = btn_blue.value
    console.log(btn_blue) 
  }
}

function changeColorBtn3() {
  if(btn_pink.value == "pink") {
    box3.style.background = btn_pink.value
    console.log(btn_pink) 
  }
}
// Fin cuadrado colores
// 
// 
// 
// Inicio contador de caracteres
function countChars(obj){
  document.getElementById("charNum").innerHTML = obj.value.length+' characters';
}
// Fin contador de caracteres
// 
// 
// 
// Inicio Ejercicio 03
var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];
var aprobados=alumnos.filter(function(alumno){return alumno.nota>=7;});
console.log(aprobados);
console.log(`${aprobados.length} aprobados`);
for(var i=0; i<aprobados.length; i++){
  document.write(`<p>alumno: ${aprobados[i].nombre}, Nota:${aprobados[i].nota}</p>`)
}
// Fin Ejercicio 03
