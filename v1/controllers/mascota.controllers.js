import { agregarMascotaService, obtenerMascotasService, obtenerMascotaPorIdService, actualizarMascotaService, eliminarMascotaService, obtenerMascotasVacunadasService } from "../services/mascotas.services.js";

//POST
export const agregarMascota = async (req, res) => {
    const mascota = await agregarMascotaService(req.body);
    return res.json({ mensaje: "Mascota agregado", mascota: mascota});    
}

//GET
export const obtenerMascotas = async (req, res) => {
    const { vacunados } = req.query;
    if (vacunados === "true") {
        const mascotas = await obtenerMascotasVacunadasService();
        return res.status(200).json(mascotas);
    }
    const mascotas = await obtenerMascotasService(req.body);
    return res.json({ mensaje: "Mascotas obtenidos", mascota: mascotas});
}

//GET /:id
export const obtenerMascotaPorId = async (req, res) => {
    const mascota = await obtenerMascotaPorIdService(req.params.id);
    return res.json({ mensaje: "Mascotas obtenidos", mascota: mascota});
}

//GET /vacunados
export const obtenerMascotasVacunadas = async (req, res) => {
    const mascota = await obtenerMascotasVacunadasService(req.body);
    return res.json({ mensaje: "Mascotas vacunadas obtenidas", mascota: mascota})
}

//PATCH /:id
export const actualizarMascota = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    const mascota = await actualizarMascotaService(id, datosActualizados);
    return res.json({ mensaje: "Mascota actualizado", mascota: mascota});
}

//DELETE /:id
export const eliminarMascota = async (req, res) => {
  const { id } = req.params;
  const mascota = await eliminarMascotaService(id);
  return res.json({ mensaje: "Mascota eliminado", mascota: mascota});
}
