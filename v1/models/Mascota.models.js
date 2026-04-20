import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true },
  edad: Number,
  vacunado: { type: Boolean, default: false }
});

export default mongoose.model("Mascota", mascotaSchema);