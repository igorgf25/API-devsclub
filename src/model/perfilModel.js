import mongoose from 'mongoose';
import estudoSchema from './estudoSchema.js';
import experienciaSchema from './experienciaSchema.js';

const perfilSchema = mongoose.Schema({
  programador: {
    type: mongoose.Types.ObjectId,
    unique: true,
    require: [true, 'O perfil deve possuir o id do programador dono dele'],
  },
  nome: {
    type: String,
    require: [true, 'O perfil deve possuir o nome do programador'],
  },
  idade: {
    type: Number,
    min: 16,
    require: [true, 'O perfil deve possuir a idade do programador'],
  },
  telefone: {
    type: String,
    unique: true,
    required: [
      true,
      'O perfil deve possuir o telefone para contato do programador',
    ],
  },
  descricao: {
    type: String,
    require: [true, 'O perfil deve possuir a descrição do programador'],
  },
  estado: {
    type: String,
    require: [
      true,
      'O perfil deve possuir o estado em que de residencia do programador',
    ],
  },
  cidade: {
    type: String,
    require: [
      true,
      'O perfil deve possuir a cidade em que de residencia do programador',
    ],
  },
  linkedin: String,
  skills: [String],
  estudos: [estudoSchema],
  experiencia: [experienciaSchema],
});

const Perfil = mongoose.model('Perfil', perfilSchema);

export default Perfil;
