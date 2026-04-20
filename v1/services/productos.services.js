import ProductoModel from "../models/Producto.model.js";

export const agregarProductoService = async (newObj) => {
  return new ProductoModel(newObj).save();
};

export const obtenerProductosService = async () => {
  return await ProductoModel.find();
};

export const obtenerProductoPorIdService = async (id) => {
  return await ProductoModel.findById(id);
};

export const actualizarProductoService = async (id, datosActualizados) => {
  //devuelve el objeto nuevo actualizado si existe el { new: true } || { returnDocument: "after" }
  return await ProductoModel.findByIdAndUpdate(id, datosActualizados, { returnDocument: "after" });
};

export const eliminarProductoService = async (id) => {
  return await ProductoModel.findByIdAndDelete(id);
};