import express from 'express';
import * as service from '../service/perfilService.js';

const router = express.Router();

router.get('/getall', service.getAll);
router.post('/create', service.createPerfil);
router.put('/update/:id', service.updatePerfil);
router.delete('/delete/:id', service.deletePerfil);
router.post('/match', service.match);

export default router;
