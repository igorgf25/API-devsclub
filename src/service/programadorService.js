import * as handler from './handlerFactory.js';
import login from './authService.js';
import Programador from '../model/programadorModel.js';
import catchAsync from '../utils/catchAsync.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const ObjectId = mongoose.Types.ObjectId;

const getAll = catchAsync(async (req, res, next) => {
  const doc = await Programador.aggregate([
    {
      $lookup: {
        from: 'perfils',
        localField: '_id',
        foreignField: 'programador',
        as: 'perfil',
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

const getOne = catchAsync(async (req, res, next) => {
  const doc = await Programador.aggregate([
    { $match: { _id: ObjectId(`${req.params.id}`) } },
    {
      $lookup: {
        from: 'perfils',
        localField: '_id',
        foreignField: 'programador',
        as: 'perfil',
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

const createProgramador = catchAsync(async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  req.body.senha = await bcrypt.hash(req.body.senha, salt);

  const doc = await Programador.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const updateProgramador = handler.updateOne(Programador);
const deleteProgramador = handler.deleteOne(Programador);
const loginProgramador = login(Programador);
const recoverPassword = handler.recoverPassword(Programador);
const resetPassword = handler.resetPassword(Programador);

export {
  getAll,
  updateProgramador,
  deleteProgramador,
  createProgramador,
  getOne,
  loginProgramador,
  recoverPassword,
  resetPassword
};
