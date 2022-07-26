import * as handler from './handlerFactory.js';
import Vaga from '../model/vagaModel.js';
import catchAsync from '../utils/catchAsync.js';
import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const vagasEmpresa = catchAsync(async (req, res, next) => {
    const doc = await Vaga.find({ empresa: ObjectId(req.params.id) });

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

const vagasAtivasEmpresa = catchAsync(async (req, res, next) => {
    const doc = await Vaga.find({
        empresa: ObjectId(req.params.id),
        status: true,
    });

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

const vagasDesativadasEmpresa = catchAsync(async (req, res, next) => {
    const doc = await Vaga.find({
        empresa: ObjectId(req.params.id),
        status: false,
    });

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

const desativarVaga = catchAsync(async (req, res, next) => {
    const doc = await Vaga.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { status: false },
        {
            new: true,
            runValidators: true,
        },
    );

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

const ativarVaga = catchAsync(async (req, res, next) => {
    const doc = await Vaga.findOneAndUpdate(
        { _id: ObjectId(req.params.id) },
        { status: true },
        {
            new: true,
            runValidators: true,
        },
    );

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

const getAll = handler.getAll(Vaga);
const updateVaga = handler.updateOne(Vaga);
const deleteVaga = handler.deleteOne(Vaga);
const createVaga = handler.createOne(Vaga);
const getOne = handler.getOne(Vaga);

export {
    getAll,
    updateVaga,
    deleteVaga,
    createVaga,
    vagasEmpresa,
    vagasAtivasEmpresa,
    vagasDesativadasEmpresa,
    desativarVaga,
    ativarVaga,
    getOne,
};
