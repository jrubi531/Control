function seccion(){
                       //mètodo
let seccion = document.createElement("section");

let h1 = document.createElement("h1");
h1.className = "titulo";
h1.innerText = "hola mundo";
seccion.appendChild(h1);

let p = document.createElement("p");
p.innerText = "introduccion a javascript";
seccion.appendChild(p);

return seccion;
}

document.body.appendChild(seccion());
