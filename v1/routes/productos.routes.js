import express from "express";
import { agregarProducto, obtenerProductos, obtenerProductoPorId, actualizarProducto, eliminarProducto } from "../controllers/producto.controllers.js";

const router = express.Router({
    mergeParams: true
});

router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);
router.post("/", agregarProducto);
router.patch("/:id", actualizarProducto);
router.delete("/:id", eliminarProducto);

export default router;