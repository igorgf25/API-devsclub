import mongoose from "mongoose";

const estudoSchema = mongoose.Schema(
  {
    tipo: {
      type: String,
      require: [true, "O estudo deve conter um tipo"],
    },
    instituicao: {
      type: String,
      require: [true, "O estudo deve conter a instituição emissora"],
    },
    status: {
      type: String,
      require: [true, "O estudo deve conter seu estado de conclusão"],
    },
    dataConclusao: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default estudoSchema;
