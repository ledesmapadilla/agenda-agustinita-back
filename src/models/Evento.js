import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
  {
    descripcion: { type: String, required: true, trim: true },
    fecha: { type: Date, required: true },
    seccion: {
      type: String,
      required: true,
      enum: ["lepa", "la-martina", "casa"],
    },
    urgencia: { type: String, enum: ["alta", "baja"], default: "baja" },
    responsable: { type: String, trim: true, default: "" },
    completado: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Evento", eventoSchema);
