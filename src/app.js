import express from "express";
import conectaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
routes(app);


const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.");
});

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