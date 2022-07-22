import * as handler from './handlerFactory.js';
import Match from '../model/matchModel.js';
import mongoose from 'mongoose';
import catchAsync from '../utils/catchAsync.js';

const ObjectId = mongoose.Types.ObjectId;

const matchRealizado = catchAsync(async (req, res, next) => {
  const array1 = await Match.aggregate([
    {
      $match: {
        vaga_id: ObjectId(`${req.params.id}`),
        like_programador: true,
        super_like: true,
      },
    },
    {
      $lookup: {
        from: 'perfils',
        localField: 'programador_id',
        foreignField: 'programador',
        as: 'programador',
      },
    },
  ]);

  const array2 = await Match.aggregate([
    {
      $match: {
        vaga_id: ObjectId(`${req.params.id}`),
        like_programador: true,
        super_like: false,
      },
    },
    {
      $lookup: {
        from: 'perfils',
        localField: 'programador_id',
        foreignField: 'programador',
        as: 'programador',
      },
    },
  ]);

  const doc = array1.concat(array2);

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const matchProgramador = catchAsync(async (req, res, next) => {
  const doc = await Match.aggregate([
    {
      $match: {
        programador_id: ObjectId(`${req.params.id}`),
        like_programador: false,
      },
    },
    {
      $lookup: {
        from: 'vagas',
        localField: 'vaga_id',
        foreignField: '_id',
        as: 'vaga',
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const likeProgramador = catchAsync(async (req, res, next) => {
  const doc = await Match.findOneAndUpdate(
    {
      programador_id: ObjectId(`${req.body.programador}`),
      vaga_id: ObjectId(`${req.body.vaga}`),
    },
    {
      like_programador: true,
      super_like: req.body.super_like,
    },
    {
      returnOriginal: false,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const apagarLike = catchAsync(async (req, res, next) => {
  const doc = await Match.findOneAndDelete({
    programador_id: ObjectId(`${req.body.programador}`),
    vaga_id: ObjectId(`${req.body.vaga}`),
  });

  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const getAll = handler.getAll(Match);
const updateMatch = handler.updateOne(Match);
const deleteMatch = handler.deleteOne(Match);
const createMatch = handler.createOne(Match);

export {
  getAll,
  updateMatch,
  deleteMatch,
  createMatch,
  matchProgramador,
  likeProgramador,
  matchRealizado,
  apagarLike,
};
