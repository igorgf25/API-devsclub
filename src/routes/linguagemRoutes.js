import express from 'express';
import * as service from '../service/linguagemService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.get('/getstack/:stack', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador), service.getStack);
router.post(
    '/create',
    verifyRoles(ROLES_LIST.Admin),
    service.createLinguagem,
);
router.put(
    '/update/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.updateLinguagem,
);
router.delete(
    '/delete/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.deleteLinguagem,
);


export default router;
