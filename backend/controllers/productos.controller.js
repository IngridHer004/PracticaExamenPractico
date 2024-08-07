import { modeloProductos } from "../models/produtos.model.js";

const test = () => {
    console.log("Conexion con Productos")
}
export default test

modeloProductos.create({
    nombre:"Kinder Delice",
    cantidad:300
})