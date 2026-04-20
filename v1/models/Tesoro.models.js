import mongoose from "mongoose";
import Dragon from "./Dragon.models.js";

const tesoroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: String,
  valor: Number,
  dragon: { type: mongoose.Schema.Types.ObjectId, ref: "Dragon", required: true }
});

export default mongoose.model("Tesoro", tesoroSchema);