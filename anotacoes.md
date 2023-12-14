drop TABLE if exists partida;

CREATE TABLE partida (
	id serial PRIMARY KEY,
	vencedor varchar (255) not null,
	usuario_id not null,
	quantidaDeRodadas not null,
	FOREIGN KEY (usuario_id) REFERENCES usuario (id) on update cascade on delete cascade
);

**Questões a serem vistas:**

Não esquece de por os dados de acesso para cada tipo de usuario ao entregar o back-end final no classroom(admin, usuario);
Dê o link do deploy, vê se ele deixa a documentação de partida ser != das outras;

Testar a auntenticação; ---- Ver se a entidade partida exije x-acsses/token; ----

Toda vez que for adicionar uma nova entidade no backend deve-se modificar o db/index.js e adicionar ela no /routes e por no index de src;