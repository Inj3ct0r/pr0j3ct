/* Query para ver todas las tablas creadas en ElephantSQL (ignorar pg_stat_statements)*/

SELECT * FROM information_schema.tables WHERE table_schema = 'public'

/* Tablas que usa Ignacio*/

CREATE TABLE articulo_blog
(
  COD_articulo SERIAL,
  titulo VARCHAR NOT NULL,
  parrafo VARCHAR NOT NULL,
  imagen Varchar NOT NULL,
  PRIMARY KEY (COD_articulo)
);

/* Tablas que usa Fernando*/

CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    profile VARCHAR NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE countries(
    c_code INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE states(
    s_code INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    c_code INT NOT NULL
);

CREATE TABLE cities(
    ci_code INT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    s_code INT NOT NULL
);

CREATE TABLE promotions
(
  name VARCHAR NOT NULL,
  details VARCHAR NOT NULL,
  target VARCHAR NOT NULL,
  preference VARCHAR NOT NULL,
  duration VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  created_date VARCHAR,
  modified_date VARCHAR
)

CREATE TABLE events
(
  name VARCHAR NOT NULL,
  details VARCHAR NOT NULL,
  sponsor VARCHAR NOT NULL,
  preference VARCHAR NOT NULL,
  duration VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  created_date VARCHAR,
  modified_date VARCHAR
)

/* Tablas originalmente planeadas para usar (No están en ElephantSQL) */

CREATE TABLE mae_pais
(
    cod_pais INT NOT NULL,
    descri_corta VARCHAR,
    descri_larga VARCHAR,
    comuna VARCHAR NOT NULL,

    PRIMARY KEY (cod_pais)
);

CREATE TABLE mae_roles
(
    cod_rol INT NOT NULL,
    descri_rol VARCHAR NOT NULL,

    PRIMARY KEY (cod_rol)
);

CREATE TABLE mae_modulo
(
    cod_mod INT NOT NULL,
    descri_mod VARCHAR NOT NULL,

    PRIMARY KEY (cod_mod)
);

CREATE TABLE mae_perfiles
(
    cod_perfil INT NOT NULL,
    descri_perfil VARCHAR NOT NULL,

    PRIMARY KEY (cod_perfil)
);

CREATE TABLE mae_ciudad
(
    cod_ciudad INT NOT NULL,
    cod_pais INT NOT NULL,
    descri_corta VARCHAR,
    descri_larga VARCHAR,
    comuna VARCHAR NOT NULL,

    PRIMARY KEY (cod_ciudad),
    FOREIGN KEY (cod_pais) REFERENCES mae_pais(cod_pais)
);


CREATE TABLE mae_comuna
(
    cod_comuna INT NOT NULL,
    cod_pais INT NOT NULL,
    cod_ciudad INT NOT NULL,

    PRIMARY KEY (cod_comuna),
    FOREIGN KEY (cod_pais) REFERENCES mae_pais(cod_pais),
    FOREIGN KEY (cod_ciudad) REFERENCES mae_ciudad(cod_ciudad)
);

CREATE TABLE usuario
(
    cod_usu INT NOT NULL,
    div INT UNIQUE,
    nombre VARCHAR NOT NULL,
    apellido_P  VARCHAR NOT NULL,
    apellido_M  VARCHAR NOT NULL,
    nacimiento date NOT NULL,
    domicilio VARCHAR,
    ciudad VARCHAR NOT NULL,
    cod_ciudad INT NOT NULL,
    pais VARCHAR,
    cod_pais INT NOT NULL,
    mail VARCHAR,
    telefono INT,
    cod_perfil INT NOT NULL,

    PRIMARY KEY (cod_usu),
    FOREIGN KEY (cod_pais) REFERENCES mae_pais(cod_pais),
    FOREIGN KEY (cod_ciudad) REFERENCES mae_ciudad(cod_ciudad),
    FOREIGN KEY (cod_perfil) REFERENCES mae_perfiles(cod_perfil)
);

CREATE TABLE rol_usuario
(
    cod_usu INT NOT NULL,
    cod_rol INT NOT NULL,

    FOREIGN KEY (cod_usu) REFERENCES usuario(cod_usu),
    FOREIGN KEY (cod_rol) REFERENCES mae_roles(cod_rol)
);

CREATE TABLE perfil_modulo
(
    cod_perfil INT NOT NULL,
    cod_mod INT NOT NULL,

    FOREIGN KEY (cod_perfil) REFERENCES mae_perfiles,
    FOREIGN KEY (cod_mod) REFERENCES mae_modulo
);