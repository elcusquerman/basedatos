import { isValidObjectId } from "mongoose";
import DragonModel from "../models/Dragon.models.js";

export const agregarDragonService = async (newObj) => {
  return new DragonModel(newObj).save();
};

export const obtenerDragonesService = async () => {
  return await DragonModel.find().populate("tesoros");
};

export const obtenerDragonPorIdService = async (id) => {
  if (!isValidObjectId(id)) {
    const error = new Error("Id inválido");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  
  const dragon = await DragonModel.findById(id);
  console.log("🚀 ~ obtenerDragonPorIdService ~ dragon:", dragon)
  if (!dragon) {
    const error = new Error("Dragon no encontrada");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  return dragon.populate("tesoros");
};

export const actualizarDragonService = async (id, datosActualizados) => {
  //devuelve el objeto nuevo actualizado si existe el { new: true } || { returnDocument: "after" }
  return await DragonModel.findByIdAndUpdate(id, datosActualizados, { returnDocument: "after" });
};

export const eliminarDragonService = async (id) => {
  return await DragonModel.findByIdAndDelete(id);
};