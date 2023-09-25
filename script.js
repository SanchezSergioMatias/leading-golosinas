
fetch("golosinas.json")
fetch(".golosinas.json")

  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("golosinas", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const gridGolosinas = document.getElementById("grid-golosinas");
  const datosGolosinas = JSON.parse(localStorage.getItem("golosinas"));
  console.log(datosGolosinas);
  if (datosGolosinas) {
    datosGolosinas.golosinas.forEach((golosina) => {
      const gridItem = document.createElement("div");

      gridItem.classList.add("grid-item");

      gridItem.innerHTML = `<h4>${golosina.nombre}</h4>`;

      gridItem.addEventListener("click", () => {
        mostrarDetallesGolosina(golosina);
      });

      gridGolosinas.appendChild(gridItem);
    });
  }
});

function mostrarDetallesGolosina(golosina) {
  window.location.href = `golosina.html?id=${golosina.id}`;
}
