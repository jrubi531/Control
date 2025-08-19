import { item } from "../../modulos-item/itemModulo.js";
import { productos } from "../../DataBase/productos.js";

export function seccion1() {
    let seccion = document.createElement("section");
    seccion.className = "seccion-1";

    productos.forEach(producto => {
        seccion.appendChild(item(producto));
    });

    return seccion;
}
