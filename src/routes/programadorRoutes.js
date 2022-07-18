import express from 'express';
import * as service from '../service/programadorService.js';

const router = express.Router();

router.get('/getall', service.getAll);
router.post('/create', service.createProgramador);
router.put('/update/:id', service.updateProgramador);
router.delete('/delete/:id', service.deleteProgramador);
router.get('/getone/:id', service.getOne);

export default router;
