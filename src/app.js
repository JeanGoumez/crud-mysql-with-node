import express from 'express';
import path from 'path';
import morgan from 'morgan';

import clienteRoutes from './routes/cliente.routes.js';
import cursoRoutes from './routes/curso.routes.js';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use(clienteRoutes);
app.use(cursoRoutes);

// static files
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('server on');
});
