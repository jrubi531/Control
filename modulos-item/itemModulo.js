export function item() {
    let item = document.createElement("div");
    item.className = "item";

    // Imagen
    let imagen = document.createElement("img");
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6IbLmQ5i7AInvR1BbWxXZiZIjIB_E13DSuw1nS7FAhIOaK6fK0w-5ZKchibMSI-xPznE&usqp=CAU";
    imagen.alt = "producto";

    // Título
    let titulo = document.createElement("h3");
    titulo.textContent = "monito";

    // Texto o descripción
    let texto = document.createElement("p");
    texto.textContent = "Descripción breve del producto.";

    // Añadir al div principal
    item.appendChild(imagen);
    item.appendChild(titulo);
    item.appendChild(texto);

    return item;
}
