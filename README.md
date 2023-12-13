# back-end-tf-web

Trabalho que visa desenvolver o back-end do nosso projeto AdivinheSô.

**Questões a serem vistas:**
perguntar arthur sobre o patch de partida, ver os XXXX;
User no router de partida, tem?
ver linha amarela no index de db;

table de partida deu systex error;

Não esquece de por os dados de acesso para cada tipo de usuario ao entregar o back-end final no classroom(admin, usuario);
modelo-lógico e consertar conceitual;

Toda vez que for adicionar uma nova entidade no backend deve-se modificar o db/index.js e adicionar ela no /routes e por no index de src;

## Integrantes

- [Daví Lucas Antunes Neves](https://github.com/Davilucasanteves)
- [Renato Neres Costa](https://github.com/RenatoNC2)
- [Ronan Mendes Nogueira Couto](https://github.com/Carl-Johnson-LS)
- [Samuel da Silva Caires](https://github.com/SamuelCaires15)
- [Thallys Henriques Vilela](https://github.com/liscadoido)
- [Walisson Fernandes Dias](https://github.com/Murynga)


## Ferramentas utilizadas

Para realizarmos o desenvolvimento do banco de dados e disponibilizá-lo para a utilização de sua API, usamos o site "Neon.tech". 

## Documentação

**Links**

[Link da imagem do Modelo-Conceitual](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/Modelo-Conceitual.png) <br/>
[Link da imagem do Modelo-Lógico](XXXXX)<br/>
[Link do arquivo DDL](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/DDL.sql)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<br/>

### Funções de cada entidade

### - Funções de Usuário:

- **Cadastrar novo usuário**:

Descrição: Insere um novo usuário no banco de dados.

Endpoint: https://back-end-tf-web.vercel.app/usuario

Tipo de requisição: POST

Body:
{
  "nome": "Fulano",
  "senha": "111",
  "email": "f@email.com"
}

<br/>


- **Listar todos os usuários e as suas respectivas informações**:

Descrição: Lista todos os usuários e suas respectivas informações.

Endpoint: https://back-end-tf-web.vercel.app/usuarios

Tipo de requisição: GET

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body


<br/>

- **Listar as informações de apenas um usuário**:

Descrição: Lista as informações do usuário requisitado.

Endpoint: https://back-end-tf-web.vercel.app/usuario/:id

Tipo de requisição: GET

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body


<br/>

- **Alterar as informações de um usuário identificado**:

Descrição: Modifica informações de um usuário específico.

Endpoint: https://back-end-tf-web.vercel.app/usuario

Tipo de requisição: PATCH

Observações: É necessário token de acesso via header (x-access-token)

Body:
{
  "id": 1,
  "nome": "Fulano",
  "senha": "111",
  "email": "f@email.com"
}

<br/>


- **Excluir as informações de um usuário identificado**:

Descrição: Exclui as informações de um certo usuário.

Endpoint: https://back-end-tf-web.vercel.app/usuario/:id

Tipo de requisição: DELETE

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.

<br/>

- **Autenticar o usuário**: 

Descrição: Verifica se realmente é o usuário que está usando tal aplicação.

Endpoint: https://back-end-tf-web.vercel.app/login

Tipo de requisição: POST

Observações: É necessário que o usuário esteja cadastrado.

Body: 
{
  "senha": "111",
  "email": "f@email.com"
}

<br/>

---

<br/>

### - Funções de Admin:

- **Cadastrar novo admin**:

Descrição: Insere um novo admin no banco de dados.

Endpoint: https://back-end-tf-web.vercel.app/admin

Tipo de requisição: POST

Body:
{
  "nome": "Davi",
  "senha": "888",
  "email": "d@email.com"
}

<br/>


- **Listar todos os admins e as suas respectivas informações**:

Descrição: Lista todos os admins e suas respectivas informações.

Endpoint: https://back-end-tf-web.vercel.app/admins

Tipo de requisição: GET

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body

<br/>


- **Listar as informações de apenas um admin**:

Descrição: Lista as informações de um certo admin.

Endpoint: https://back-end-tf-web.vercel.app/admin/:id

Tipo de requisição: GET

Observações: É necessário token de acesso via header (x-access-token)

Body: nesse caso não há body

<br/>


- **Alterar as informações de um admin identificado**:

Descrição:  Modifica informações de um admin específico.

Endpoint: https://back-end-tf-web.vercel.app/admin

Tipo de requisição: PATCH

Observações: É necessário token de acesso via header (x-access-token)

Body:
{
  "id": 1,
  "nome": "Davi",
  "senha": "888",
  "email": "d@email.com"
}

<br/>

- **Excluir as informações de um admin identificado**:

Descrição:  Exclui as informações de um certo admin.  

Endpoint: https://back-end-tf-web.vercel.app/admin/:id

Tipo de requisição: DELETE

Observações: É necessário token de acesso via header (x-access-token)

Body: não há body nesse caso.


<br/>

- **Autenticar o admin**: 

Descrição:  Verifica se realmente é o admin que está usando tal aplicação.

Endpoint: https://back-end-tf-web.vercel.app/login

Tipo de requisição: POST

Observações: É necessário que o usuário esteja cadastrado.

Body: 
{
  "senha": "888",
  "email": "d@email.com"
}

<br/>

---

<br/>

### - Funções de Partida:

**URL API: https://back-end-tf-web.vercel.app**

- **Cadastrar uma nova partida**:

[POST] /partida

Descrição: Cadastra uma nova partida.

Body:
{
  "quantidadeDeRodadas": "XXX",
  "vencedor": "XXX"
}

<br/>

- **Requisitar informações de todas as partidas**:

[GET] /partidas

Descrição: Requisita dados de todas as partidas.

Body: não há body nesse caso.

<br/>

- **Requisitar informações de uma partida**:

[GET] /partida/:id

Descrição: Requisita dados de um única partida.

Body: não há body nesse caso.

<br/>

- **Deletar uma partida**:

[DELETE] /partida/:id

Descrição: Deleta uma partida.

Body: não há body nesse caso.

<br/>

- **Atualizar dados de uma partida**:

[PATCH] /partida

Descrição: Modifica dados de uma partida.
OBS: ele é em caso de os dados da partida serem armazenados no bd durante a partida.

Body:
{
  "id": "1",
  "quantidadeDeRodadas": "XXX",
  "vencedor": "XXX"
}

<br/>

---
