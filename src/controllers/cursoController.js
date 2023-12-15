import { pool } from '../db.js';

export const renderCurso = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM curso');
  res.render('cursos', { cursos: rows });
};
export const createCurso = async (req, res) => {
  const { nombre, codigo, credito, profesor } = req.body;
  await pool.query('CALL InsertarCursoConCodigoGenerado(?, ?, ?, ?)', [nombre, codigo, credito, profesor]);
  res.redirect('/curso');
};

export const editCurso = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM curso WHERE idcurso = ?', [id]);
  console.log('[result]', [result]);
  res.render('cursos_edit', { cursos: result[0] });
};
export const updateCurso = async (req, res) => {
  const { id } = req.params;
  const newCurso = req.body;
  await pool.query('UPDATE curso set ? WHERE idcurso = ?', [newCurso, id]);
  res.redirect('/curso');
};

export const deleteCurso = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('UPDATE curso set estado = 0 WHERE idcurso = ?', [id]);
  if (result.affectedRows === 1) {
    res.json({ message: 'Curso deleted' });
  }
  res.redirect('/curso');
};
