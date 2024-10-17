let formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.prevent();
  /* cambie var por let en todo el archivo */
  let n = formulario.elements[0]
  let e = formulario.elements[1]
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = e.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)
  /* le di un poquito de "formato" */
  if (nombre.length === 0) {
    // añadi ; en la sig linea
    n.classList.add("error");
  } else {
    //añadi condicionales 
    n.classList.remove("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    n.classList.remove("error");
  }
  //elimine unos parentesis en (edad > 18 && edad < 120))
  if (nombre.length > 0 && edad > 18 && edad < 120) {
    //añadi ; en la sig linea
  agregarInvitado(nombre, edad, nacionalidad);
  }
  //añadi ; en la sig linea
};

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
//elimine la variable corteLinea
document.body.appendChild(document.createElement("br"));
document.body.appendChild(botonBorrarGlobal);

function agregarInvitado(nombre, edad, nacionalidad) {
//cambie el if else if por un objeto json 
const nacionalidad = {
  ar: "Argentina",
  mx: "Mexicana",
  vnzl: "Venezolana",
  per: "Peruana"
};
//añadi ; 
let lista = document.getElementById("lista-de-invitados");
let elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);
// la funcion estaba repetida, elimine una
function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

  // edite el boton, no consegui que funcionara
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  elementoLista.appendChild(document.createElement("br"));
  elementoLista.appendChild(botonBorrar);
//con estas lineas trate de que al hacer click se eliminara uno de los elementos de la lista de invitados
  botonBorrar.onclick = function() {
    elementoLista.remove(); 
  };
}
