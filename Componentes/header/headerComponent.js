export function header() {
  // Crear el elemento header
  let header = document.createElement("header");
  header.className = "header"; 

  // Crear el título
  let titulo = document.createElement("h1");
  titulo.className = "titulo";
  titulo.innerText = "@Yane";

  // Crear el div del logo
  let divLogo = document.createElement("div");
  divLogo.className = "div-logo";
  divLogo.innerText = "🦊"; 
  
  // Agregar los elementos al header
  header.appendChild(titulo);
  header.appendChild(divLogo);

  return header;
}
