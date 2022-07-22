import catchAsync from '../utils/catchAsync.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const login = (Model) => catchAsync(async (req, res, next) => {
    const {usuario, senha} = req.body
    if (!usuario || !senha) return res.status(400).json({ 'message': 'Email e senha são obrigatórios.' });
    const usuarioDB = await Model.find({email: `${usuario}`})
    if (!usuarioDB) return res.sendStatus(401);
    console.log(usuarioDB[0]._id)
    const match = await bcrypt.compare(senha, usuarioDB[0].senha)
  
    if (match) {
      const roles = usuarioDB[0].roles
  
      const accessToken = jwt.sign({
        "UserInfo": {
          "email": usuarioDB[0].email,
          "roles": roles
        }
      },
      process.env.SECRET_KEY,
      {expiresIn: '1d'}
      );
  
      res.json({accessToken})
    } else {
      res.sendStatus(401)
    }
  
  })

export default login