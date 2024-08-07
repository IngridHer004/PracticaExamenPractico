import { modeloEmpleados } from "../models/empleados.model.js";

const test = () => {
    console.log("Conexion a empleados")
}
export default test

modeloEmpleados.create({
    nombre:"Juan Perez Rodriguez",
    puesto:"Cajero zona centro",
    sueldo:1500
})