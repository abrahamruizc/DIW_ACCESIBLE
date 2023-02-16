window.onload = inicio;


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

function inicio() {
let boton = document.getElementById("tema");
boton.addEventListener("click", tema);
}

function temaOscuro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "dark");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row navoscuro");
  document.querySelector("footer").setAttribute("class", "position-relative p-5 footeroscuro");
  document.getElementById("logowe").setAttribute("src", "images/imagerunningoscuro.svg");
  
  document.getElementById("contenido").setAttribute("class", "row row-cols-3 cuerpooscuro");
  document.getElementById("registros").setAttribute("class", "entradaoscuro");
  
  document.getElementById("migapan").setAttribute("class", "position-relative migasoscuro rounded-3 mt-4");
  document.getElementById("sesion").setAttribute("class", "form-check-label text-white");
  document.getElementById("usuario").setAttribute("class", "form-label text-white");
  document.getElementById("contrasena").setAttribute("class", "form-label text-white");
  console.log("sale");
}

function temaClaro() {
  console.log("entra");
  document.querySelector("html").setAttribute("data-bs-theme", "light");
  document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
  document.querySelector("nav").setAttribute("class", "d-flex navbar navbar-expand-md rounded-2 row");
  document.querySelector("footer").setAttribute("class", "position-relative p-5");
  document.getElementById("logowe").setAttribute("src", "images/imagerunning.svg");
  
  document.getElementById("contenido").setAttribute("class", "row row-cols-3 cuerpo");
  document.getElementById("registros").setAttribute("class", "");
  
  document.getElementById("migapan").setAttribute("class", "position-relative migas rounded-3 mt-4");
  document.getElementById("sesion").setAttribute("class", "form-check-label");
  document.getElementById("usuario").setAttribute("class", "form-label");
  document.getElementById("contrasena").setAttribute("class", "form-label");
  console.log("sale");
}


function tema() {
  
  if(document.querySelector("html").getAttribute("data-bs-theme") ==="light") {
    temaOscuro();
  } else {
    temaClaro();
  }
  
}
            