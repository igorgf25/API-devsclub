import express from 'express';
import * as service from '../service/administradorService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.get('/getone/:id', verifyRoles(ROLES_LIST.Admin), service.getOne);
router.post(
    '/create',
    verifyRoles(ROLES_LIST.Admin),
    service.createAdministrador,
);
router.put(
    '/update/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.updateAdministrador,
);
router.delete(
    '/delete/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.deleteAdministrador,
);

export default router;
