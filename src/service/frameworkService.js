import * as handler from './handlerFactory.js';
import Framework from '../model/frameworkModel.js';
import catchAsync from '../utils/catchAsync.js';

const getByLinguague = catchAsync(async (req, res, next) => {
    const doc = await Framework.find({linguagem: `${req.params.linguagem}`})

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
})

const getAll = handler.getAll(Framework);
const updateFramework = handler.updateOne(Framework);
const deleteFramework = handler.deleteOne(Framework);
const createFramework = handler.createOne(Framework);
const getOne = handler.getOne(Framework);

export {
    getAll,
    updateFramework,
    deleteFramework,
    createFramework,
    getOne,
    getByLinguague,
};
