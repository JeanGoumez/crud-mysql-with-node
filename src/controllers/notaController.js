import { pool } from '../db.js';

const controller = {};

export const renderNota = async (req, res) => {
  const [rows] = await pool.query(
    'SELECT A.idnota, B.nombre as nombreestudiante, C.nombre as nombrecurso, A.nota FROM academico.nota as A left join academico.estudiante as B ON A.idestudiante = B.idestudiante left join academico.curso as C ON A.idcurso = C.idcurso'
  );
  const [rowsEstudiante] = await pool.query('SELECT idestudiante, nombre as nombreestudiante FROM estudiante WHERE estado = 1');
  const [rowsCurso] = await pool.query('SELECT idcurso, nombre as nombrecurso FROM curso WHERE estado = 1');
  res.render('notas', { notas: rows, rowsEstudiante, rowsCurso });
};
export const createNota = async (req, res) => {
  const newNota = req.body;
  await pool.query('INSERT INTO nota set ?', [newNota]);
  res.redirect('/nota');
};
