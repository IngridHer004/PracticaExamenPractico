import { Schema, model } from "mongoose";

export const esquema1 = new Schema({
    nombre:{type:String},
    puesto:{type:String},
    sueldo:{type:Number}
})

export const modeloEmpleados = new model('Empleados',esquema1)