import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js"

const app = express();
app.use(express.json());

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.");
});


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
});

app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find();
    res.status(200).json(listaLivros);
});

app.post("/livros", (req, res) => { //CREATE
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso");
})

app.get("/livros/:id", (req, res) => { //READ
    const index  = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req,res) =>{ //UPDATE
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).send("Titulo Atualizado com Sucesso");
})

app.delete("/livros/:id", (req, res) =>{ //DELETE
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.");
})




function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

// 

export default app;