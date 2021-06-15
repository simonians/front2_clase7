// Parte 1: 

const imagenes = document.querySelectorAll(".imagen") 
const tarjeta = document.querySelectorAll(".tarjeta") 


imagenes.forEach((imagen, i) => {
    const url = prompt("Introduzca la url de la " + (i+1) + "er imagen");
    imagen.setAttribute("src", url);
    imagen.setAttribute('width', '500px');
    const enlace = document.createElement("a");
    tarjeta[i].appendChild(enlace).appendChild(imagen);
    enlace.setAttribute("href", url);
});




/* Con template 
const contenedor = document.querySelector(".contenedor")
function creatImagen(url) {
    const template = `
    <div class="tarjeta">
        <a href="${url}"><img src="${url}"/></a>
    </div>
    `
    contenedor.innerHTML += template;
}
const totalImagenes = parseInt(prompt("Introduzca la cantidad de imágenes a cargar"));
for (let i = 0; i < totalImagenes; i++) {
    let url = prompt("Introduzca la url de la " + (i+1) + "er imagen");
    creatImagen(url)
}
*/