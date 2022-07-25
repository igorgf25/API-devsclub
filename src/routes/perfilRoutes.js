import express from 'express';
import * as service from '../service/perfilService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.post('/create', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador), service.createPerfil);
router.put('/update/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador), service.updatePerfil);
router.delete('/delete/:id', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador), service.deletePerfil);
router.get('/match/:vaga', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa), service.match);

export default router;
