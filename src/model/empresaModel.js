import mongoose from "mongoose";

const empresaSchema = mongoose.Schema(
  {
    senha: {
      type: String,
      required: [true, "A empresa deve informar a senha"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "A empresa deve informar a senha"],
    },
    telefone: {
      type: String,
      unique: true,
      required: [true, "A empresa deve informar um telefone para contato"],
    },
    nome: {
      type: String,
      required: [true, "A empresa  deve informar seu nome"],
    },
    cnpj: {
      type: String,
      unique: true,
      required: [true, "A empresa  deve informar seu CNPJ"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Empresa = mongoose.model("Empresa", empresaSchema);

export default Empresa;
