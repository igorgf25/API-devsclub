import * as handler from "./handlerFactory.js"
import Programador from "../model/programadorModel.js"
import catchAsync from "../utils/catchAsync.js";

const getAll = catchAsync(async (req, res, next) => {
    const doc = await Programador.aggregate([{
        $lookup: {
            from: "perfils",
            localField: "_id",
            foreignField: "programador",
            as: "perfil",
        }
    }])

    res.status(200).json({
        status: "success",
        data: {
          data: doc,
          
        },
      });
})

const updateProgramador = handler.updateOne(Programador);
const deleteProgramador = handler.deleteOne(Programador);
const createProgramador = handler.createOne(Programador);

export {getAll, updateProgramador, deleteProgramador, createProgramador}