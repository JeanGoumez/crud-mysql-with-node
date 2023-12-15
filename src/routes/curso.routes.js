import { Router } from 'express';
import { renderCurso, deleteCurso, editCurso, updateCurso, createCurso } from '../controllers/cursoController.js';
const router = Router();

router.get('/curso', renderCurso);
router.post('/curso/add', createCurso);
router.get('/curso/update/:id', editCurso);
router.post('/curso/update/:id', updateCurso);
router.get('/curso/delete/:id', deleteCurso);

export default router;
