import mongoose from 'mongoose';

const matchSchema = mongoose.Schema({
  empresa_id: {
    type: mongoose.Types.ObjectId,
    require: [true, 'Um match deve possuir uma empresa'],
  },
  like_empresa: {
    type: Boolean,
    default: true,
  },
  programador_id: {
    type: mongoose.Types.ObjectId,
    require: [true, 'Um match deve possuir um programador'],
  },
  like_programador: {
    type: Boolean,
    default: false,
  },
  vaga_id: {
    type: mongoose.Types.ObjectId,
    require: [true, 'Um match deve possuir uma vaga'],
  },
});

const Match = mongoose.model('Match', matchSchema);

export default Match;
