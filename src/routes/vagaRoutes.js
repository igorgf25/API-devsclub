import express from 'express';
import * as service from '../service/vagaService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.post('/create', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.createVaga);
router.put('/update/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.updateVaga);
router.delete('/delete/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.deleteVaga);
router.get('/vagasempresa/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.vagasEmpresa);

export default router;
