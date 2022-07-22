import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import transporter from '../utils/nodemailer.js';

const resetPassword = (Model) =>
  catchAsync(async (req, res, next) => {
    const { email, token, senha } = req.body;

    const user = await Model.findOne({ email }).select(
      '+password_reset_expires password_reset_token'
    );

    if (!user) {
      return res.status(400).send({ error: 'Usuario não encontrado' });
    }

    if (token !== user.password_reset_token) {
      return res.status(400).send({ error: 'Token invalido' });
    }

    const now = new Date();

    if (now > user.password_reset_expires) {
      return res.status(400).send({ error: 'Token expirado' });
    }

    const salt = await bcrypt.genSalt(10);
    user.senha = await bcrypt.hash(senha, salt);
    await user.save();

    res.send();
  });

const recoverPassword = (Model) =>
  catchAsync(async (req, res, next) => {
    const email = req.params.email;

    try {
      const user = await Model.findOne({ email });

      if (!user) {
        return res.status(400).send({ error: 'User not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await Model.findByIdAndUpdate(user.id, {
        $set: {
          password_reset_token: token,
          password_reset_expires: now,
        },
      });

      transporter.sendMail(
        {
          from: 'contato.devsclub@outlook.com',
          to: user.email,
          subject: 'Recuperação de senha',
          text: `Esqueceu sua senha?
           utilize o token a seguir para recuperar sua senha ${token}`,
        },
        (err) => {
          if (err) {
            return res.status(400).send({
              error:
                'Não foi possível enviar o email de recuperação de senha: ' +
                err.message,
            });
          }

          return res.send();
        }
      );
    } catch (err) {}
  });

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('Nenhum documento encontrado com este ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(
          'Nenhum documento encontrado com este ID' + req.params.id,
          404
        )
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('Nenhum documento encontrado com este ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

const getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let doc = await Model.find();

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export { getAll, getOne, createOne, updateOne, deleteOne, recoverPassword,  resetPassword};
