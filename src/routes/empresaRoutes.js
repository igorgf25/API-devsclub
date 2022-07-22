import express from 'express';
import * as service from '../service/empresaService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.put('/update/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.updateEmpresa);
router.delete('/delete/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.deleteEmpresa);

export default router;
