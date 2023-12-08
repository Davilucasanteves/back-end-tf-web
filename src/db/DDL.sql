CREATE TABLE usuario (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	senha VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO usuario (nome, senha, email) VALUES 
('Fulano', '111','f@email.com'), 
('Siclano', '222','s@email.com'), 
('Beltrano', '333','b@email.com');

CREATE TABLE admin (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) UNIQUE NOT NULL,
	senha VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL
);

INSERT INTO admin (nome, senha, email) VALUES 
('Davi', '888','d@email.com'), 
('Siclano', '222','s@email.com'), 
('Beltrano', '333','b@email.com')