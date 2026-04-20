import { isValidObjectId } from "mongoose";
import MascotaModel from "../models/Mascota.models.js";

export const agregarMascotaService = async (newObj) => {
  return new MascotaModel(newObj).save();
};

export const obtenerMascotasService = async () => {
  return await MascotaModel.find();
};

export const obtenerMascotaPorIdService = async (id) => {
  if (!isValidObjectId(id)) {
    const error = new Error("Id inválido");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  
  const mascota = await MascotaModel.findById(id);
  if (!mascota) {
    const error = new Error("Mascota no encontrada");
    error.status = 404;
    error.details = { id };
    throw error;
  }
  return mascota;
};

export const obtenerMascotasVacunadasService = async () => {
  return await MascotaModel.find({ vacunado: true });
}

export const actualizarMascotaService = async (id, datosActualizados) => {
  //devuelve el objeto nuevo actualizado si existe el { new: true } || { returnDocument: "after" }
  return await MascotaModel.findByIdAndUpdate(id, datosActualizados, { returnDocument: "after" });
};

export const eliminarMascotaService = async (id) => {
  return await MascotaModel.findByIdAndDelete(id);
};