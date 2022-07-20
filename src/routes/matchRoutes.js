import express from 'express';
import * as service from '../service/matchService.js';

const router = express.Router();

router.get('/getall', service.getAll);
router.post('/create', service.createMatch);
router.put('/update/:id', service.updateMatch);
router.delete('/delete/:id', service.deleteMatch);
router.get('/matchprogramador/:id', service.matchProgramador);
router.put('/likeprogramador', service.likeProgramador);
router.get('/matchrealizado/:id', service.matchRealizado);
router.delete('/apagarlike', service.apagarLike);

export default router;
