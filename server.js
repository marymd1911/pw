import express, { response } from "express";
import { request } from "node:http";

const app = express();
const porta = 8000;

app.use(express.static("public"));

const curiosidades = [
    { id: 1, texto: "O polvo tem três corações" }, 
    { id: 2, texto: "O espaço é completamente silencioso" }, 
    { id: 3, texto: "A Torre Eiffel pode crescer alguns centímetros no calor" }, 
    { id: 4, texto: "O cérebro humano consome cerca de 20% da energia do corpo" }, 
    { id: 5, texto: "A Antártida é o maior deserto do mundo" }, 
    { id: 6, texto: "Os tubarões existem há mais tempo que as árvores" }, 
    { id: 7, texto: "O coração de uma baleia azul pode pesar mais de 180 kg" }, 
    { id: 8, texto: "A luz do Sol leva cerca de 8 minutos para chegar à Terra" }, 
    { id: 9, texto: "O universo está em constante expansão" }, 
    { id: 10, texto: "Os golfinhos têm nomes próprios entre si" }, 

    { id: 11, texto: "O corpo humano brilha no escuro, mas não é visível a olho nu" }, 
    { id: 12, texto: "Os polvos conseguem resolver problemas complexos" }, 
    { id: 13, texto: "O som não se propaga no vácuo" }, 
    { id: 14, texto: "Os morcegos são os únicos mamíferos que voam" }, 
    { id: 15, texto: "O DNA humano é 99,9% igual entre todas as pessoas" }, 
    { id: 16, texto: "As abelhas conseguem reconhecer rostos humanos" }, 
    { id: 17, texto: "O gelo flutua porque é menos denso que a água líquida" }, 
    { id: 18, texto: "O Japão é formado por mais de 6 mil ilhas" }, 
    { id: 19, texto: "Os gatos não sentem o gosto doce" }, 
    { id: 20, texto: "A Terra é ligeiramente achatada nos polos" }, 

    { id: 21, texto: "Os corvos conseguem usar ferramentas" }, 
    { id: 22, texto: "O sangue das lagostas é azul por causa do cobre" },
    { id: 23, texto: "Existem fungos que controlam o comportamento de insetos" }, 
    { id: 24, texto: "Relâmpagos são mais quentes que a superfície do Sol" }, 
    { id: 25, texto: "A gravidade mantém os planetas em órbita" }, 
    { id: 26, texto: "O corpo humano produz cerca de 1 litro de saliva por dia" }, 
    { id: 27, texto: "As plantas se comunicam por sinais químicos" },
    { id: 28, texto: "O tempo passa mais devagar em campos gravitacionais fortes" }, 
    { id: 29, texto: "Os elefantes têm excelente memória" }, 
    { id: 30, texto: "O deserto do Saara já foi uma região verde" }, 

    { id: 31, texto: "A Terra já teve dias mais curtos no passado" },
    { id: 32, texto: "Os cangurus não conseguem andar para trás" }, 
    { id: 33, texto: "Alguns peixes sobrevivem fora da água por um tempo" }, 
    { id: 34, texto: "O universo observável tem bilhões de galáxias" },
    { id: 35, texto: "A luz se comporta como onda e partícula" }, 
    { id: 36, texto: "Os ursos polares têm pele preta sob o pelo branco" }, 
    { id: 37, texto: "Os polvos podem passar por espaços muito pequenos" },
    { id: 38, texto: "Buracos negros deformam o espaço-tempo" }, 
    { id: 39, texto: "O vento é causado por diferenças de pressão no ar" }, 
    { id: 40, texto: "A água pode existir em três estados: sólido, líquido e gasoso" }
];

app.get("/", (request, response) => {
    response.send("<h1>API rodando!</h1>");
});

app.get("/curiosidades", (request, response) => {
    response.status(200).json(curiosidades);
});

app.get("/curiosidades/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const curiosidade = curiosidades.find(c => c.id == id);

    if (!curiosidade) {
        return response.status(404).json({
            mensagem: "Curiosidade não localizada!"
        });
    }

    response.status(200).json(curiosidade);
});

app.listen(porta, (request, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`);
});