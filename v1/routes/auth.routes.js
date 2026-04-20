import express from "express";
import { ingresarUsuario, registrarUsuario } from "../controllers/auth.controllers.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { usuarioSchema } from "../validatos/usuarios.validators.js";

const router = express.Router({mergeParams: true});

router.post("/login", ingresarUsuario);
router.post("/register", validateBodyMiddleware(usuarioSchema), registrarUsuario);

export default router;