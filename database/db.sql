-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema academico
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema academico
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `academico` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `academico` ;

-- -----------------------------------------------------
-- Table `academico`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academico`.`curso` (
  `idcurso` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `codigo` VARCHAR(10) NOT NULL,
  `credito` INT NOT NULL,
  `profesor` VARCHAR(255) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idcurso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `academico`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academico`.`estudiante` (
  `idestudiante` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(255) NOT NULL,
  `sexo` VARCHAR(10) NOT NULL,
  `carrera` VARCHAR(255) NOT NULL,
  `facultad` VARCHAR(255) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`idestudiante`))
ENGINE = InnoDB 
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `academico`.`nota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `academico`.`nota` (
  `idestudiante` INT NOT NULL,
  `idcurso` INT NOT NULL,
  `nota` FLOAT NOT NULL,
  INDEX `idestudiante` (`idestudiante` ASC) VISIBLE,
  INDEX `idcurso` (`idcurso` ASC) VISIBLE,
  CONSTRAINT `nota_ibfk_1`
    FOREIGN KEY (`idestudiante`)
    REFERENCES `academico`.`estudiante` (`idestudiante`),
  CONSTRAINT `nota_ibfk_2`
    FOREIGN KEY (`idcurso`)
    REFERENCES `academico`.`curso` (`idcurso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
