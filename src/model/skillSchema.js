import mongoose from "mongoose";

const skillSchema = mongoose.Schema(
  {
    nivel: {
      type: String,
      require: [true, "O nível da skill deve ser informado"],
    },
    linguagem: {
      type: String,
      require: [true, "A linguagem deve ser informado"],
    },
    framework: {
      type: String,
      require: [true, "O framework deve ser informado"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default skillSchema;
