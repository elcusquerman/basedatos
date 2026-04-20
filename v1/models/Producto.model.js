import mongoose from "mongoose";
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String }
});

export default mongoose.model("Producto", productoSchema); // => ("Avion", avionSchema, "avions")
