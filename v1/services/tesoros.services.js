import { isValidObjectId } from "mongoose";
import TesoroModel from "../models/Tesoro.models.js";
import DragonModel from "../models/Dragon.models.js";
//import { actualizarDragonService } from "./dragones.services.js";

export const agregarTesoroService = async (newObj) => {
  const newTesoro = new TesoroModel(newObj);
  const suDragon = await DragonModel.findById(newTesoro.dragon);
  suDragon.tesoros.push(newTesoro._id);
  await DragonModel.findByIdAndUpdate(suDragon._id, { $addToSet: { tesoros: newTesoro } });
  return newTesoro.save();
};

export const obtenerTesorosService = async (page, limit) => {
  page = Number(page) || 1;
  limit = Number(limit) || 3;
  const skip = (page - 1) * limit;
  const cantTotal = await TesoroModel.countDocuments();
  const paginas = Math.ceil(cantTotal / limit);
  const tesoros = await TesoroModel.find().skip(skip).limit(limit).populate("dragon"/*, "-tesoros -edad"*/);
  return { tesoros, paginas, page, limit };
};

export const obtenerTesoroPorIdService = async (id) => {
  if (!isValidObjectId(id)) {
    const error = new Error("Id inválido");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  
  const tesoro = await TesoroModel.findById(id);
  if (!tesoro) {
    const error = new Error("Tesoro no encontrada");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  return tesoro//.populate("dragones");
};

export const actualizarTesoroService = async (id, datosActualizados) => {
  //devuelve el objeto nuevo actualizado si existe el { new: true } || { returnDocument: "after" }
  return await TesoroModel.findByIdAndUpdate(id, datosActualizados, { returnDocument: "after" });
};

export const eliminarTesoroService = async (id) => {
  return await TesoroModel.findByIdAndDelete(id);
};