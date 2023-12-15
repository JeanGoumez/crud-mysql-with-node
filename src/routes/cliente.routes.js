import { Router } from 'express';
import { renderCliente, deleteCliente, editCliente, updateCliente, createCliente } from '../controllers/clienteController.js';
const router = Router();

router.get('/', renderCliente);
router.post('/add', createCliente);
router.get('/update/:id', editCliente);
router.post('/update/:id', updateCliente);
router.get('/delete/:id', deleteCliente);

export default router;
