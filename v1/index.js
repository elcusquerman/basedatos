import express from "express";
import authRouter from "./routes/auth.routes.js"
import productosRouter from "./routes/productos.routes.js";
import mascotasRouter from "./routes/mascotas.routes.js";
import usuariosRouter from "./routes/usuarios.routes.js";
import dragonesRouter from "./routes/dragones.routes.js";
import tesorosRouter from "./routes/tesoros.routes.js";
import {authJWTMiddleware} from "./middlewares/authJWT.middleware.js";
import aiRouter from "./routes/ai.routes.js";
const router = express.Router({ mergeParams:true });

//rutas no protegidas
router.use("/auth", authRouter);
router.use("/productos", productosRouter);
router.use("/usuarios", usuariosRouter);
router.use("/dragones", dragonesRouter);
router.use("/tesoros", tesorosRouter);
router.use("/ai", aiRouter);

router.use(authJWTMiddleware);
router.use("/mascotas", mascotasRouter);

//rutas protegidas


export default router;