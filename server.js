import express, { response } from "express";
 import cors from "cors";

 const app = express();
 const porta = 8000;
 app.use(cors({
    origin: "http://127.0.0.1:5500"
 }));

 //simulando bd
 let usuarios = [];
 let idAtual = 1;

app.listen(porta, (request, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:5500: ${porta}`)
});