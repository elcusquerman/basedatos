import { agregarDragonService, obtenerDragonesService, obtenerDragonPorIdService, actualizarDragonService, eliminarDragonService } from "../services/dragones.services.js";

//POST
export const agregarDragon = async (req, res) => {
    const dragon = await agregarDragonService(req.body);
    return res.json({ mensaje: "Dragon agregado", dragon: dragon});    
}

//GET
export const obtenerDragones = async (req, res) => {
    const dragones = await obtenerDragonesService(req.body);
    return res.json({ mensaje: "Dragones obtenidos", dragones: dragones});
}

//GET /:id
export const obtenerDragonPorId = async (req, res) => {
    const dragon = await obtenerDragonPorIdService(req.params.id);
    console.log("🚀 ~ obtenerDragonPorId ~ dragon:", dragon)
    return res.json({ mensaje: "Dragon obtenidos", dragon: dragon});
}

//GET /vacunados
export const obtenerDragonesVacunadas = async (req, res) => {
    const dragon = await obtenerDragonesVacunadasService(req.body);
    return res.json({ mensaje: "Dragones vacunadas obtenidas", dragon: dragon})
}

//PATCH /:id
export const actualizarDragon = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const dragon = await actualizarDragonService(id, datosActualizados);
    return res.json({ mensaje: "Dragon actualizado", dragon: dragon});
}

//DELETE /:id
export const eliminarDragon = async (req, res) => {
  const { id } = req.params;
  const dragon = await eliminarDragonService(id);
  return res.json({ mensaje: "Dragon eliminado", dragon: dragon});
}
