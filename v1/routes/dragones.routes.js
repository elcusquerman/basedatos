import express from "express";
import { agregarDragon, obtenerDragones, obtenerDragonPorId, actualizarDragon, eliminarDragon } from "../controllers/dragones.controllers.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", obtenerDragones);
router.get("/:id", obtenerDragonPorId);
router.post("/", agregarDragon);
router.patch("/:id", actualizarDragon);
router.delete("/:id", eliminarDragon);

export default router;