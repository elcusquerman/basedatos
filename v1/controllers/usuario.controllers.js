import { agregarUsuarioService, obtenerUsuariosService, obtenerUsuarioPorIdService, actualizarUsuarioService, eliminarUsuarioService, obtenerUsuariosVacunadasService } from "../services/usuarios.services.js";

//POST
export const agregarUsuario = async (req, res) => {
    const usuario = await agregarUsuarioService(req.body);
    return res.json({ mensaje: "Usuario agregado", usuario: usuario});    
}

//GET
export const obtenerUsuarios = async (req, res) => {
    const usuarios = await obtenerUsuariosService(req.body);
    return res.json({ mensaje: "Usuarios obtenidos", usuario: usuarios});
}

//GET /:id
export const obtenerUsuarioPorId = async (req, res) => {
    const usuario = await obtenerUsuarioPorIdService(req.params.id);
    return res.json({ mensaje: "Usuarios obtenidos", usuario: usuario});
}

//PATCH /:id
export const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const usuario = await actualizarUsuarioService(id, datosActualizados);
    return res.json({ mensaje: "Usuario actualizado", usuario: usuario});
}

//DELETE /:id
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await eliminarUsuarioService(id);
  return res.json({ mensaje: "Usuario eliminado", usuario: usuario});
}
