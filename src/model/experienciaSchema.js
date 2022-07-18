import mongoose from "mongoose";

const experienciaSchema = mongoose.Schema(
  {
    titulo: {
      type: String,
      require: [true, "O titulo do cargo deve ser informado"],
    },
    empresa: {
      type: String,
      require: [
        true,
        "O nome da empresa em que foi prestado o serviço deve ser informado",
      ],
    },
    dataEntrada: {
      type: Date,
      require: [
        true,
        "A data do inicio da prestação de serviço deve ser informado",
      ],
    },
    dataSaida: {
      type: Date,
      require: [
        true,
        "A data do termino da prestação de serviço deve ser informado",
      ],
    },
    descricao: {
      type: String,
      require: [true, "A descrição das funções exercidas é obrigatório"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

export default experienciaSchema;