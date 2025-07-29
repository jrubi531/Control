// Importa la función 'header' desde el archivo headerComponent.js
import { header } from "./Componentes/header/headerComponent.js";
import { seccion1 } from "./Componentes/seccion/seccion1.js";
import { item } from "./modulos-item/itemModulo.js";


// Define una función que crea una sección <section>
function seccion() {
  // Crea un elemento <section>
  let seccion = document.createElement("section");

  // Agrega el componente <header> dentro de la sección
  seccion.appendChild(header());
  seccion.appendChild(seccion1());
 seccion.appendChild(item());

  // Devuelve toda la sección construida
  return seccion;
}

// Inserta la sección generada en el <body> del documento
document.body.appendChild(seccion());
