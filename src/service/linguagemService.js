import * as handler from './handlerFactory.js';
import Linguagem from '../model/linguagemModel.js';
import catchAsync from '../utils/catchAsync.js';

const getStack = catchAsync(async (req, res, next) => {
    const doc = await Linguagem.find({classificacao: `${req.params.stack}`})

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
})

const getAll = handler.getAll(Linguagem);
const updateLinguagem = handler.updateOne(Linguagem);
const deleteLinguagem = handler.deleteOne(Linguagem);
const createLinguagem = handler.createOne(Linguagem);
const getOne = handler.getOne(Linguagem);

export {
    getAll,
    updateLinguagem,
    deleteLinguagem,
    createLinguagem,
    getOne,
    getStack,
};
