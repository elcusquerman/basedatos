import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import usuarioModel from "../models/Usuario.models.js";
import { agregarUsuarioService } from "../services/usuarios.services.js";

//POST /login
export const ingresarUsuario = async (req, res) => {
  const email = req.body.email;
  const usuario = await usuarioModel.findOne({email: email});

  console.log(usuario);
  if (!usuario) {
    return res
      .status(401)
      .json({ mensaje: "No existe. Credenciales invalidas" });
  }

  const valid = bcrypt.compareSync(req.body.password, usuario.password);
  console.log("valid creado");

  if (!valid) {
    return res.status(401).json({ mensaje: "Credenciales invalidas" });
  }

  const token = jwt.sign({ email }, process.env.SECRET_JWT, { expiresIn: "1h" });

  console.log("Usuario logueado");
  res.status(200).json({ mensaje: "Login exitoso", token });
};

//POST /register
export const registrarUsuario = async (req, res) => {
  let {email, password} = req.body;
  const isEmail = await usuarioModel.findOne({email: email});
  if (isEmail) {
    return res.status(400).json({ mensaje: "Nombre de usuario ya existe" });
  }
  const hashedPass = bcrypt.hashSync(password, Number(process.env.HASH_ROUNDS));
  const usuario = await agregarUsuarioService({
    email: email,
    password: hashedPass
  });
  const token = jwt.sign(
    { email: email, password: hashedPass },
    process.env.SECRET_JWT,
    { expiresIn: "1h" },
  );
  console.log("email:", email);
  console.log("password:", password);
  return res.status(200).json({ mensaje: "Usuario agregado", email: email, password: password, token });
};