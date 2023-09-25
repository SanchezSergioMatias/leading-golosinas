document.addEventListener("DOMContentLoaded", () => {
  const detalleGolosina = document.getElementById("detalle-golosina");
  const volverBtn = document.getElementById("volverBtn");

  const urlParams = new URLSearchParams(window.location.search);
  const idGolosina = urlParams.get("id");

  const datosGolosinas = JSON.parse(localStorage.getItem("golosinas"));

  volverBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const golosinaSeleccionada = datosGolosinas.golosinas.find(
    (golosina) => golosina.id == idGolosina
  );

  if (golosinaSeleccionada) {
    const contenedorDetallesGolosina = document.createElement("div");
    contenedorDetallesGolosina.classList.add("detalles-golosina");
    contenedorDetallesGolosina.innerHTML = `
    <h2>${golosinaSeleccionada.nombre}</h2>
    <p>ID: ${golosinaSeleccionada.id}</p>
    <p>Descripción: ${golosinaSeleccionada.descripcion}</p>
    <p>Precio: $${golosinaSeleccionada.precio.toFixed(2)}</p>
    <img src="${golosinaSeleccionada.imagen}" alt="${
      golosinaSeleccionada.nombre
    }">
    `;

    detalleGolosina.appendChild(contenedorDetallesGolosina);
  }
});
