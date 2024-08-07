import { modeloRebajas } from "../models/rebajas.model.js";

const test = () => {
    console.log("Conexion con Rebajas")
}
export default test

modeloRebajas.create({
    descripcion:"Sueros 455ml de la marca Suerox de $50.00 a $30.00",
    tiempo:"Todo el mes despues de su publicacion"
})