# back-end-tf-web
Trabalho que visa desenvolver o back-end do nosso projeto AdivinheSô.

## Integrantes

- [Daví Lucas Antunes Neves](https://github.com/Davilucasanteves)
- [Renato Neres Costa](https://github.com/RenatoNC2)
- [Ronan Mendes Nogueira Couto](https://github.com/Carl-Johnson-LS)
- [Samuel da Silva Caires](https://github.com/SamuelCaires15)
- [Thallys Henriques Vilela](https://github.com/liscadoido)
- [Walisson Fernandes Dias](https://github.com/Murynga)

## Documentação

[Link da imagem do Modelo-Conceitual](https://github.com/Davilucasanteves/back-end-tf-web/blob/main/src/db/Modelo-Conceitual.png)


### - Funções de Usuário:

- Cadastrar novo usuário:

Descrição: Insere um novo usuário no banco de dados.

Endpoint: https://back-end-tf-web.vercel.app/usuario

Tipo de requisição: POST

Body:
{
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email-usuario@email.com"
}




- Listar todos os usuários e as suas respectivas informações:

Descrição: Lista todos os usuários e suas respectivas informações.

Endpoint: https://back-end-tf-web.vercel.app/usuarios

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>




- Listar as informações de apenas um usuário:

Descrição: Lista as informações do usuário requisitado.

Endpoint: https://back-end-tf-web.vercel.app/usuario/

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>




- Alterar as informações de um usuário identificado:

Descrição: Modifica informações de um usuário específico.

Endpoint: https://back-end-tf-web.vercel.app/usuario/

Tipo de requisição: PATCH

Body:
{
  "id": 1,
  "nome": "Nome do usuário",
  "senha": "***",
  "email": "email_usuario@email.com"
}




- Excluir as informações de um usuário identificado:

Descrição: Exclui as informações de um certo usuário.

Endpoint: https://back-end-tf-web.vercel.app/usuario/

Tipo de requisição: DELETE

Body:
{
  "_id": 1
}




- Autenticar o usuário: 

Descrição: Verifica se realmente é o usuário que está usando tal aplicação.

Endpoint: https://back-end-tf-web.vercel.app/usuario

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>


- Outras interações que podem ser necessárias na sua aplicação:




### - Funções de Admin:

- Cadastrar novo admin:

Descrição: Insere um novo admin no banco de dados.

Endpoint: https://back-end-tf-web.vercel.app/admin

Tipo de requisição: POST

Body:
{
  "nome": "Nome do admin",
  "senha": "***",
  "email": "email-admin@email.com"
}




- Listar todos os admins e as suas respectivas informações:

Descrição: Lista todos os admins e suas respectivas informações.

Endpoint: https://back-end-tf-web.vercel.app/admins

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>




- Listar as informações de apenas um admin:

Descrição: Lista as informações de um certo admin.

Endpoint: https://back-end-tf-web.vercel.app/admin/

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>




- Alterar as informações de um admin identificado:

Descrição:  Modifica informações de um usuário específico.

Endpoint: https://back-end-tf-web.vercel.app/admin/

Tipo de requisição: PATCH

Body:
{
  "id": 1,
  "nome": "Nome do admin",
  "senha": "***",
  "email": "email_admin@email.com"
}




- Excluir as informações de um admin identificado:

Descrição:  Exclui as informações de um certo admin.   //um admin pode excluir oto admin?

Endpoint: https://back-end-tf-web.vercel.app/admin/

Tipo de requisição: DELETE

Body: 
{
  "_id": 1
}




- Autenticar o admin: 

Descrição:  Verifica se realmente é o admin que está usando tal aplicação.

Endpoint: https://back-end-tf-web.vercel.app/admin

Tipo de requisição: GET

Body: <só tem body se tiver o token! no caso de get e delete, post e patch já tem>



que mais nois põe pu admin???

- Outras interações que podem ser necessárias na sua aplicação:


