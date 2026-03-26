import express, { request, response } from "express";
 import cors from "cors";

 const app = express();
 const porta = 8000;
 app.use(cors({
    origin: "http://127.0.0.1:5500"
 }));

 //simulando bd
 let usuarios = [];
 let idAtual = 1;

 /**
  * GET /usuarios
  * Método: GET
  * Descrição: Retorna todos os usuários
  */
app.get("/usuarios", (request, response) => {
    response.json(usuarios);
})

/**
 * GET /usuarios/:id
 * Método: GET
 * Descrição: Retorna um usuario específico
 */
app.get("/usuarios/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const usuario = usuario.find(u => u.id === id); // esta tentando localizar o id do usuário específico

    if (!usuario) {
        return response.status(404)
        .json({
            mensagem: "Usuário não encontrado!"
        });
    }

    response.json(usuario);
});

/**
 * POST /usuarios
 * Método: POST
 * Descrição: Criar novo usuário
 * Espera receber: {nome: sting, email: string}
 */
app.post("/usuarios", (request, response) => {
    const nome = request.body.nome;
    const email = request.body.email;

    if (!nome || email) {
        return response.status(400)
        .json({
            mensagem: "Nome ou Email não informado"
        });
    }

    const novoUsuario = {
        id: idAtual++,
        nome: nome,
        email: email
    }

    usuarios.push(novoUsuario);

    response.status(201).json(novoUsuario);

});

/**
 * PUT usuario/:id
 * Método: PUT
 * Descrição: Atualição completa de em usuario existente completamente
 * Espera receber: {nome: sting, email: string}
 * Parametro: id
 */
app.put("usuarios/:id", (request, response) => {
    const id =parseInt(request.params.id);
    const nome =request.body.nome;
    const email =request.body.email;

    const indexUsuario = usuarios.findIndex(u => u.id === id);

    if (indexUsuario === -1){
        return response.status(404)
        .json ({
            mensagem: "Usuário não encontardo"
        });
    }

    usuarios[indexUsuario0] = {
        id: id,
        nome: nome,
        email: email
    }

    response.json(usuarios[indexUsuario]);
});

app.listen(porta, (request, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:5500: ${porta}`);
});
