import usuarioModel from "../models/Usuario.models.js";

export const agregarUsuarioService = async (newObj) => {
  return new usuarioModel(newObj).save();
};

export const obtenerUsuariosService = async () => {
  return await usuarioModel.find();
};

export const obtenerUsuarioPorIdService = async (id) => {
  return await usuarioModel.findById(id);
};

export const obtenerUsuariosVacunadasService = async () => {
  return await usuarioModel.find({ vacunado: true });
}

export const actualizarUsuarioService = async (id, datosActualizados) => {
  //devuelve el objeto nuevo actualizado si existe el { new: true } || { returnDocument: "after" }
  return await usuarioModel.findByIdAndUpdate(id, datosActualizados, { returnDocument: "after" });
};

export const eliminarUsuarioService = async (id) => {
  return await usuarioModel.findByIdAndDelete(id);
};