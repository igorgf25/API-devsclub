import * as handler from "./handlerFactory.js"
import Vaga from "../model/vagaModel.js"
import catchAsync from "../utils/catchAsync.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const vagasEmpresa = catchAsync(async (req, res, next) => {
    const doc = await Vaga.find({empresa: ObjectId(req.params.id)})

    res.status(200).json({
        status: 'success',
        data: {
          data: doc,
        },
      });
}) 

const getAll = handler.getAll(Vaga);
const updateVaga = handler.updateOne(Vaga);
const deleteVaga = handler.deleteOne(Vaga);
const createVaga = handler.createOne(Vaga);

export {getAll, updateVaga, deleteVaga, createVaga, vagasEmpresa}