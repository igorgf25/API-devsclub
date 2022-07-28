import * as handler from './handlerFactory.js';
import Administrador from '../model/administradorModel.js';
import login from './authService.js';
import bcrypt from 'bcryptjs';
import catchAsync from '../utils/catchAsync.js';

const createAdministrador = catchAsync(async (req, res, next) => {
    const salt = await bcrypt.genSalt(10);
    req.body.senha = await bcrypt.hash(req.body.senha, salt);

    const doc = await Administrador.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});
const getAll = handler.getAll(Administrador);
const updateAdministrador = handler.updateOne(Administrador);
const deleteAdministrador = handler.deleteOne(Administrador);
const loginAdministrador = login(Administrador);
const getOne = handler.getOne(Administrador);

export {
    getAll,
    updateAdministrador,
    deleteAdministrador,
    createAdministrador,
    getOne,
    loginAdministrador,
};
