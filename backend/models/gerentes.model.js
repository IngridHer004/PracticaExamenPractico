import { model } from "mongoose";
import { esquema1 } from "./empleados.model.js";

export const modeloGerentes = new model('Gerentes',esquema1)