function calcularPrecio() {
  const destino = document.getElementById("destino").value;
  const opcion = document.querySelector('input[name="opcion"]:checked');
  const fechaIda = new Date(document.getElementById("fechaIda").value);
  const fechaVuelta = new Date(document.getElementById("fechaVuelta").value);
  const pasajeros = parseInt(document.getElementById("pasajeros").value);
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = "";

  // Validaciones
  if (!destino || !opcion || isNaN(pasajeros)) {
    resultado.innerHTML = "<p style='color:red'>Por favor, complete todos los campos.</p>";
    return;
  }

  if (opcion.value === "ida_vuelta" && fechaVuelta <= fechaIda) {
    resultado.innerHTML = "<p style='color:red'>La fecha de vuelta debe ser mayor a la de ida.</p>";
    return;
  }

  // Precios base ida/vuelta
  const precios = {
    "COR": 120000,
    "MDZ": 210800,
    "BUE": 135000
  };

  let precioBase = precios[destino];

  // Si es solo ida, se divide a la mitad
  if (opcion.value === "ida") {
    precioBase /= 2;
  }

  const precioFinal = precioBase * 1.21 * pasajeros; // con IVA
  resultado.innerHTML = `<p>Total a pagar: <strong>$${precioFinal.toFixed(2)}</strong></p>`;
}
            