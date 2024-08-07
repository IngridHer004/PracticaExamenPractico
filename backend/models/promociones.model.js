import { Schema, model } from "mongoose";

export const esquema2 = new Schema({
    descripcion:{type:String},
    duracion:{type:String}
})
export const modelPromociones = new model('Promociones',esquema2)