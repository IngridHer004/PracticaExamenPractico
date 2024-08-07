import { Schema, model } from "mongoose";

export const esquema = new Schema({
    nombre:{type:String},
    cantidad:{type:Number}
})

export const modeloProductos = new model('Productos',esquema)