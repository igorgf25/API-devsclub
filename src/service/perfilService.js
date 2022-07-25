import * as handler from './handlerFactory.js';
import Perfil from '../model/perfilModel.js';
import Vaga from '../model/vagaModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';


//alterar para receber id da vaga
const match = catchAsync(async (req, res, next) => {
  const vaga = await Vaga.findById(req.params.vaga)

  if (!vaga) {
    return next(
      new AppError(
        'Nenhum documento encontrado com este ID' + req.params.id,
        404
      )
    );
  }

  const doc = await Perfil.find().all('skills', vaga.skills);

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const updatePerfil = catchAsync(async (req, res, next) => {
  const doc = await Perfil.findOneAndUpdate(
    {
      programador: `${req.params.id}`,
    },
    req.body,
    { returnOriginal: false }
  );

  if (!doc) {
    return next(
      new AppError(
        'Nenhum documento encontrado com este ID' + req.params.id,
        404
      )
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const getAll = handler.getAll(Perfil);
const deletePerfil = handler.deleteOne(Perfil);
const createPerfil = handler.createOne(Perfil);

export { getAll, updatePerfil, deletePerfil, createPerfil, match };
