import { agregarTesoroService, obtenerTesorosService, obtenerTesoroPorIdService, actualizarTesoroService, eliminarTesoroService } from "../services/tesoros.services.js";

//POST
export const agregarTesoro = async (req, res) => {
    const tesoro = await agregarTesoroService(req.body);
    return res.json({ mensaje: "Tesoro agregado", tesoro: tesoro });
}

//GET
export const obtenerTesoros = async (req, res) => {
    let page;
    let limit;
    if (req.query.page) page = req.query.page;
    if (req.query.limit) page = req.query.limit;
    const tesoros = await obtenerTesorosService(page, limit);
    return res.json({ mensaje: "Tesoros obtenidos", tesoros: tesoros });
}

//GET /:id
export const obtenerTesoroPorId = async (req, res) => {
    const tesoro = await obtenerTesoroPorIdService(req.params.id);
    return res.json({ mensaje: "Tesoro obtenidos", tesoro: tesoro });
}

//GET /vacunados
export const obtenerTesorosVacunadas = async (req, res) => {
    const tesoro = await obtenerTesorosVacunadasService(req.body);
    return res.json({ mensaje: "Tesoros vacunadas obtenidas", tesoro: tesoro })
}

//PATCH /:id
export const actualizarTesoro = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const tesoro = await actualizarTesoroService(id, datosActualizados);
    return res.json({ mensaje: "Tesoro actualizado", tesoro: tesoro });
}

//DELETE /:id
export const eliminarTesoro = async (req, res) => {
    const { id } = req.params;
    const tesoro = await eliminarTesoroService(id);
    return res.json({ mensaje: "Tesoro eliminado", tesoro: tesoro });
}
