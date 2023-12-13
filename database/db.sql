CREATE DATABASE academico;

use academico;

 CREATE TABLE estudiante (
  idestudiante INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  carrera VARCHAR(255) NOT NULL,
  facultad VARCHAR(255) NOT NULL,
  PRIMARY KEY (idestudiante)
);
CREATE TABLE curso (
  idcurso INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  código VARCHAR(10) NOT NULL,
  credito INT NOT NULL,
  profesor VARCHAR(255) NOT NULL,
  PRIMARY KEY (idcurso)
);

CREATE TABLE nota (
  idestudiante INT NOT NULL,
  idcurso INT NOT NULL,
  nota FLOAT NOT NULL,
  FOREIGN KEY (idestudiante) REFERENCES estudiante (idestudiante),
  FOREIGN KEY (idcurso) REFERENCES curso (idcurso)
);