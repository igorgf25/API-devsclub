import express from 'express';
import * as service from '../service/programadorService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/roles_list.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.put(
    '/update/:id',
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador),
    service.updateProgramador,
);
router.delete(
    '/delete/:id',
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador),
    service.deleteProgramador,
);
router.get(
    '/getone/:id',
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador),
    service.getOne,
);

export default router;
