import * as handler from './handlerFactory.js';
import Perfil from '../model/perfilModel.js';
import catchAsync from '../utils/catchAsync.js';

const match = catchAsync(async (req, res, next) => {
  const doc = await Perfil.find().all('skills', req.body.skills);

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
