import jwt from 'jsonwebtoken'
import dotenv from "dotenv";


const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.SECRET_KEY,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.email = decoded.UserInfo.email;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

export default verifyJWT;