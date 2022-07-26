import express from 'express';
import * as service from '../service/matchService.js';
import verifyRoles from '../middleware/verifyRoles.js';
import ROLES_LIST from '../config/ROLES_LIST.js';

const router = express.Router();

router.get('/getall', verifyRoles(ROLES_LIST.Admin), service.getAll);
router.post(
    '/create',
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Empresa),
    service.createMatch,
);
router.put('/update/:id', verifyRoles(ROLES_LIST.Admin), service.updateMatch);
router.delete(
    '/delete/:id',
    verifyRoles(ROLES_LIST.Programador, ROLES_LIST.Admin),
    service.deleteMatch,
);
router.get(
    '/matchprogramador/:id',
    verifyRoles(ROLES_LIST.Programador, ROLES_LIST.Admin),
    service.matchProgramador,
);
router.put(
    '/likeprogramador',
    verifyRoles(ROLES_LIST.Programador, ROLES_LIST.Admin),
    service.likeProgramador,
);
router.get(
    '/matchrealizado/:id',
    verifyRoles(ROLES_LIST.Empresa, ROLES_LIST.Admin),
    service.matchRealizado,
);
router.delete(
    '/apagarlike',
    verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Programador),
    service.apagarLike,
);

export default router;
