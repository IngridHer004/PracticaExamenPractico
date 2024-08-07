import { modeloFaltantes } from "../models/productosFaltantes.model.js";

const test = () => {
    console.log("Conexion con Productos Faltantes")
}
export default test

modeloFaltantes.create({
    nombre:"Chicles orbit",
    cantidad:120
})