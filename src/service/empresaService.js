import * as handler from "./handlerFactory.js"
import Empresa from "../model/empresaModel.js"

const getAll = handler.getAll(Empresa);
const updateEmpresa = handler.updateOne(Empresa);
const deleteEmpresa = handler.deleteOne(Empresa);
const createEmpresa = handler.createOne(Empresa);

export {getAll, updateEmpresa, deleteEmpresa, createEmpresa}