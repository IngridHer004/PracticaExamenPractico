import { modelPromociones} from "../models/promociones.model.js";

const test = () => {
    console.log("Conexion con Promociones")
}
export default test

modelPromociones.create({
    descripcion:"Galletas oreo 2x1",
    duracion:"15 dias despues del anuncio"
})