// Examen Recuperatorio con fecha de entrega el dia 28/06
let cantidadDeProductos: number = Number(
  prompt("Ingrese la cantidad de productos que compró ")
);
let nombresDeProductos: string[] = new Array(cantidadDeProductos);
let cantidadDeEseProducto: number[] = new Array(cantidadDeProductos);
let precioUnitario: number[] = new Array(cantidadDeProductos);
let sumaTotal: number = 0;

function cargarProductos(arreglo: string[], longitud: number) {
  let i: number;

  for (i = 0; i < longitud; i++) {
    arreglo[i] = prompt("Ingrese el nombre del " + (i + 1) + "º producto");
    //    console.log(arreglo[i]);
  }
}
function cargarLaCantidadProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    arreglo[i] = Number(
      prompt("Ingrese la Cantidad que compro del " + (i + 1) + "º producto")
    );
  }
}
function cargarPrecioUnitarioDelProducto(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    arreglo[i] = Number(
      prompt(" Ingrese el precio del producto en posicion " + (i + 1))
    );
  }
}
function mostrarProductos(arreglo: number[], longitud: number) {
  let i: number;
  for (i = 0; i < longitud; i++) {
    //    console.log(arreglo[i]);
  }
}

function calcularCompra(
  arregloA: number[],
  arregloB: number[],
  cantidad: number
) {
  let i: number;
  for (i = 0; i < cantidad; i++) {
    sumaTotal += arregloA[i] * arregloB[i];
  }
  return sumaTotal;
}

cargarProductos(nombresDeProductos, cantidadDeProductos);
cargarLaCantidadProductos(cantidadDeEseProducto, cantidadDeProductos);
cargarPrecioUnitarioDelProducto(precioUnitario, cantidadDeProductos);
console.log("Los Productos comprados son: ");
mostrarProductos(nombresDeProductos, cantidadDeProductos);
console.log("Las cantidades de los productos comprados: ");
mostrarProductos(cantidadDeEseProducto, cantidadDeProductos);
console.log("El Precio de los productos comprados: ");
mostrarProductos(precioUnitario, cantidadDeProductos);
console.log(
  "El costo total de la compra es: " +
    calcularCompra(cantidadDeEseProducto, precioUnitario, cantidadDeProductos)
);
if (sumaTotal < 1000) {
  console.log(
    "Su compra debe ser mayor a $1000 no esta participando en ningun sorteo"
  );
} else if (sumaTotal > 1000 && sumaTotal < 2000) {
  console.log("Usted esta participando por un TV Led");
} else if (sumaTotal > 2000 && sumaTotal < 3000) {
  console.log("Usted esta participando por una moto 0Km");
} else if (sumaTotal > 3000) {
  console.log("Usted esta participando por un Auto 0Km");
}
