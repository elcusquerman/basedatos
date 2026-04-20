import mongoose from "mongoose";
import Tesoro from "./Tesoro.models.js";

const dragonSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  especie: String,
  edad: Number,
  tesoros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tesoro" }]
});

export default mongoose.model("Dragon", dragonSchema, "dragones");