import catchAsync from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const login = Model =>
    catchAsync(async (req, res, next) => {
        const { usuario, senha } = req.body;
        if (!usuario || !senha)
            return res
                .status(400)
                .json({ message: 'Email e senha são obrigatórios.' });
        const usuarioDB = await Model.findOne({ email: `${usuario}` });
        if (!usuarioDB) return res.sendStatus(401);
        const match = await bcrypt.compare(senha, usuarioDB.senha);

        if (match) {
            const roles = usuarioDB.roles;

            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        email: usuarioDB.email,
                        roles: roles,
                    },
                },
                process.env.SECRET_KEY,
                { expiresIn: '1d' },
            );

            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        }
    });

export default login;
