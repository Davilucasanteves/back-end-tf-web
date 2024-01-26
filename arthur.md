 <form id="form" action="">
        Email: <input id="email" name="email" type="text"> <br>
        Senha: <input id="senha" name="senha" type="password">
        <input type="submit">
    </form>
    <p id="content"></p>
    <script>
        function logSubmit(event) {
            event.preventDefault();


            const formEmail = document.getElementById("email");
            const formSenha = document.getElementById("senha");
            const pcontent = document.getElementById("content");

            console.log(formEmail);

            const inforeq = {
                method: 'POST',
                body: JSON.stringify({
                    email: formEmail.value,
                    senha: formSenha.value,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
            fetch("https://back-end-tf-web.vercel.app/usuario/login", inforeq)
                .then(function (res) {
                    console.log(res);
                    return res.json();
                })
                .then((data) => {
                    console.log(data.token);
                    pcontent.innerHTML = `Usuário burro salve seu token aí: ${data.token}`;
                    mostraUsuario(data.token);
                }).catch(
                    (error) => console.log(error)
                );


        }



        const form = document.getElementById("form");
        form.addEventListener("submit", logSubmit);


        function mostraUsuario(token) {
            console.log('cheguei')
            const inforeq = {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'x-access-token': token,
                },
            }
            fetch("https://back-end-tf-web.vercel.app/usuarios/", inforeq)
                .then(function (res) {
                    console.log(res);
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                }).catch(
                    (error) => console.log(error)
                );

        }

        // login();

    </script>
</body>

</html>