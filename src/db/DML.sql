SELECT * FROM usuario
SELECT * FROM usuario WHERE id = $1
INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3)
DELETE FROM usuario WHERE id = $1
UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4
SELECT * FROM usuario WHERE email = $1 AND senha = $2

SELECT * FROM admin
SELECT * FROM admin WHERE id = $1
INSERT INTO admin (nome,senha,email) VALUES ($1,$2,$3)
DELETE FROM admin WHERE id = $1
UPDATE admin SET nome = $1, email = $2, senha = $3 WHERE id = $4
SELECT * FROM admin WHERE email = $1 AND senha = $2