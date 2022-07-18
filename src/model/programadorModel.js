import mongoose from "mongoose";
import perfilModel from "./perfilModel.js"

const programadorSchema = new mongoose.Schema(
  {
    senha: {
      type: String,
      required: [true, "O programador deve informar a senha"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "O programador deve informar a senha"],
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Programador = mongoose.model("Programador", programadorSchema);

export default Programador;
