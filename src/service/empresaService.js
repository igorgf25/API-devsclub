import * as handler from './handlerFactory.js';
import login from './authService.js';
import Empresa from '../model/empresaModel.js';
import catchAsync from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';

const createEmpresa = catchAsync(async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  req.body.senha = await bcrypt.hash(req.body.senha, salt);

  const doc = await Empresa.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
});

const getAll = handler.getAll(Empresa);
const updateEmpresa = handler.updateOne(Empresa);
const deleteEmpresa = handler.deleteOne(Empresa);
const loginEmpresa = login(Empresa);

export { getAll, updateEmpresa, deleteEmpresa, createEmpresa, loginEmpresa };
