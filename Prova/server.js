
import express from "express";

const app = express();
const porta = 8000;

app.use(express.static("public"));

const musicas = [
    { id: 1, nome: "Bohemian Rhapsody", banda: "Queen", estilo: "Rock" },
    { id: 2, nome: "Billie Jean", banda: "Michael Jackson", estilo: "Pop" },
    { id: 3, nome: "Smells Like Teen Spirit", banda: "Nirvana", estilo: "Grunge" },
    { id: 4, nome: "Garota de Ipanema", banda: "Tom Jobim", estilo: "MPB" },
    { id: 5, nome: "Mas Que Nada", banda: "Jorge Ben Jor", estilo: "MPB" },
    { id: 6, nome: "Águas de Março", banda: "Elis Regina", estilo: "MPB" },
    { id: 7, nome: "Evidências", banda: "Chitãozinho e Xororó", estilo: "Sertanejo" },
    { id: 8, nome: "Ai Se Eu Te Pego", banda: "Michel Teló", estilo: "Sertanejo" },
    { id: 9, nome: "Infiel", banda: "Marília Mendonça", estilo: "Sertanejo" },
    { id: 10, nome: "Tempo Perdido", banda: "Legião Urbana", estilo: "Rock Nacional" },
    { id: 11, nome: "Anna Júlia", banda: "Los Hermanos", estilo: "Rock Nacional" },
    { id: 12, nome: "Pro Dia Nascer Feliz", banda: "Barão Vermelho", estilo: "Rock Nacional" },
    { id: 13, nome: "Dionysus", banda: "BTS", estilo: "K-pop" },
    { id: 14, nome: "Cat and Dog", banda: "TXT", estilo: "K-pop" },
    { id: 15, nome: "Bite me", banda: "Enhypen", estilo: "K-pop" },
    { id: 16, nome: "Shape of You", banda: "Ed Sheeran", estilo: "Pop" },
    { id: 17, nome: "Rolling in the Deep", banda: "Adele", estilo: "Pop" },
    { id: 18, nome: "Blinding Lights", banda: "The Weeknd", estilo: "Pop" },
    { id: 19, nome: "Lose Yourself", banda: "Eminem", estilo: "Hip Hop" },
    { id: 20, nome: "SICKO MODE", banda: "Travis Scott", estilo: "Trap" },
    { id: 21, nome: "God's Plan", banda: "Drake", estilo: "Hip Hop" },
    { id: 22, nome: "Baile de Favela", banda: "MC João", estilo: "Funk" },
    { id: 23, nome: "Bum Bum Tam Tam", banda: "MC Fioti", estilo: "Funk" },
    { id: 24, nome: "Envolvimento", banda: "MC Loma", estilo: "Funk" },
    { id: 25, nome: "Animals", banda: "Martin Garrix", estilo: "Eletronica" },
    { id: 26, nome: "Titanium", banda: "David Guetta", estilo: "Eletronica" },
    { id: 27, nome: "Lean On", banda: "Major Lazer", estilo: "Eletronica" },
    { id: 28, nome: "Enter Sandman", banda: "Metallica", estilo: "Metal" },
    { id: 29, nome: "Duality", banda: "Slipknot", estilo: "Metal" },
    { id: 30, nome: "Hotel California", banda: "Eagles", estilo: "Rock" },
    { id: 31, nome: "Hey Jude", banda: "The Beatles", estilo: "Rock" },
    { id: 32, nome: "Ninguém Explica Deus", banda: "Preto no Branco", estilo: "Gospel" },
    { id: 33, nome: "Raridade", banda: "Anderson Freire", estilo: "Gospel" },
    { id: 34, nome: "Is This Love", banda: "Bob Marley", estilo: "Reggae" },
    { id: 35, nome: "Sorri, Sou Rei", banda: "Natiruts", estilo: "Reggae" },
    { id: 36, nome: "Do I Wanna Know?", banda: "Arctic Monkeys", estilo: "Indie" },
    { id: 37, nome: "Sweater Weather", banda: "The Neighbourhood", estilo: "Indie" },
    { id: 38, nome: "Despacito", banda: "Luis Fonsi", estilo: "Latina" },
    { id: 39, nome: "Taki Taki", banda: "DJ Snake", estilo: "Latina" },
    { id: 40, nome: "Counting Stars", banda: "OneRepublic", estilo: "Pop" },
    { id: 41, nome: "Sweet Child O' Mine", banda: "Guns N' Roses", estilo: "Rock" },
    { id: 42, nome: "Back in Black", banda: "AC/DC", estilo: "Rock" },
    { id: 43, nome: "Viva La Vida", banda: "Coldplay", estilo: "Pop" },
    { id: 44, nome: "Someone Like You", banda: "Adele", estilo: "Pop" },
    { id: 45, nome: "Rap God", banda: "Eminem", estilo: "Hip Hop" },
    { id: 46, nome: "HUMBLE.", banda: "Kendrick Lamar", estilo: "Hip Hop" },
    { id: 47, nome: "One More Time", banda: "Daft Punk", estilo: "Eletronica" },
    { id: 48, nome: "Strobe", banda: "Deadmau5", estilo: "Eletronica" },
    { id: 49, nome: "Master of Puppets", banda: "Metallica", estilo: "Metal" },
    { id: 50, nome: "Psychosocial", banda: "Slipknot", estilo: "Metal" },
    { id: 51, nome: "Deus de Promessas", banda: "Davi Sacer", estilo: "Gospel" },
    { id: 52, nome: "Ousado Amor", banda: "Isaias Saad", estilo: "Gospel" },
    { id: 53, nome: "Redemption Song", banda: "Bob Marley", estilo: "Reggae" },
    { id: 54, nome: "Exodus", banda: "Bob Marley", estilo: "Reggae" },
    { id: 55, nome: "Fluorescent Adolescent", banda: "Arctic Monkeys", estilo: "Indie" },
    { id: 56, nome: "Somebody Told Me", banda: "The Killers", estilo: "Indie" },
    { id: 57, nome: "Mi Gente", banda: "J Balvin", estilo: "Latina" },
    { id: 58, nome: "Hawái", banda: "Maluma", estilo: "Latina" },
    { id: 51, nome: "Doa a Tua Vida", banda: "Janayara Lima.", estilo: "Gospel" },
    { id: 51, nome: "Perdulário", banda: "Colo de Deus", estilo: "Gospel" },
    { id: 52, nome: "Ousado Amor", banda: "Isaias Saad", estilo: "Gospel" },
    { id: 53, nome: "Redemption Song", banda: "Bob Marley", estilo: "Reggae" },
    { id: 54, nome: "Exodus", banda: "Bob Marley", estilo: "Reggae" },
    { id: 55, nome: "Fluorescent Adolescent", banda: "Arctic Monkeys", estilo: "Indie" },
    { id: 56, nome: "Somebody Told Me", banda: "The Killers", estilo: "Indie" },
    { id: 57, nome: "Mi Gente", banda: "J Balvin", estilo: "Latina" },
    { id: 58, nome: "Hawái", banda: "Maluma", estilo: "Latina" },
    { id: 59, nome: "Burguesinha", banda: "Seu Jorge", estilo: "Pagode" },
    { id: 60, nome: "Party in the U.S.A.", banda: "Maluma", estilo: "Pop" }
];

app.get("/", (req, res) => {
    res.send("<h1>API de músicas rodando!</h1>");
});

app.get("/musicas", (req, res) => {
    res.status(200).json(musicas);
});

app.get("/musicas/nome/:nome", (req, res) => {
    const nome = req.params.nome;

    const resultado = musicas.filter(m => m.nome == nome);

    if (resultado.length === 0) {
        return res.status(404).json({
            mensagem: "Nenhuma música encontrada com esse nome"
        });
    }

    res.status(200).json(resultado);
});

app.get("/musicas/estilo/:estilo", (req, res) => {
    const estilo = req.params.estilo;

    const resultado = musicas.filter(m => m.estilo == estilo);

    if (resultado.length === 0) {
        return res.status(404).json({
            mensagem: "Nenhuma música encontrada com esse estilo"
        });
    }

    res.status(200).json(resultado);
});

app.get("/musicas/banda/:banda", (req, res) => {
    const banda = req.params.banda;

    const resultado = musicas.filter(m => m.banda == banda);

    if (resultado.length === 0) {
        return res.status(404).json({
            mensagem: "Nenhuma música encontrada com essa banda"
        });
    }

    res.status(200).json(resultado);
});

app.listen(porta, () => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`);
});