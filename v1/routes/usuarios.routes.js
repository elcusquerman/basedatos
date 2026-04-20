import express from "express";
import { agregarUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario } from "../controllers/usuario.controllers.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);
router.post("/", agregarUsuario);
router.patch("/:id", actualizarUsuario);
router.delete("/:id", eliminarUsuario);

export default router;