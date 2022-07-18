import mongoose from "mongoose";

const frameworkSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      require: [true, "O framework deve possuir um nome"],
    },
    linguagem: {
      type: String,
      require: [true, "O framework deve possuir uma linguagem"]
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Framework = mongoose.model("Framework", frameworkSchema);

export default Framework;
