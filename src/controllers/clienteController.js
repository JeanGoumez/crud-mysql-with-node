import { pool } from '../db.js';

const controller = {};

export const renderCliente = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM estudiante');
  res.render('clientes', { estudiantes: rows });
};
export const createCliente = async (req, res) => {
  const newCliente = req.body;
  await pool.query('INSERT INTO estudiante set ?', [newCliente]);
  res.redirect('/');
};

export const editCliente = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query('SELECT * FROM estudiante WHERE idestudiante = ?', [id]);
  console.log('[result]', [result]);
  res.render('clientes_edit', { estudiantes: result[0] });
};
export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const newCliente = req.body;
  await pool.query('UPDATE estudiante set ? WHERE idestudiante = ?', [newCliente, id]);
  res.redirect('/');
};

export const deleteCliente = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('UPDATE estudiante set estado = 0 WHERE idestudiante = ?', [id]);
  if (result.affectedRows === 1) {
    res.json({ message: 'Cliente deleted' });
  }
  res.redirect('/');
};
