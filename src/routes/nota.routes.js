import { Router } from 'express';
import { renderNota, createNota } from '../controllers/notaController.js';
const router = Router();

router.get('/nota', renderNota);
router.post('/nota/add', createNota);

export default router;
