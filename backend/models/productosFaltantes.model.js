import { model } from "mongoose";
import { esquema } from "./produtos.model.js";

export const modeloFaltantes = new model('Productos_faltantes',esquema)