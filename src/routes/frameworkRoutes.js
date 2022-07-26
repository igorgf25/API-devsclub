import express from 'express';
import * as service from '../service/frameworkService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.get('/getbylinguagem/:linguagem', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador), service.getByLinguague);
router.post(
    '/create',
    verifyRoles(ROLES_LIST.Admin),
    service.createFramework,
);
router.put(
    '/update/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.updateFramework,
);
router.delete(
    '/delete/:id',
    verifyRoles(ROLES_LIST.Admin),
    service.deleteFramework,
);


export default router;
