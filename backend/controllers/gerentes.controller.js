import { modeloGerentes } from "../models/gerentes.model.js";

const test = () => {
    console.log("conexion con Gerentes")
}
export default test

modeloGerentes.create({
    nombre:"Alondra Gutierrez Ramirez", 
    puesto:"Gerente zona cetro",
    sueldo:20000
})