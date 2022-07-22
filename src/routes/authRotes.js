import express from 'express';
import * as serviceEmpresa from '../service/empresaService.js';
import * as serviceProgramador from '../service/programadorService.js';

const router = express.Router();

router.post('/empresa/create', serviceEmpresa.createEmpresa);
router.post('/empresa/login', serviceEmpresa.loginEmpresa);

router.post('/programador/create', serviceProgramador.createProgramador);
router.post('/programador/login', serviceProgramador.loginProgramador);

export default router;