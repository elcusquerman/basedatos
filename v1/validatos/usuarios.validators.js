import Joi from "joi";

export const usuarioSchema = Joi.object({
    email: Joi.string().email().trim().lowercase().required(),
    password: Joi.string().trim().min(6).pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/).required(),
});