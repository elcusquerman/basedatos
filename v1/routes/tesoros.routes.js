import express from "express";
import { agregarTesoro, obtenerTesoros, obtenerTesoroPorId, actualizarTesoro, eliminarTesoro } from "../controllers/tesoros.controllers.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", obtenerTesoros);
router.get("/:id", obtenerTesoroPorId);
router.post("/", agregarTesoro);
router.patch("/:id", actualizarTesoro);
router.delete("/:id", eliminarTesoro);

export default router;