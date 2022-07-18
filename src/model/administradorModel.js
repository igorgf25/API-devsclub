import mongoose from "mongoose";

const adminitradroSchema = new mongoose.Schema(
  {
    senha: {
      type: String,
      required: [true, "O administrador deve informar a senha"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "O administrador deve informar a senha"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Administrador = mongoose.model("Programador", adminitradroSchema);

export default Administrador;
