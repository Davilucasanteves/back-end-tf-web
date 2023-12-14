drop TABLE if exists partida;

CREATE TABLE partida (
	id serial PRIMARY KEY,
	vencedor varchar (255) not null,
	usuario_id int not null,
	quantidaDeRodadas int not null,
	FOREIGN KEY (usuario_id) REFERENCES usuario (id) on update cascade on delete cascade
);

**Questões a serem vistas:**

coloca o usuario_id nas parada de partida!!!

Não esquece de por os dados de acesso para cada tipo de usuario ao entregar o back-end final no classroom(admin, usuario);
modelo-lógico e consertar conceitual;

Toda vez que for adicionar uma nova entidade no backend deve-se modificar o db/index.js e adicionar ela no /routes e por no index de src;

nao ta deletando arthur;