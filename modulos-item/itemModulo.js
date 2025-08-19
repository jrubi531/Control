export function item(producto) {
    // Contenedor principal
    let item = document.createElement("div");
    item.className = "item";

    // Tarjeta interna
    let tarjeta = document.createElement("div");
    tarjeta.className = "producto";

    // Título
    let h3 = document.createElement("h3");
    h3.textContent = producto.title;

    // Imagen
    let img = document.createElement("img");
    img.src = producto.image;
    img.alt = producto.title;

    // Descripción
    let descripcion = document.createElement("p");
    descripcion.textContent = producto.description;

    // Precio
    let precio = document.createElement("span");
    precio.className = "precio";
    precio.textContent = `$${producto.price}`;

    // Armar tarjeta
    tarjeta.appendChild(h3);
    tarjeta.appendChild(img);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);

    item.appendChild(tarjeta);

    // Evento click opcional
    item.addEventListener("click", () => {
        item.classList.add("verde");
        document.querySelector(".header")?.classList.add("ocultar");
    });

    return item;
}
