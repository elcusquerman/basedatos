import express from "express";
import { agregarMascota, obtenerMascotas, obtenerMascotaPorId, actualizarMascota, eliminarMascota, obtenerMascotasVacunadas } from "../controllers/mascota.controllers.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", obtenerMascotas);
router.get("/:id", obtenerMascotaPorId);
router.get("/vacunados", obtenerMascotasVacunadas);
router.post("/", agregarMascota);
router.patch("/:id", actualizarMascota);
router.delete("/:id", eliminarMascota);

export default router;