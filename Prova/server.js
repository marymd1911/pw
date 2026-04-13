import express from 'express';
import cors from 'cors';

const app = express();
const porta = 8000;

app.use(express.json());
app.use(cors());

const filmes = [
    { id: 1, titulo: "Vingadores", genero: "Ação" },
    { id: 2, titulo: "Titanic", genero: "Romance" },
    { id: 3, titulo: "It: A Coisa", genero: "Terror" },
    { id: 4, titulo: "Matrix", genero: "Ficção" },
    { id: 5, titulo: "Avatar", genero: "Ficção" },
    { id: 6, titulo: "Batman", genero: "Ação" },
    { id: 7, titulo: "Coringa", genero: "Drama" },
    { id: 8, titulo: "Homem-Aranha", genero: "Ação" },
    { id: 9, titulo: "Frozen", genero: "Animação" },
    { id: 10, titulo: "Shrek", genero: "Comédia" },
    { id: 11, titulo: "Toy Story", genero: "Animação" },
    { id: 12, titulo: "Carros", genero: "Animação" },
    { id: 13, titulo: "Interestelar", genero: "Ficção" },
    { id: 14, titulo: "Duna", genero: "Ficção" },
    { id: 15, titulo: "Pantera Negra", genero: "Ação" },
    { id: 16, titulo: "Thor", genero: "Ação" },
    { id: 17, titulo: "Capitão América", genero: "Ação" },
    { id: 18, titulo: "Homem de Ferro", genero: "Ação" },
    { id: 19, titulo: "Deadpool", genero: "Comédia" },
    { id: 20, titulo: "Logan", genero: "Drama" },
    { id: 21, titulo: "Harry Potter 1", genero: "Fantasia" },
    { id: 22, titulo: "Harry Potter 2", genero: "Fantasia" },
    { id: 23, titulo: "Harry Potter 3", genero: "Fantasia" },
    { id: 24, titulo: "Harry Potter 4", genero: "Fantasia" },
    { id: 25, titulo: "Senhor dos Anéis 1", genero: "Fantasia" },
    { id: 26, titulo: "Senhor dos Anéis 2", genero: "Fantasia" },
    { id: 27, titulo: "Senhor dos Anéis 3", genero: "Fantasia" },
    { id: 28, titulo: "Velozes e Furiosos 1", genero: "Ação" },
    { id: 29, titulo: "Velozes e Furiosos 2", genero: "Ação" },
    { id: 30, titulo: "Velozes e Furiosos 3", genero: "Ação" },
    { id: 31, titulo: "Transformers 1", genero: "Ação" },
    { id: 32, titulo: "Transformers 2", genero: "Ação" },
    { id: 33, titulo: "Transformers 3", genero: "Ação" },
    { id: 34, titulo: "Jurassic Park", genero: "Aventura" },
    { id: 35, titulo: "Jurassic World", genero: "Aventura" },
    { id: 36, titulo: "Minions", genero: "Comédia" },
    { id: 37, titulo: "Meu Malvado Favorito", genero: "Comédia" },
    { id: 38, titulo: "Up: Altas Aventuras", genero: "Animação" },
    { id: 39, titulo: "Divertida Mente", genero: "Animação" },
    { id: 40, titulo: "Encanto", genero: "Animação" }
];

// Rotas
app.get("/", (req, res) => {
    res.send("API de Filmes com 40 dados 🎬");
});

app.get("/filmes", (req, res) => {
    res.json(filmes);
});

app.get("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    res.json(filme);
});

app.post("/filmes", (req, res) => {
    const { titulo, genero } = req.body;

    const novoFilme = {
        id: filmes.length + 1,
        titulo,
        genero
    };

    filmes.push(novoFilme);

    res.status(201).json(novoFilme);
});

app.put("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, genero } = req.body;

    const filme = filmes.find(f => f.id === id);

    if (!filme) {
        return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    filme.titulo = titulo;
    filme.genero = genero;

    res.json(filme);
});

app.delete("/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = filmes.findIndex(f => f.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    filmes.splice(index, 1);

    res.json({ mensagem: "Filme removido" });
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
