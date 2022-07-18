import * as handler from "./handlerFactory.js"
import Vaga from "../model/vagaModel.js"

const getAll = handler.getAll(Vaga);
const updateVaga = handler.updateOne(Vaga);
const deleteVaga = handler.deleteOne(Vaga);
const createVaga = handler.createOne(Vaga);

export {getAll, updateVaga, deleteVaga, createVaga}