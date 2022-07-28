import express from 'express';
import cors from 'cors';
import programadorRouter from './routes/programadorRoutes.js';
import empresaRouter from './routes/empresaRoutes.js';
import perfilRouter from './routes/perfilRoutes.js';
import vagaRouter from './routes/vagaRoutes.js';
import matchRouter from './routes/matchRoutes.js';
import authRouter from './routes/authRotes.js';
import linguagemRouter from './routes/linguagemRoutes.js'
import frameworkRouter from './routes/frameworkRoutes.js'
import administradorRouter from './routes/administradorRoutes.js'
import verifyJWT from './middleware/verifyJWT.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('x-powered-by');
app.use('/', express.static('public'));
app.use('', authRouter);
app.use(verifyJWT);
app.use('/programador', programadorRouter);
app.use('/empresa', empresaRouter);
app.use('/perfil', perfilRouter);
app.use('/vaga', vagaRouter);
app.use('/match', matchRouter);
app.use('/linguagem', linguagemRouter);
app.use('/framework', frameworkRouter);
app.use('/administrador', administradorRouter);

// Rota padrão
app.get('/api', (req, res) => {
    res.status(200).json({
        message: "API Dev's CLub",
        version: '1.0.0',
    });
});

// Rota de exceções
app.use(function (req, res) {
    res.status(404).json({
        errors: [
            {
                value: `${req.originalUrl}`,
                msg: `A rota ${req.originalUrl} não existe nesta API`,
                param: 'routes',
            },
        ],
    });
});

export default app;
