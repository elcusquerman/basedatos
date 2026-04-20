import { agregarProductoService, obtenerProductosService, obtenerProductoPorIdService, actualizarProductoService, eliminarProductoService } from "../services/productos.services.js";

//POST
export const agregarProducto = async (req, res) => {
    const producto = await agregarProductoService(req.body);
    return res.json({ mensaje: "Producto agregado", producto: producto});    
}

//GET
export const obtenerProductos = async (req, res) => {
    const productos = await obtenerProductosService(req.body);
    return res.json({ mensaje: "Productos obtenidos", producto: productos});
}

//GET /:id
export const obtenerProductoPorId = async (req, res) => {
    const producto = await obtenerProductoPorIdService(req.params.id);
    return res.json({ mensaje: "Productos obtenidos", producto: producto});
}

//PATCH /:id
export const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const producto = await actualizarProductoService(id, datosActualizados);
    return res.json({ mensaje: "Producto actualizado", producto: producto});
}

//DELETE /:id
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await eliminarProductoService(id);
  return res.json({ mensaje: "Producto eliminado", producto: producto});
}
