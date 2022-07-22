import mongoose from "mongoose";
import perfilModel from "./perfilModel.js"

const programadorSchema = new mongoose.Schema(
  {
    senha: {
      type: String,
      required: [true, "O programador deve informar a senha"],
    },
    password_reset_token: {
      type: String,
      select: false
    },
    password_reset_expires: {
      type: Date,
      select: false
    },
    email: {
      type: String,
      unique: true,
      required: [true, "O programador deve informar a senha"],
    },
    roles: {
      type: Number,
      default: 1984,
      select: false
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Programador = mongoose.model("Programador", programadorSchema);

export default Programador;
