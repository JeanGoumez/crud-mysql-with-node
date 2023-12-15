import { Router } from 'express';
import { renderCliente, deleteCliente, editCliente, updateCliente, createCliente } from '../controllers/clienteController.js';
const router = Router();

router.get('/', renderCliente);
router.post('/estudiante/add', createCliente);
router.get('/estudiante/update/:id', editCliente);
router.post('/estudiante/update/:id', updateCliente);
router.get('/estudiante/delete/:id', deleteCliente);

export default router;
